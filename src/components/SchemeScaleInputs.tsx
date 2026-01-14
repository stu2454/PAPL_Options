import { ParameterInput } from './ParameterInput';
import { useParametersStore } from '@/store/parametersStore';
import { PARAMETER_RANGES } from '@/lib/constants';
import { PARAMETER_DOCUMENTATION } from '@/lib/documentation';
import { formatCurrency } from '@/lib/utils';

export function SchemeScaleInputs() {
  const { parameters, updateParameter } = useParametersStore();
  const { schemeScale } = parameters;
  const ranges = PARAMETER_RANGES.schemeScale;
  const docs = PARAMETER_DOCUMENTATION.schemeScale;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Scheme Scale</h3>

      <ParameterInput
        label="Active Participants"
        value={schemeScale.activeParticipants}
        onChange={(v) => updateParameter('schemeScale', 'activeParticipants', v)}
        {...ranges.activeParticipants}
        tooltip={docs.activeParticipants.description}
        documentation={docs.activeParticipants}
      />

      <ParameterInput
        label="Annual Payment Flows"
        value={schemeScale.annualPaymentFlows}
        onChange={(v) => updateParameter('schemeScale', 'annualPaymentFlows', v)}
        {...ranges.annualPaymentFlows}
        format={formatCurrency}
        tooltip={docs.annualPaymentFlows.description}
        documentation={docs.annualPaymentFlows}
      />

      <ParameterInput
        label="Active Plan Managers"
        value={schemeScale.activePlanManagers}
        onChange={(v) => updateParameter('schemeScale', 'activePlanManagers', v)}
        {...ranges.activePlanManagers}
        tooltip={docs.activePlanManagers.description}
        documentation={docs.activePlanManagers}
      />

      <ParameterInput
        label="Large Operators"
        value={schemeScale.largeOperatorsPct}
        onChange={(v) => updateParameter('schemeScale', 'largeOperatorsPct', v)}
        {...ranges.largeOperatorsPct}
        unit="%"
        tooltip={docs.largeOperatorsPct.description}
        documentation={docs.largeOperatorsPct}
      />

      <ParameterInput
        label="Transaction Frequency"
        value={schemeScale.transactionFrequency}
        onChange={(v) => updateParameter('schemeScale', 'transactionFrequency', v)}
        {...ranges.transactionFrequency}
        unit=" invoices/week"
        tooltip={docs.transactionFrequency.description}
        documentation={docs.transactionFrequency}
      />

      <ParameterInput
        label="Active Service Rate"
        value={schemeScale.activeServiceRate}
        onChange={(v) => updateParameter('schemeScale', 'activeServiceRate', v)}
        {...ranges.activeServiceRate}
        unit="%"
        tooltip={docs.activeServiceRate.description}
        documentation={docs.activeServiceRate}
      />
    </div>
  );
}
