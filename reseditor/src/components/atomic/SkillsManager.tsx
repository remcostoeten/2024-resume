import { SKILL_SUGGESTIONS } from "../../constants/resume-constants"

type TProps = {
  skills: string[]
  onUpdate: (skills: string[]) => void
}

export function SkillsManager({ skills, onUpdate }: TProps) {
  function handleAddSkill(skill: string) {
    if (skill.trim() && !skills.includes(skill.trim())) {
      onUpdate([...skills, skill.trim()])
    }
  }

  function handleRemoveSkill(skillToRemove: string) {
    onUpdate(skills.filter(skill => skill !== skillToRemove))
  }

  function handleSkillsTextChange(skillsText: string) {
    const skillsArray = skillsText
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)
    onUpdate(skillsArray)
  }

  function handleSuggestionClick(suggestion: string) {
    handleAddSkill(suggestion)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills (comma-separated)
        </label>
        <textarea
          value={skills.join(", ")}
          onChange={(e) => handleSkillsTextChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="JavaScript, React, Node.js, Python, SQL, Git..."
        />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Current Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Skill Suggestions</h4>
        <div className="space-y-4">
          {Object.entries(SKILL_SUGGESTIONS).map(([category, categorySkills]) => (
            <div key={category}>
              <h5 className="text-xs font-medium text-gray-600 mb-2">{category}</h5>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={skills.includes(suggestion)}
                    className={`px-2 py-1 rounded text-xs transition-colors ${
                      skills.includes(suggestion)
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-800 mb-2">Tips for Skills</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• List skills relevant to your target role</li>
          <li>• Include both technical and soft skills</li>
          <li>• Be honest about your skill level</li>
          <li>• Group similar skills together</li>
        </ul>
      </div>
    </div>
  )
}
