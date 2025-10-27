import { TEMPLATES } from "../../constants/resume-constants"

type TProps = {
  selectedTemplate: string
  onTemplateChange: (template: string) => void
}

export function TemplateSelector({ selectedTemplate, onTemplateChange }: TProps) {
  function handleTemplateSelect(templateKey: string) {
    onTemplateChange(templateKey)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Choose Template</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(TEMPLATES).map(([key, template]) => (
          <div
            key={key}
            className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
              selectedTemplate === key
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleTemplateSelect(key)}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{template.name}</h4>
              {selectedTemplate === key && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  Selected
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{template.description}</p>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Color scheme:</span>
              <div className="flex space-x-1">
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.primary }}
                />
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.secondary }}
                />
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.accent }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Template Preview</h4>
        <p className="text-sm text-gray-600">
          {selectedTemplate ? TEMPLATES[selectedTemplate as keyof typeof TEMPLATES].description : "Select a template to see its description"}
        </p>
      </div>
    </div>
  )
}
