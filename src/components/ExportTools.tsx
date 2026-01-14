import { useParametersStore } from '@/store/parametersStore';
import { exportToJSON } from '@/lib/utils';
import { Download, FileJson } from 'lucide-react';

export function ExportTools() {
  const { parameters, results } = useParametersStore();

  const handleJSONExport = () => {
    exportToJSON(parameters, results);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        <Download className="w-4 h-4" />
        Export
      </h3>
      
      <button
        onClick={handleJSONExport}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
      >
        <FileJson className="w-4 h-4" />
        Export JSON
      </button>
      
      <p className="text-xs text-gray-500">
        More export formats (PDF, Excel) coming soon
      </p>
    </div>
  );
}
