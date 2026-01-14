import { AllParameters, DerivedMetrics, OptionResults } from '@/types';

export function calculateOption2(
  params: AllParameters,
  derived: DerivedMetrics
): OptionResults {
  const { schemeScale, currentState, transition, risk } = params;
  const { annualTransactions, annualLookups } = derived;
  
  // NDIA Direct Costs
  const upfront = 320_000;
  const annualMaintenance = 240_000;
  const sixYearTotal = upfront + (annualMaintenance * transition.transitionDuration);
  
  // User-Side Costs
  
  // 1. Additional processing time from complexity
  const baseProcessingHours = annualLookups * (currentState.currentLookupTime / 3600);
  const complexityPenaltyHours = baseProcessingHours * (risk.option2ComplexityPenalty / 100);
  const processingCostAnnual = complexityPenaltyHours * transition.planManagerHourlyCost;
  const processingCost6yr = processingCostAnnual * transition.transitionDuration;
  
  // 2. Proprietary tool development
  const largeOperators = schemeScale.activePlanManagers * (schemeScale.largeOperatorsPct / 100);
  const proprietaryToolsCost = largeOperators * 300_000; // one-time
  
  // 3. Higher error correction
  const baselineErrors = annualTransactions * (currentState.currentErrorRate / 100);
  const additionalErrors = annualTransactions * (risk.option2ErrorIncrease / 100);
  const errorCostAnnual = additionalErrors * transition.errorCorrectionCost;
  const errorCost6yr = errorCostAnnual * transition.transitionDuration;
  
  // 4. Training overhead (higher than Option 1)
  const trainingInitial = schemeScale.activePlanManagers * 15_000;
  const trainingAnnual = schemeScale.activePlanManagers * 10_000;
  const training6yr = trainingInitial + (trainingAnnual * transition.transitionDuration);
  
  // 5. QA burden
  const qaCostAnnual = schemeScale.activePlanManagers * 10_000;
  const qaCost6yr = qaCostAnnual * transition.transitionDuration;
  
  const totalUserCost = 
    processingCost6yr + 
    proprietaryToolsCost + 
    errorCost6yr + 
    training6yr + 
    qaCost6yr;
  
  return {
    ndia: {
      upfront,
      annualMaintenance,
      sixYearTotal,
    },
    users: {
      processingCosts: processingCost6yr,
      errorCorrectionCosts: errorCost6yr,
      trainingCosts: training6yr,
      infrastructureCosts: qaCost6yr,
      toolDevelopmentCosts: proprietaryToolsCost,
      total: totalUserCost,
    },
    systemTotal: sixYearTotal + totalUserCost,
  };
}
