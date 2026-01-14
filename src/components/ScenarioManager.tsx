import { useState } from 'react';
import { useParametersStore } from '@/store/parametersStore';
import { Save, FolderOpen, Trash2, RotateCcw } from 'lucide-react';

export function ScenarioManager() {
  const { 
    savedScenarios, 
    saveScenario, 
    loadScenario, 
    deleteScenario, 
    resetParameters 
  } = useParametersStore();
  
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [scenarioName, setScenarioName] = useState('');
  const [scenarioDescription, setScenarioDescription] = useState('');

  const handleSave = () => {
    if (scenarioName.trim()) {
      saveScenario(scenarioName, scenarioDescription);
      setScenarioName('');
      setScenarioDescription('');
      setShowSaveDialog(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setShowSaveDialog(!showSaveDialog)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-ndis-purple text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          <Save className="w-4 h-4" />
          Save Scenario
        </button>
        
        <button
          onClick={resetParameters}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          title="Reset to defaults"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {showSaveDialog && (
        <div className="p-4 bg-gray-50 rounded-md space-y-3">
          <input
            type="text"
            placeholder="Scenario name"
            value={scenarioName}
            onChange={(e) => setScenarioName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ndis-purple"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={scenarioDescription}
            onChange={(e) => setScenarioDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ndis-purple"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-ndis-green text-white rounded-md hover:bg-opacity-90"
            >
              Save
            </button>
            <button
              onClick={() => setShowSaveDialog(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {savedScenarios.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FolderOpen className="w-4 h-4" />
            Saved Scenarios
          </h3>
          <div className="space-y-2">
            {savedScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-md hover:border-ndis-purple transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">
                    {scenario.name}
                  </div>
                  {scenario.description && (
                    <div className="text-xs text-gray-500 truncate">
                      {scenario.description}
                    </div>
                  )}
                  <div className="text-xs text-gray-400">
                    {new Date(scenario.timestamp).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => loadScenario(scenario.id)}
                  className="px-3 py-1 text-sm bg-ndis-purple text-white rounded hover:bg-opacity-90"
                >
                  Load
                </button>
                <button
                  onClick={() => deleteScenario(scenario.id)}
                  className="p-1 text-gray-400 hover:text-ndis-red"
                  title="Delete scenario"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
