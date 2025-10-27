import type { TResumeSection } from "../../types/resume-types"

type TProps = {
  sections: TResumeSection[]
  onSectionsUpdate: (sections: TResumeSection[]) => void
}

export function SectionOrderManager({ sections, onSectionsUpdate }: TProps) {
  function handleMoveUp(index: number) {
    if (index > 0) {
      const newSections = [...sections]
      const temp = newSections[index]
      newSections[index] = newSections[index - 1]
      newSections[index - 1] = temp
      
      updateSectionOrders(newSections)
    }
  }

  function handleMoveDown(index: number) {
    if (index < sections.length - 1) {
      const newSections = [...sections]
      const temp = newSections[index]
      newSections[index] = newSections[index + 1]
      newSections[index + 1] = temp
      
      updateSectionOrders(newSections)
    }
  }

  function updateSectionOrders(newSections: TResumeSection[]) {
    const sectionsWithUpdatedOrder = newSections.map((section, index) => ({
      ...section,
      order: index + 1,
    }))
    onSectionsUpdate(sectionsWithUpdatedOrder)
  }

  function handleTitleChange(id: string, newTitle: string) {
    const updatedSections = sections.map(section =>
      section.id === id ? { ...section, title: newTitle } : section
    )
    onSectionsUpdate(updatedSections)
  }

  function getSectionIcon(type: TResumeSection["type"]) {
    const icons = {
      summary: "📝",
      experience: "💼",
      education: "🎓",
      skills: "⚡",
      projects: "🚀",
    }
    return icons[type] || "📄"
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Section Order</h3>
      
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{getSectionIcon(section.type)}</span>
              <div>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => handleTitleChange(section.id, e.target.value)}
                  className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0"
                />
                <p className="text-sm text-gray-500 capitalize">{section.type}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">#{section.order}</span>
              <div className="flex space-x-1">
                <button
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  className={`p-1 rounded ${
                    index === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  disabled={index === sections.length - 1}
                  className={`p-1 rounded ${
                    index === sections.length - 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">Section Management</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Drag sections up or down to reorder them</li>
          <li>• Click on section titles to edit them</li>
          <li>• The order number shows the current position</li>
          <li>• Changes are applied immediately to your resume</li>
        </ul>
      </div>
    </div>
  )
}
