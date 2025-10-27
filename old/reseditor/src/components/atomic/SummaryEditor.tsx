import { WRITING_TIPS } from "../../constants/resume-constants"

type TProps = {
  summary: string
  onUpdate: (summary: string) => void
}

export function SummaryEditor({ summary, onUpdate }: TProps) {
  function handleChange(value: string) {
    onUpdate(value)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          value={summary}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Write a compelling summary that highlights your key strengths and career objectives..."
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">Writing Tips</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          {WRITING_TIPS.summary.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>Characters: {summary.length}</span>
        <span>Words: {summary.split(/\s+/).filter(word => word.length > 0).length}</span>
      </div>
    </div>
  )
}
