import { useParametersStore } from '@/store/parametersStore';
import { formatCurrency } from '@/lib/utils';

export function ResultsComparison() {
  const { results } = useParametersStore();
  const { option1, option2, option3 } = results;

  const getCostClass = (value: number) => {
    if (value < 0) return 'text-ndis-green font-semibold';
    if (value > 0) return 'text-ndis-red font-semibold';
    return 'text-gray-900';
  };

  const formatValue = (value: number) => {
    if (value < 0) return `(${formatCurrency(-value)})`;
    return formatCurrency(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        6-Year Cost Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Cost Category
              </th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">
                Option 1<br />
                <span className="text-xs font-normal">Separate Documents</span>
              </th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">
                Option 2<br />
                <span className="text-xs font-normal">Unified Document</span>
              </th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">
                Option 3<br />
                <span className="text-xs font-normal">Layered Access</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-3 px-4 font-medium text-gray-900">
                NDIA Direct Costs
              </td>
              <td className="py-3 px-4 text-right">
                {formatCurrency(option1.ndia.sixYearTotal)}
              </td>
              <td className="py-3 px-4 text-right">
                {formatCurrency(option2.ndia.sixYearTotal)}
              </td>
              <td className="py-3 px-4 text-right">
                {formatCurrency(option3.ndia.netCost || option3.ndia.sixYearTotal)}
                {option3.ndia.efficiencySavings && (
                  <div className="text-xs text-ndis-green">
                    ({formatCurrency(option3.ndia.efficiencySavings)} saved)
                  </div>
                )}
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-900">
                User-Side Impact
              </td>
              <td className={`py-3 px-4 text-right ${getCostClass(option1.users.total)}`}>
                +{formatCurrency(option1.users.total)}
              </td>
              <td className={`py-3 px-4 text-right ${getCostClass(option2.users.total)}`}>
                +{formatCurrency(option2.users.total)}
              </td>
              <td className={`py-3 px-4 text-right ${getCostClass(option3.users.total)}`}>
                {formatValue(option3.users.total)}
              </td>
            </tr>

            <tr className="bg-ndis-purple bg-opacity-10 font-bold">
              <td className="py-4 px-4 text-gray-900 text-lg">
                SYSTEM TOTAL
              </td>
              <td className={`py-4 px-4 text-right text-lg ${getCostClass(option1.systemTotal)}`}>
                {formatValue(option1.systemTotal)}
              </td>
              <td className={`py-4 px-4 text-right text-lg ${getCostClass(option2.systemTotal)}`}>
                {formatValue(option2.systemTotal)}
              </td>
              <td className={`py-4 px-4 text-right text-lg ${getCostClass(option3.systemTotal)}`}>
                {formatValue(option3.systemTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold text-gray-900 mb-2">Key Insights</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• <span className="text-ndis-red">Red values</span> indicate costs to the system</li>
          <li>• <span className="text-ndis-green">Green values (in parentheses)</span> indicate net benefits</li>
          <li>• User-side impact includes processing costs, errors, training, and tools</li>
          <li>• System total combines NDIA and user-side impacts</li>
        </ul>
      </div>
    </div>
  );
}
