import { useParametersStore } from '@/store/parametersStore';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

export function DerivedMetrics() {
  const { results } = useParametersStore();
  const { derived } = results;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-ndis-purple" />
        Calculated Metrics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-600 mb-1">Annual Transactions</div>
          <div className="text-2xl font-bold text-ndis-purple">
            {formatNumber(derived.annualTransactions)}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-600 mb-1">Avg Transaction Value</div>
          <div className="text-2xl font-bold text-ndis-purple">
            {formatCurrency(derived.averageTransactionValue)}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-600 mb-1">Annual Lookups</div>
          <div className="text-2xl font-bold text-ndis-purple">
            {formatNumber(derived.annualLookups)}
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-xs text-gray-500">
        These metrics are calculated from the scheme scale parameters above
      </p>
    </div>
  );
}
