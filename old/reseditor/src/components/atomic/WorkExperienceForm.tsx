import type { TWorkExperience } from "../../types/resume-types"
import { generateId } from "../../utils/resume-utils"

type TProps = {
  workExperience: TWorkExperience[]
  onUpdate: (experience: TWorkExperience[]) => void
}

export function WorkExperienceForm({ workExperience, onUpdate }: TProps) {
  function handleAddExperience() {
    const newExperience: TWorkExperience = {
      id: generateId(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      skills: [],
    }
    onUpdate([...workExperience, newExperience])
  }

  function handleRemoveExperience(id: string) {
    onUpdate(workExperience.filter(exp => exp.id !== id))
  }

  function handleUpdateExperience(id: string, field: keyof TWorkExperience, value: string | string[]) {
    onUpdate(workExperience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  function handleSkillsChange(id: string, skillsText: string) {
    const skills = skillsText.split(",").map(skill => skill.trim()).filter(skill => skill.length > 0)
    handleUpdateExperience(id, "skills", skills)
  }

  return (
    <div className="space-y-6">
      {workExperience.map((exp, index) => (
        <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Experience {index + 1}</h3>
            <button
              onClick={() => handleRemoveExperience(exp.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleUpdateExperience(exp.id, "company", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleUpdateExperience(exp.id, "position", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Job Title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleUpdateExperience(exp.id, "location", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => handleUpdateExperience(exp.id, "startDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => handleUpdateExperience(exp.id, "endDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => handleUpdateExperience(exp.id, "description", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills Used (comma-separated)
            </label>
            <input
              type="text"
              value={exp.skills?.join(", ") || ""}
              onChange={(e) => handleSkillsChange(exp.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="JavaScript, React, Node.js, MongoDB"
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleAddExperience}
        className="w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
      >
        + Add Work Experience
      </button>
    </div>
  )
}
