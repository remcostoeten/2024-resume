import { TResumeData } from "../../types/resume-types";

type TProps = {
  resumeData: TResumeData;
  onExportPDF: () => void;
  onExportJSON: () => void;
  onExportWord: () => void;
  isExporting: boolean;
};

export function ExportControls({ 
  resumeData, 
  onExportPDF, 
  onExportJSON, 
  onExportWord, 
  isExporting 
}: TProps) {
  function handleExport(format: string) {
    switch (format) {
      case "pdf":
        onExportPDF();
        break;
      case "json":
        onExportJSON();
        break;
      case "word":
        onExportWord();
        break;
    }
  }

  return (
    <div className="export-controls space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Export Resume</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">PDF Document</h4>
              <p className="text-sm text-gray-600">Professional format, ready to print</p>
            </div>
            <button
              onClick={() => handleExport("pdf")}
              disabled={isExporting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? "Exporting..." : "Export PDF"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Word Document</h4>
              <p className="text-sm text-gray-600">Editable format for further customization</p>
            </div>
            <button
              onClick={() => handleExport("word")}
              disabled={isExporting}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? "Exporting..." : "Export Word"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">JSON Data</h4>
              <p className="text-sm text-gray-600">Save your data to import later</p>
            </div>
            <button
              onClick={() => handleExport("json")}
              disabled={isExporting}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? "Exporting..." : "Export JSON"}
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Export Tips</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• PDF format is best for job applications</li>
            <li>• Word format allows for easy editing and customization</li>
            <li>• JSON format preserves all your data for future use</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
