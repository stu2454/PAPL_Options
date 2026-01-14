import { AllParameters, DerivedMetrics, OptionResults } from '@/types';

export function calculateOption1(
  params: AllParameters,
  derived: DerivedMetrics
): OptionResults {
  const { schemeScale, currentState, transition, risk } = params;
  const { annualTransactions, averageTransactionValue } = derived;
  
  // NDIA Direct Costs
  const upfront = 100_000;
  const annualMaintenance = 340_000;
  const sixYearTotal = upfront + (annualMaintenance * transition.transitionDuration);
  
  // User-Side Costs
  
  // 1. Framework clarification
  const clarificationTransactions = 
    annualTransactions * (currentState.frameworkClarificationRate / 100);
  const clarificationCostAnnual = 
    clarificationTransactions * risk.option1ClarificationCost;
  const clarificationCost6yr = 
    clarificationCostAnnual * transition.transitionDuration;
  
  // 2. Version control infrastructure
  const vcInfrastructureAnnual = schemeScale.activePlanManagers * 5_000;
  const vcInfrastructure6yr = vcInfrastructureAnnual * transition.transitionDuration;
  
  // 3. Training
  const trainingInitial = schemeScale.activePlanManagers * 10_000;
  const trainingAnnual = schemeScale.activePlanManagers * 5_000;
  const training6yr = trainingInitial + (trainingAnnual * transition.transitionDuration);
  
  // 4. Error correction from version control failures
  const affectedVolume = 
    schemeScale.annualPaymentFlows * (currentState.versionControlFailureRate / 100);
  const errorVolume = affectedVolume * 0.02; // 2% of affected volume mispriced
  const errorTransactions = errorVolume / averageTransactionValue;
  const errorCostAnnual = errorTransactions * transition.errorCorrectionCost;
  const errorCorrection6yr = errorCostAnnual * transition.transitionDuration;
  
  const totalUserCost = 
    clarificationCost6yr + 
    vcInfrastructure6yr + 
    training6yr + 
    errorCorrection6yr;
  
  return {
    ndia: {
      upfront,
      annualMaintenance,
      sixYearTotal,
    },
    users: {
      processingCosts: clarificationCost6yr,
      errorCorrectionCosts: errorCorrection6yr,
      trainingCosts: training6yr,
      infrastructureCosts: vcInfrastructure6yr,
      total: totalUserCost,
    },
    systemTotal: sixYearTotal + totalUserCost,
  };
}
