import { AllParameters, DerivedMetrics } from '@/types';

export function calculateDerivedMetrics(params: AllParameters): DerivedMetrics {
  const { schemeScale } = params;
  
  // Annual transactions = participants × active_rate × frequency × 52 weeks
  const annualTransactions = Math.round(
    schemeScale.activeParticipants *
    (schemeScale.activeServiceRate / 100) *
    schemeScale.transactionFrequency *
    52
  );
  
  // Average transaction value = annual payments ÷ transactions
  const averageTransactionValue = 
    schemeScale.annualPaymentFlows / annualTransactions;
  
  // Annual lookups = transactions × 60% (need consultation) × 2 lookups per transaction
  const annualLookups = Math.round(annualTransactions * 0.6 * 2);
  
  return {
    annualTransactions,
    averageTransactionValue,
    annualLookups,
  };
}
