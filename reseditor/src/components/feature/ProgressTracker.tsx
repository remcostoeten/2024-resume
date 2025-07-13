import { TResumeData } from "../../types/resume-types";

type TProps = {
  resumeData: TResumeData;
  onSectionClick: (sectionId: string) => void;
};

export function ProgressTracker({ resumeData, onSectionClick }: TProps) {
  function calculateSectionProgress(sectionType: string): number {
    switch (sectionType) {
      case "summary":
        return resumeData.summary.trim().length > 0 ? 100 : 0;
      case "personal":
        const personalFields = [
          resumeData.personalInfo.name,
          resumeData.personalInfo.email,
          resumeData.personalInfo.phone,
          resumeData.personalInfo.location,
        ];
        const filledPersonalFields = personalFields.filter(field => field.trim().length > 0);
        return Math.round((filledPersonalFields.length / personalFields.length) * 100);
      case "experience":
        return resumeData.workExperience.length > 0 ? 100 : 0;
      case "education":
        return resumeData.education.length > 0 ? 100 : 0;
      case "skills":
        return resumeData.skills.length > 0 ? 100 : 0;
      case "projects":
        return resumeData.projects.length > 0 ? 100 : 0;
      default:
        return 0;
    }
  }

  function calculateOverallProgress(): number {
    const sections = ["summary", "personal", "experience", "education", "skills", "projects"];
    const totalProgress = sections.reduce((sum, section) => sum + calculateSectionProgress(section), 0);
    return Math.round(totalProgress / sections.length);
  }

  function getProgressColor(progress: number): string {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 75) return "bg-blue-500";
    if (progress >= 50) return "bg-yellow-500";
    if (progress >= 25) return "bg-orange-500";
    return "bg-red-500";
  }

  const sections = [
    { id: "personal", label: "Personal Info", progress: calculateSectionProgress("personal") },
    { id: "summary", label: "Summary", progress: calculateSectionProgress("summary") },
    { id: "experience", label: "Experience", progress: calculateSectionProgress("experience") },
    { id: "education", label: "Education", progress: calculateSectionProgress("education") },
    { id: "skills", label: "Skills", progress: calculateSectionProgress("skills") },
    { id: "projects", label: "Projects", progress: calculateSectionProgress("projects") },
  ];

  const overallProgress = calculateOverallProgress();

  return (
    <div className="progress-tracker">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Resume Progress</h3>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Completion</span>
            <span className="text-sm text-gray-600">{overallProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(overallProgress)}`}
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => onSectionClick(section.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${section.progress >= 100 ? 'bg-green-500' : section.progress > 0 ? 'bg-yellow-500' : 'bg-gray-300'}`} />
                </div>
                <span className="text-sm font-medium text-gray-800">{section.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{section.progress}%</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(section.progress)}`}
                    style={{ width: `${section.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Next Steps</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {sections
              .filter(section => section.progress < 100)
              .slice(0, 3)
              .map(section => (
                <li key={section.id} className="flex items-center space-x-2">
                  <span>•</span>
                  <span>Complete {section.label}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
