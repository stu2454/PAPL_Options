import { AllParameters, DerivedMetrics, OptionResults } from '@/types';

export function calculateOption3(
  params: AllParameters,
  derived: DerivedMetrics
): OptionResults {
  const { schemeScale, currentState, transition, option3 } = params;
  const { annualTransactions, annualLookups } = derived;
  
  // NDIA Direct Costs (Gross)
  const upfront = option3.option3PocCost + option3.option3ProductionCost;
  const annualMaintenanceCost = option3.option3AnnualMaintenance;
  const sixYearGross = upfront + (annualMaintenanceCost * transition.transitionDuration);
  
  // NDIA Efficiency Savings
  const currentPaplCost = currentState.currentPaplMaintenance;
  const automatedPaplCost = 40_000;
  const paplSavingsAnnual = currentPaplCost - automatedPaplCost;
  
  const catalogueSavingsAnnual = 80_000;
  const coordinationSavingsAnnual = 50_000;
  
  const totalSavingsAnnual = 
    paplSavingsAnnual + catalogueSavingsAnnual + coordinationSavingsAnnual;
  const totalSavings6yr = totalSavingsAnnual * transition.transitionDuration;
  
  const ndiaNetCost = sixYearGross - totalSavings6yr;
  
  // User-Side Benefits
  
  // 1. Processing efficiency gains
  const baselineLookupHours = annualLookups * (currentState.currentLookupTime / 3600);
  const baselineCostAnnual = baselineLookupHours * transition.planManagerHourlyCost;
  
  const webToolAdoption = option3.webToolAdoptionRate / 100;
  const apiAdoption = option3.apiAdoptionRate / 100;
  
  const webToolLookups = annualLookups * webToolAdoption;
  const webToolHours = webToolLookups * (option3.webToolLookupTime / 3600);
  const webToolCost = webToolHours * transition.planManagerHourlyCost;
  
  const apiLookups = annualLookups * apiAdoption;
  const apiHours = apiLookups * (option3.apiLookupTime / 3600);
  const apiCost = apiHours * transition.planManagerHourlyCost;
  
  const remainingLookups = annualLookups * (1 - webToolAdoption - apiAdoption);
  const remainingHours = remainingLookups * (currentState.currentLookupTime / 3600);
  const remainingCost = remainingHours * transition.planManagerHourlyCost;
  
  const newTotalAnnual = webToolCost + apiCost + remainingCost;
  const processingSavingsAnnual = baselineCostAnnual - newTotalAnnual;
  const processingSavings6yr = processingSavingsAnnual * transition.transitionDuration;
  
  // 2. Error rate reduction
  const baselineErrors = annualTransactions * (currentState.currentErrorRate / 100);
  const baselineErrorCostAnnual = baselineErrors * transition.errorCorrectionCost;
  
  const webToolTransactions = annualTransactions * webToolAdoption;
  const webToolErrors = webToolTransactions * (option3.webToolErrorRate / 100);
  
  const apiTransactions = annualTransactions * apiAdoption;
  const apiErrors = apiTransactions * (option3.webToolErrorRate / 100) * 0.5; // API even better
  
  const remainingTransactions = annualTransactions * (1 - webToolAdoption - apiAdoption);
  const remainingErrors = remainingTransactions * (currentState.currentErrorRate / 100);
  
  const newTotalErrors = webToolErrors + apiErrors + remainingErrors;
  const newErrorCostAnnual = newTotalErrors * transition.errorCorrectionCost;
  
  const errorSavingsAnnual = baselineErrorCostAnnual - newErrorCostAnnual;
  const errorSavings6yr = errorSavingsAnnual * transition.transitionDuration;
  
  // 3. Version control elimination (conservative estimate)
  const clarificationTransactions = 
    annualTransactions * (currentState.frameworkClarificationRate / 100);
  const clarificationCostAnnual = clarificationTransactions * 37.5;
  const clarificationCost6yr = clarificationCostAnnual * transition.transitionDuration;
  const versionControlSavings6yr = clarificationCost6yr * 0.5; // Conservative: 50% eliminated
  
  const totalUserBenefits = 
    processingSavings6yr + errorSavings6yr + versionControlSavings6yr;
  
  // API integration costs (one-time)
  const largeCount = 
    schemeScale.activePlanManagers * (schemeScale.largeOperatorsPct / 100) * apiAdoption;
  const mediumCount = 
    schemeScale.activePlanManagers * (1 - schemeScale.largeOperatorsPct / 100) * apiAdoption * 0.5;
  const apiIntegrationCosts = 
    (largeCount * option3.apiIntegrationCostLarge) + 
    (mediumCount * option3.apiIntegrationCostMedium);
  
  const userNetBenefit = totalUserBenefits - apiIntegrationCosts;
  
  // System total (negative = benefit)
  const systemTotal = ndiaNetCost - userNetBenefit;
  
  return {
    ndia: {
      upfront,
      annualMaintenance: annualMaintenanceCost,
      sixYearTotal: sixYearGross,
      efficiencySavings: totalSavings6yr,
      netCost: ndiaNetCost,
    },
    users: {
      processingCosts: -processingSavings6yr, // Negative = savings
      errorCorrectionCosts: -errorSavings6yr, // Negative = savings
      trainingCosts: 0, // Similar to baseline
      infrastructureCosts: apiIntegrationCosts,
      total: -userNetBenefit, // Negative = net benefit
    },
    systemTotal,
  };
}
