import { BookOpen, Database, Calculator, FileText } from 'lucide-react';
import { 
  CALCULATION_METHODOLOGY, 
  DATA_SOURCES, 
  DERIVED_METRICS_DOCUMENTATION 
} from '@/lib/documentation';

export function MethodologyPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-ndis-purple" />
          <h1 className="text-3xl font-bold text-gray-900">
            Calculation Methodology
          </h1>
        </div>
        <p className="text-gray-600">
          Complete documentation of how all parameters are derived and how costs are calculated
          for each option. This methodology is transparent and evidence-based, drawing from
          NDIA Q1 2025-26 Quarterly Dashboard data and industry benchmarks.
        </p>
      </div>

      {/* Data Sources */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">Data Sources</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-md">
            <h3 className="font-semibold text-blue-900 mb-2">
              Primary Source: {DATA_SOURCES.primary.name}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Date: {DATA_SOURCES.primary.date}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium">Active Participants:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.activeParticipants}
              </div>
              <div>
                <span className="font-medium">Quarterly Payments:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.quarterlyPayments}
              </div>
              <div>
                <span className="font-medium">Annual Payments:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.annualPayments}
              </div>
              <div>
                <span className="font-medium">Avg Per Participant:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.averagePaymentPerParticipant}
              </div>
              <div>
                <span className="font-medium">Active Providers:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.activeProviders}
              </div>
              <div>
                <span className="font-medium">Payment Speed:</span>{' '}
                {DATA_SOURCES.primary.keyFigures.paymentSpeed}
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-2">Secondary Sources</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>{DATA_SOURCES.secondary.industryBenchmarks}</li>
              <li>{DATA_SOURCES.secondary.governmentPrecedents}</li>
              <li>{DATA_SOURCES.secondary.marketAnalysis}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Derived Metrics */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">Derived Metrics</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(DERIVED_METRICS_DOCUMENTATION).map(([key, doc]) => (
            <div key={key} className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-2">{doc.label}</h3>
              <p className="text-sm text-gray-700 mb-3">{doc.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white rounded border border-gray-200">
                  <span className="font-medium text-gray-700">Formula:</span>
                  <p className="font-mono text-xs mt-1 text-gray-600">{doc.formula}</p>
                </div>
                
                <div className="p-2 bg-green-50 rounded border border-green-200">
                  <span className="font-medium text-green-900">Example:</span>
                  <p className="font-mono text-xs mt-1 text-gray-700">{doc.example}</p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">Impact:</span>
                  <p className="text-gray-600 mt-1">{doc.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Option 1 Calculations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">
            {CALCULATION_METHODOLOGY.option1.title}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">{CALCULATION_METHODOLOGY.option1.description}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NDIA Direct Costs</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-blue-900">Upfront Investment</span>
                  <span className="font-semibold text-blue-900">
                    {CALCULATION_METHODOLOGY.option1.ndiaCosts.upfront.value}
                  </span>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  {CALCULATION_METHODOLOGY.option1.ndiaCosts.upfront.calculation}
                </p>
                <p className="text-xs text-gray-600 italic">
                  {CALCULATION_METHODOLOGY.option1.ndiaCosts.upfront.rationale}
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-blue-900">Annual Maintenance</span>
                  <span className="font-semibold text-blue-900">
                    {CALCULATION_METHODOLOGY.option1.ndiaCosts.annualMaintenance.value}
                  </span>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  {CALCULATION_METHODOLOGY.option1.ndiaCosts.annualMaintenance.calculation}
                </p>
                <p className="text-xs text-gray-600 italic">
                  {CALCULATION_METHODOLOGY.option1.ndiaCosts.annualMaintenance.rationale}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Side Costs</h3>
            <div className="space-y-3">
              {Object.entries(CALCULATION_METHODOLOGY.option1.userCosts).map(([key, cost]) => (
                <div key={key} className="p-3 bg-red-50 rounded-md">
                  <div className="font-medium text-red-900 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Calculation:</span>
                      <p className="text-gray-600">{cost.calculation}</p>
                    </div>
                    <div className="p-2 bg-white rounded border border-red-200">
                      <span className="font-medium text-gray-700">Formula:</span>
                      <p className="font-mono text-gray-600 whitespace-pre-wrap">{cost.formula}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded border border-green-200">
                      <span className="font-medium text-green-900">Example:</span>
                      <p className="font-mono text-gray-700">{cost.example}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rationale:</span>
                      <p className="text-gray-600">{cost.rationale}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Option 2 Calculations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">
            {CALCULATION_METHODOLOGY.option2.title}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">{CALCULATION_METHODOLOGY.option2.description}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NDIA Direct Costs</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-blue-900">Upfront Investment</span>
                  <span className="font-semibold text-blue-900">
                    {CALCULATION_METHODOLOGY.option2.ndiaCosts.upfront.value}
                  </span>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  {CALCULATION_METHODOLOGY.option2.ndiaCosts.upfront.calculation}
                </p>
                <p className="text-xs text-gray-600 italic">
                  {CALCULATION_METHODOLOGY.option2.ndiaCosts.upfront.rationale}
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-blue-900">Annual Maintenance</span>
                  <span className="font-semibold text-blue-900">
                    {CALCULATION_METHODOLOGY.option2.ndiaCosts.annualMaintenance.value}
                  </span>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  {CALCULATION_METHODOLOGY.option2.ndiaCosts.annualMaintenance.calculation}
                </p>
                <p className="text-xs text-gray-600 italic">
                  {CALCULATION_METHODOLOGY.option2.ndiaCosts.annualMaintenance.rationale}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Side Costs</h3>
            <div className="space-y-3">
              {Object.entries(CALCULATION_METHODOLOGY.option2.userCosts).map(([key, cost]) => (
                <div key={key} className="p-3 bg-red-50 rounded-md">
                  <div className="font-medium text-red-900 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Calculation:</span>
                      <p className="text-gray-600">{cost.calculation}</p>
                    </div>
                    <div className="p-2 bg-white rounded border border-red-200">
                      <span className="font-medium text-gray-700">Formula:</span>
                      <p className="font-mono text-gray-600 whitespace-pre-wrap">{cost.formula}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded border border-green-200">
                      <span className="font-medium text-green-900">Example:</span>
                      <p className="font-mono text-gray-700">{cost.example}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rationale:</span>
                      <p className="text-gray-600">{cost.rationale}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Option 3 Calculations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">
            {CALCULATION_METHODOLOGY.option3.title}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">{CALCULATION_METHODOLOGY.option3.description}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NDIA Costs</h3>
            <div className="space-y-3">
              {Object.entries(CALCULATION_METHODOLOGY.option3.ndiaCosts).map(([key, cost]) => (
                <div key={key} className="p-3 bg-blue-50 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-blue-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-semibold text-blue-900">{cost.value}</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2 whitespace-pre-wrap">
                    {cost.calculation || cost.breakdown}
                  </p>
                  <p className="text-xs text-gray-600 italic">{cost.rationale}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Side Benefits</h3>
            <div className="space-y-3">
              {Object.entries(CALCULATION_METHODOLOGY.option3.userBenefits).map(([key, benefit]) => (
                <div key={key} className="p-3 bg-green-50 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-green-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {benefit.sixYearTotal && (
                      <span className="font-semibold text-green-900">{benefit.sixYearTotal}</span>
                    )}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Calculation:</span>
                      <p className="text-gray-600">{benefit.calculation}</p>
                    </div>
                    <div className="p-2 bg-white rounded border border-green-200">
                      <span className="font-medium text-gray-700">Formula:</span>
                      <p className="font-mono text-gray-600 whitespace-pre-wrap">{benefit.formula}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rationale:</span>
                      <p className="text-gray-600">{benefit.rationale}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Side Costs</h3>
            <div className="space-y-3">
              {Object.entries(CALCULATION_METHODOLOGY.option3.userCosts).map(([key, cost]) => (
                <div key={key} className="p-3 bg-red-50 rounded-md">
                  <div className="font-medium text-red-900 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Calculation:</span>
                      <p className="text-gray-600">{cost.calculation}</p>
                    </div>
                    <div className="p-2 bg-white rounded border border-red-200">
                      <span className="font-medium text-gray-700">Formula:</span>
                      <p className="font-mono text-gray-600 whitespace-pre-wrap">{cost.formula}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded border border-green-200">
                      <span className="font-medium text-green-900">Example:</span>
                      <p className="font-mono text-gray-700">{cost.example}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rationale:</span>
                      <p className="text-gray-600">{cost.rationale}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-ndis-purple text-white rounded-lg p-6">
        <h3 className="font-semibold mb-2">Transparency Note</h3>
        <p className="text-sm text-ndis-purple-100">
          All calculations in this tool are fully transparent and evidence-based. Parameters
          can be adjusted to test different assumptions. The methodology is designed to be
          defensible for executive decision-making and can be validated by comparing against
          the source analysis document.
        </p>
      </div>
    </div>
  );
}
