type TTemplateOption = {
  id: string;
  name: string;
  description: string;
  preview: string;
};

type TProps = {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
};

export function TemplateChooser({ selectedTemplate, onTemplateSelect }: TProps) {
  const templates: TTemplateOption[] = [
    {
      id: "modern-professional",
      name: "Modern Professional",
      description: "Clean, traditional layout with prominent header and organized sections. Perfect for corporate and professional roles.",
      preview: "/previews/modern-professional.png"
    },
    {
      id: "creative-designer",
      name: "Creative Designer",
      description: "Sidebar layout with emphasis on projects and skills. Great for creative professionals and designers.",
      preview: "/previews/creative-designer.png"
    }
  ];

  return (
    <div className="template-chooser p-6">
      <h2 className="text-2xl font-bold mb-6">Choose Your Resume Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
              selectedTemplate === template.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <div className="template-preview mb-4">
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Preview</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
            <p className="text-gray-600 text-sm">{template.description}</p>
            {selectedTemplate === template.id && (
              <div className="mt-3 flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Selected</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
