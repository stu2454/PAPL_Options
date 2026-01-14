import { AllParameters } from '@/types';

export const DEFAULT_PARAMETERS: AllParameters = {
  schemeScale: {
    activeParticipants: 751446,
    annualPaymentFlows: 49_500_000_000, // $49.5B
    activePlanManagers: 500,
    largeOperatorsPct: 30, // 30%
    transactionFrequency: 2, // 2 invoices per participant per week
    activeServiceRate: 70, // 70%
  },
  currentState: {
    currentPaplMaintenance: 330_000,
    currentErrorRate: 0.5, // 0.5%
    currentLookupTime: 120, // 120 seconds
    versionControlFailureRate: 5, // 5%
    frameworkClarificationRate: 2, // 2%
  },
  transition: {
    transitionDuration: 6, // 6 years
    planManagerHourlyCost: 75,
    errorCorrectionCost: 200,
  },
  option3: {
    webToolLookupTime: 40, // 40 seconds
    webToolAdoptionRate: 60, // 60%
    webToolErrorRate: 0.3, // 0.3%
    apiLookupTime: 10, // 10 seconds
    apiAdoptionRate: 25, // 25%
    apiIntegrationCostLarge: 200_000,
    apiIntegrationCostMedium: 75_000,
    option3PocCost: 175_000,
    option3ProductionCost: 425_000,
    option3AnnualMaintenance: 414_000,
  },
  risk: {
    option2ComplexityPenalty: 17, // 17%
    option2ErrorIncrease: 0.2, // 0.2 percentage points
    option1ClarificationCost: 37.5,
  },
};

export const PARAMETER_RANGES = {
  schemeScale: {
    activeParticipants: { min: 500_000, max: 1_000_000, step: 10_000 },
    annualPaymentFlows: { min: 30_000_000_000, max: 80_000_000_000, step: 1_000_000_000 },
    activePlanManagers: { min: 100, max: 1_000, step: 10 },
    largeOperatorsPct: { min: 10, max: 50, step: 1 },
    transactionFrequency: { min: 1, max: 4, step: 0.5 },
    activeServiceRate: { min: 50, max: 90, step: 1 },
  },
  currentState: {
    currentPaplMaintenance: { min: 100_000, max: 500_000, step: 10_000 },
    currentErrorRate: { min: 0.2, max: 1.0, step: 0.1 },
    currentLookupTime: { min: 60, max: 180, step: 10 },
    versionControlFailureRate: { min: 2, max: 10, step: 0.5 },
    frameworkClarificationRate: { min: 1, max: 5, step: 0.5 },
  },
  transition: {
    transitionDuration: { min: 3, max: 10, step: 1 },
    planManagerHourlyCost: { min: 50, max: 150, step: 5 },
    errorCorrectionCost: { min: 100, max: 400, step: 10 },
  },
  option3: {
    webToolLookupTime: { min: 20, max: 60, step: 5 },
    webToolAdoptionRate: { min: 30, max: 80, step: 5 },
    webToolErrorRate: { min: 0.1, max: 0.5, step: 0.05 },
    apiLookupTime: { min: 5, max: 15, step: 1 },
    apiAdoptionRate: { min: 10, max: 40, step: 5 },
    apiIntegrationCostLarge: { min: 100_000, max: 500_000, step: 25_000 },
    apiIntegrationCostMedium: { min: 30_000, max: 150_000, step: 10_000 },
    option3PocCost: { min: 100_000, max: 300_000, step: 25_000 },
    option3ProductionCost: { min: 250_000, max: 700_000, step: 25_000 },
    option3AnnualMaintenance: { min: 250_000, max: 600_000, step: 25_000 },
  },
  risk: {
    option2ComplexityPenalty: { min: 0, max: 30, step: 1 },
    option2ErrorIncrease: { min: 0, max: 0.5, step: 0.05 },
    option1ClarificationCost: { min: 20, max: 60, step: 2.5 },
  },
};

export const PASSWORD = 'digitalPAPL2026';
