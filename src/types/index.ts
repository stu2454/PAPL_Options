// Core parameter types
export interface SchemeScaleParams {
  activeParticipants: number;
  annualPaymentFlows: number;
  activePlanManagers: number;
  largeOperatorsPct: number;
  transactionFrequency: number; // invoices per participant per week
  activeServiceRate: number; // percentage
}

export interface CurrentStateParams {
  currentPaplMaintenance: number;
  currentErrorRate: number; // percentage
  currentLookupTime: number; // seconds
  versionControlFailureRate: number; // percentage
  frameworkClarificationRate: number; // percentage
}

export interface TransitionParams {
  transitionDuration: number; // years
  planManagerHourlyCost: number;
  errorCorrectionCost: number;
}

export interface Option3Params {
  webToolLookupTime: number; // seconds
  webToolAdoptionRate: number; // percentage
  webToolErrorRate: number; // percentage
  apiLookupTime: number; // seconds
  apiAdoptionRate: number; // percentage
  apiIntegrationCostLarge: number;
  apiIntegrationCostMedium: number;
  option3PocCost: number;
  option3ProductionCost: number;
  option3AnnualMaintenance: number;
}

export interface RiskParams {
  option2ComplexityPenalty: number; // percentage
  option2ErrorIncrease: number; // percentage points
  option1ClarificationCost: number;
}

export interface AllParameters {
  schemeScale: SchemeScaleParams;
  currentState: CurrentStateParams;
  transition: TransitionParams;
  option3: Option3Params;
  risk: RiskParams;
}

// Derived calculations
export interface DerivedMetrics {
  annualTransactions: number;
  averageTransactionValue: number;
  annualLookups: number;
}

// Cost breakdown types
export interface NdiaCosts {
  upfront: number;
  annualMaintenance: number;
  sixYearTotal: number;
  efficiencySavings?: number;
  netCost?: number;
}

export interface UserCosts {
  processingCosts: number;
  errorCorrectionCosts: number;
  trainingCosts: number;
  infrastructureCosts: number;
  toolDevelopmentCosts?: number;
  total: number;
}

export interface OptionResults {
  ndia: NdiaCosts;
  users: UserCosts;
  systemTotal: number;
}

export interface AllResults {
  derived: DerivedMetrics;
  option1: OptionResults;
  option2: OptionResults;
  option3: OptionResults;
}

// Scenario management
export interface SavedScenario {
  id: string;
  name: string;
  description?: string;
  parameters: AllParameters;
  timestamp: number;
}
