import { AllParameters, AllResults } from '@/types';
import { calculateDerivedMetrics } from './derived';
import { calculateOption1 } from './option1';
import { calculateOption2 } from './option2';
import { calculateOption3 } from './option3';

export function calculateAllResults(params: AllParameters): AllResults {
  const derived = calculateDerivedMetrics(params);
  
  return {
    derived,
    option1: calculateOption1(params, derived),
    option2: calculateOption2(params, derived),
    option3: calculateOption3(params, derived),
  };
}

export * from './derived';
export * from './option1';
export * from './option2';
export * from './option3';
