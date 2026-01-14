import { create } from 'zustand';
import { AllParameters, SavedScenario, AllResults } from '@/types';
import { DEFAULT_PARAMETERS } from '@/lib/constants';
import { calculateAllResults } from '@/lib/calculations';

interface ParametersStore {
  parameters: AllParameters;
  results: AllResults;
  savedScenarios: SavedScenario[];
  
  // Parameter updates
  updateParameter: (section: keyof AllParameters, field: string, value: number) => void;
  resetParameters: () => void;
  loadParameters: (params: AllParameters) => void;
  
  // Scenario management
  saveScenario: (name: string, description?: string) => void;
  loadScenario: (id: string) => void;
  deleteScenario: (id: string) => void;
  
  // Initialization
  initialize: () => void;
}

const STORAGE_KEY = 'ndis-simulator-scenarios';

export const useParametersStore = create<ParametersStore>((set, get) => ({
  parameters: DEFAULT_PARAMETERS,
  results: calculateAllResults(DEFAULT_PARAMETERS),
  savedScenarios: [],
  
  updateParameter: (section, field, value) => {
    set((state) => {
      const newParams = {
        ...state.parameters,
        [section]: {
          ...state.parameters[section],
          [field]: value,
        },
      };
      return {
        parameters: newParams,
        results: calculateAllResults(newParams),
      };
    });
  },
  
  resetParameters: () => {
    set({
      parameters: DEFAULT_PARAMETERS,
      results: calculateAllResults(DEFAULT_PARAMETERS),
    });
  },
  
  loadParameters: (params) => {
    set({
      parameters: params,
      results: calculateAllResults(params),
    });
  },
  
  saveScenario: (name, description) => {
    const { parameters, savedScenarios } = get();
    const newScenario: SavedScenario = {
      id: Date.now().toString(),
      name,
      description,
      parameters,
      timestamp: Date.now(),
    };
    
    const updatedScenarios = [...savedScenarios, newScenario];
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScenarios));
    
    set({ savedScenarios: updatedScenarios });
  },
  
  loadScenario: (id) => {
    const { savedScenarios } = get();
    const scenario = savedScenarios.find((s) => s.id === id);
    if (scenario) {
      set({
        parameters: scenario.parameters,
        results: calculateAllResults(scenario.parameters),
      });
    }
  },
  
  deleteScenario: (id) => {
    const { savedScenarios } = get();
    const updatedScenarios = savedScenarios.filter((s) => s.id !== id);
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScenarios));
    
    set({ savedScenarios: updatedScenarios });
  },
  
  initialize: () => {
    // Load saved scenarios from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const scenarios = JSON.parse(saved) as SavedScenario[];
        set({ savedScenarios: scenarios });
      }
    } catch (error) {
      console.error('Failed to load saved scenarios:', error);
    }
  },
}));
