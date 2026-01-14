import { Info } from 'lucide-react';
import { useState } from 'react';

interface ParameterInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  format?: (value: number) => string;
  tooltip?: string;
  documentation?: {
    label: string;
    description: string;
    source?: string;
    defaultValue?: string;
    formula?: string;
    impact?: string;
  };
}

export function ParameterInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit = '',
  format,
  tooltip,
  documentation,
}: ParameterInputProps) {
  const [showDetails, setShowDetails] = useState(false);
  const displayValue = format ? format(value) : value.toLocaleString();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
          {label}
          {(tooltip || documentation) && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="group relative"
              type="button"
            >
              <Info className="w-4 h-4 text-gray-400 hover:text-ndis-purple cursor-help transition-colors" />
              {!showDetails && tooltip && (
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-10">
                  {tooltip}
                </div>
              )}
            </button>
          )}
        </label>
        <span className="text-sm font-semibold text-ndis-purple">
          {displayValue}{unit}
        </span>
      </div>

      {/* Detailed documentation panel */}
      {showDetails && documentation && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-xs space-y-2">
          <div>
            <span className="font-semibold text-blue-900">Description:</span>
            <p className="text-gray-700 mt-1">{documentation.description}</p>
          </div>
          
          {documentation.defaultValue && (
            <div>
              <span className="font-semibold text-blue-900">Default Value:</span>
              <p className="text-gray-700">{documentation.defaultValue}</p>
            </div>
          )}
          
          {documentation.formula && (
            <div>
              <span className="font-semibold text-blue-900">Formula:</span>
              <p className="text-gray-700 font-mono text-xs bg-white p-2 rounded mt-1 whitespace-pre-wrap">
                {documentation.formula}
              </p>
            </div>
          )}
          
          {documentation.source && (
            <div>
              <span className="font-semibold text-blue-900">Source:</span>
              <p className="text-gray-700">{documentation.source}</p>
            </div>
          )}
          
          {documentation.impact && (
            <div>
              <span className="font-semibold text-blue-900">Impact:</span>
              <p className="text-gray-700">{documentation.impact}</p>
            </div>
          )}
          
          <button
            onClick={() => setShowDetails(false)}
            className="text-blue-600 hover:text-blue-800 text-xs font-medium"
          >
            Close details
          </button>
        </div>
      )}

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-ndis-purple"
      />

      <div className="flex justify-between text-xs text-gray-500">
        <span>{format ? format(min) : min.toLocaleString()}{unit}</span>
        <span>{format ? format(max) : max.toLocaleString()}{unit}</span>
      </div>
    </div>
  );
}
