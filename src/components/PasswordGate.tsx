import { useState, useEffect } from 'react';
import { Lock, AlertTriangle } from 'lucide-react';

interface PasswordGateProps {
  children: React.ReactNode;
}

// Rate limiting configuration
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
const ATTEMPT_WINDOW = 5 * 60 * 1000; // 5 minutes window for attempts

interface RateLimitData {
  attempts: number[];
  lockedUntil: number | null;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rateLimitData, setRateLimitData] = useState<RateLimitData>({
    attempts: [],
    lockedUntil: null,
  });

  // Get password from environment variable or fallback
  const CORRECT_PASSWORD = import.meta.env.VITE_APP_PASSWORD || 'digitalPAPL2026';

  useEffect(() => {
    // Check if already authorized in session
    const authorized = sessionStorage.getItem('authorized');
    const authTime = sessionStorage.getItem('authTime');
    
    if (authorized === 'true' && authTime) {
      const timeElapsed = Date.now() - parseInt(authTime);
      // Session expires after 8 hours
      if (timeElapsed < 8 * 60 * 60 * 1000) {
        setIsAuthorized(true);
      } else {
        sessionStorage.removeItem('authorized');
        sessionStorage.removeItem('authTime');
      }
    }

    // Load rate limit data from localStorage
    const savedRateLimit = localStorage.getItem('rateLimitData');
    if (savedRateLimit) {
      try {
        const data = JSON.parse(savedRateLimit);
        setRateLimitData(data);
      } catch (e) {
        // Invalid data, reset
        localStorage.removeItem('rateLimitData');
      }
    }
  }, []);

  const checkRateLimit = (): boolean => {
    const now = Date.now();

    // Check if currently locked out
    if (rateLimitData.lockedUntil && now < rateLimitData.lockedUntil) {
      const remainingMinutes = Math.ceil((rateLimitData.lockedUntil - now) / 60000);
      setError(`Too many failed attempts. Please try again in ${remainingMinutes} minutes.`);
      return false;
    }

    // Clean up old attempts outside the window
    const recentAttempts = rateLimitData.attempts.filter(
      (timestamp) => now - timestamp < ATTEMPT_WINDOW
    );

    // Check if too many recent attempts
    if (recentAttempts.length >= MAX_ATTEMPTS) {
      const lockedUntil = now + LOCKOUT_DURATION;
      const newRateLimitData = {
        attempts: recentAttempts,
        lockedUntil,
      };
      setRateLimitData(newRateLimitData);
      localStorage.setItem('rateLimitData', JSON.stringify(newRateLimitData));
      
      setError(`Too many failed attempts. Locked out for 15 minutes.`);
      return false;
    }

    return true;
  };

  const recordFailedAttempt = () => {
    const now = Date.now();
    const newRateLimitData = {
      attempts: [...rateLimitData.attempts, now],
      lockedUntil: rateLimitData.lockedUntil,
    };
    setRateLimitData(newRateLimitData);
    localStorage.setItem('rateLimitData', JSON.stringify(newRateLimitData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit before attempting
    if (!checkRateLimit()) {
      setPassword('');
      return;
    }

    // Verify password
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('authorized', 'true');
      sessionStorage.setItem('authTime', Date.now().toString());
      setIsAuthorized(true);
      setError('');
      
      // Clear rate limit data on successful login
      localStorage.removeItem('rateLimitData');
      setRateLimitData({ attempts: [], lockedUntil: null });
    } else {
      recordFailedAttempt();
      
      const remainingAttempts = MAX_ATTEMPTS - (rateLimitData.attempts.length + 1);
      if (remainingAttempts > 0) {
        setError(`Incorrect password. ${remainingAttempts} attempts remaining.`);
      } else {
        setError('Too many failed attempts. Locked out for 15 minutes.');
      }
      setPassword('');
    }
  };

  const isLockedOut = rateLimitData.lockedUntil && Date.now() < rateLimitData.lockedUntil;

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-ndis-purple p-3 rounded-full">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          NDIS Pricing Options Decision Tool
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter password to access the simulator
        </p>

        {isLockedOut && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800">
              <p className="font-semibold">Account Temporarily Locked</p>
              <p className="mt-1">
                Too many failed login attempts. Please wait{' '}
                {Math.ceil((rateLimitData.lockedUntil! - Date.now()) / 60000)} minutes
                before trying again.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ndis-purple disabled:bg-gray-100 disabled:cursor-not-allowed"
              autoFocus
              disabled={isLockedOut}
            />
          </div>

          {error && !isLockedOut && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLockedOut}
            className="w-full bg-ndis-purple text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLockedOut ? 'Locked Out' : 'Access Tool'}
          </button>
        </form>

        <div className="mt-6 text-xs text-center text-gray-500 space-y-2">
          <p>Contact Stuart for access credentials</p>
          <p className="text-gray-400">
            Security: {MAX_ATTEMPTS} attempts allowed per {ATTEMPT_WINDOW / 60000} minutes
          </p>
        </div>
      </div>
    </div>
  );
}
