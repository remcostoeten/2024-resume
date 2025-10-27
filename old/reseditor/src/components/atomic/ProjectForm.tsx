import type { TProject } from "../../types/resume-types"
import { generateId } from "../../utils/resume-utils"

type TProps = {
  projects: TProject[]
  onUpdate: (projects: TProject[]) => void
}

export function ProjectForm({ projects, onUpdate }: TProps) {
  function handleAddProject() {
    const newProject: TProject = {
      id: generateId(),
      name: "",
      description: "",
      technologies: [],
      link: "",
    }
    onUpdate([...projects, newProject])
  }

  function handleRemoveProject(id: string) {
    onUpdate(projects.filter(project => project.id !== id))
  }

  function handleUpdateProject(id: string, field: keyof TProject, value: string | string[]) {
    onUpdate(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ))
  }

  function handleTechnologiesChange(id: string, techText: string) {
    const technologies = techText.split(",").map(tech => tech.trim()).filter(tech => tech.length > 0)
    handleUpdateProject(id, "technologies", technologies)
  }

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={project.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Project {index + 1}</h3>
            <button
              onClick={() => handleRemoveProject(project.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleUpdateProject(project.id, "name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link (optional)
              </label>
              <input
                type="url"
                value={project.link || ""}
                onChange={(e) => handleUpdateProject(project.id, "link", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) => handleUpdateProject(project.id, "description", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe what the project does, your role, and key achievements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Used (comma-separated)
            </label>
            <input
              type="text"
              value={project.technologies.join(", ")}
              onChange={(e) => handleTechnologiesChange(project.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, TypeScript, Node.js, MongoDB"
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleAddProject}
        className="w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
      >
        + Add Project
      </button>
    </div>
  )
}
