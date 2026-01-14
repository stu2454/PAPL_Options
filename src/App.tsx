import { useEffect, useState } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { SchemeScaleInputs } from './components/SchemeScaleInputs';
import { ResultsComparison } from './components/ResultsComparison';
import { DerivedMetrics } from './components/DerivedMetrics';
import { ScenarioManager } from './components/ScenarioManager';
import { ExportTools } from './components/ExportTools';
import { StrategicContextPage } from './components/StrategicContextPage';
import { MethodologyPage } from './components/MethodologyPage';
import { useParametersStore } from './store/parametersStore';
import { ChevronDown, ChevronUp, Calculator, BookOpen, Target } from 'lucide-react';

type Tab = 'context' | 'methodology' | 'simulator';

function App() {
  const { initialize } = useParametersStore();
  const [showParameters, setShowParameters] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('context'); // Start with Strategic Context

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <PasswordGate>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-ndis-purple text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">
              NDIS Pricing Options Decision Tool
            </h1>
            <p className="mt-2 text-white text-opacity-90">
              Explore cost-benefit implications of three pricing distribution options during OFP/NFP transition
            </p>
          </div>
          
          {/* Tab Navigation - Reordered: Context → Methodology → Simulator */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 border-b border-white border-opacity-20 -mb-px">
              <button
                onClick={() => setActiveTab('context')}
                className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'context'
                    ? 'bg-gray-50 text-ndis-purple rounded-t-lg'
                    : 'text-white hover:text-white hover:bg-white hover:bg-opacity-10 rounded-t-lg'
                }`}
              >
                <Target className="w-4 h-4" />
                Strategic Context
              </button>
              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'methodology'
                    ? 'bg-gray-50 text-ndis-purple rounded-t-lg'
                    : 'text-white hover:text-white hover:bg-white hover:bg-opacity-10 rounded-t-lg'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Methodology
              </button>
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'simulator'
                    ? 'bg-gray-50 text-ndis-purple rounded-t-lg'
                    : 'text-white hover:text-white hover:bg-white hover:bg-opacity-10 rounded-t-lg'
                }`}
              >
                <Calculator className="w-4 h-4" />
                Interactive Simulator
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {activeTab === 'context' ? (
            <StrategicContextPage />
          ) : activeTab === 'methodology' ? (
            <MethodologyPage />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Parameters Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <button
                    onClick={() => setShowParameters(!showParameters)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 mb-4"
                  >
                    Parameters
                    {showParameters ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {showParameters && (
                    <div className="space-y-6">
                      <SchemeScaleInputs />
                      
                      <div className="pt-6 border-t border-gray-200">
                        <ScenarioManager />
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200">
                        <ExportTools />
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-ndis-purple text-white rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-2">Quick Guide:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Adjust parameters using sliders</li>
                    <li>• Click ℹ️ icon for detailed documentation</li>
                    <li>• Results update in real-time</li>
                    <li>• Save scenarios for later comparison</li>
                    <li>• View Strategic Context for the "why"</li>
                    <li>• View Methodology for calculation details</li>
                  </ul>
                </div>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-3 space-y-6">
                <DerivedMetrics />
                <ResultsComparison />
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    About This Tool
                  </h3>
                  <div className="prose prose-sm text-gray-600">
                    <p>
                      This simulation tool helps decision-makers explore the cost-benefit implications
                      of three options for distributing NDIS pricing information during the OFP/NFP
                      transition period.
                    </p>
                    <p className="mt-2">
                      <strong>Option 1 (Separate Documents):</strong> Maintain distinct PAPL documents
                      for OFP and NFP frameworks.
                    </p>
                    <p className="mt-2">
                      <strong>Option 2 (Unified Document):</strong> Combine both frameworks into a
                      single PAPL document.
                    </p>
                    <p className="mt-2">
                      <strong>Option 3 (Layered Access):</strong> Provide multiple access tiers
                      (documents, web tool, API) from a single structured data source.
                    </p>
                    <p className="mt-4 text-xs">
                      Based on Q1 2025-26 Quarterly Dashboard data (751,446 active participants,
                      $49.5B annual payment flows). Start with <strong>Strategic Context</strong> tab
                      to understand why this decision matters, then check <strong>Methodology</strong> for
                      calculation details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
            <p>
              NDIS Pricing Options Decision Tool · {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-xs">
              Data source: NDIA Q1 2025-26 Quarterly Performance Dashboard
            </p>
          </div>
        </footer>
      </div>
    </PasswordGate>
  );
}

export default App;
