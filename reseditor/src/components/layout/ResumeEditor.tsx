import { useReducer } from "react";
import { EditorTabs } from "./EditorTabs";
import type { TResumeData, TPersonalInfo, TWorkExperience, TEducation, TProject, TResumeSection } from "../../types/resume-types";

type TResumeAction = 
  | { type: 'UPDATE_PERSONAL_INFO'; payload: TPersonalInfo }
  | { type: 'UPDATE_SUMMARY'; payload: string }
  | { type: 'UPDATE_WORK_EXPERIENCE'; payload: TWorkExperience[] }
  | { type: 'UPDATE_EDUCATION'; payload: TEducation[] }
  | { type: 'UPDATE_SKILLS'; payload: string[] }
  | { type: 'UPDATE_PROJECTS'; payload: TProject[] }
  | { type: 'UPDATE_TEMPLATE'; payload: string }
  | { type: 'UPDATE_CUSTOM_COLORS'; payload: TResumeData['customColors'] }
  | { type: 'UPDATE_CUSTOM_FONTS'; payload: TResumeData['customFonts'] }
  | { type: 'UPDATE_CUSTOM_SPACING'; payload: TResumeData['customSpacing'] }
  | { type: 'UPDATE_SECTIONS'; payload: TResumeSection[] }
  | { type: 'UPDATE_FULL'; payload: Partial<TResumeData> };

function resumeReducer(state: TResumeData, action: TResumeAction): TResumeData {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };
    case 'UPDATE_SUMMARY':
      return { ...state, summary: action.payload };
    case 'UPDATE_WORK_EXPERIENCE':
      return { ...state, workExperience: action.payload };
    case 'UPDATE_EDUCATION':
      return { ...state, education: action.payload };
    case 'UPDATE_SKILLS':
      return { ...state, skills: action.payload };
    case 'UPDATE_PROJECTS':
      return { ...state, projects: action.payload };
    case 'UPDATE_TEMPLATE':
      return { ...state, template: action.payload };
    case 'UPDATE_CUSTOM_COLORS':
      return { ...state, customColors: action.payload };
    case 'UPDATE_CUSTOM_FONTS':
      return { ...state, customFonts: action.payload };
    case 'UPDATE_CUSTOM_SPACING':
      return { ...state, customSpacing: action.payload };
    case 'UPDATE_SECTIONS':
      return { ...state, sections: action.payload };
    case 'UPDATE_FULL':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

type TProps = {
  initialData: TResumeData;
};

export function ResumeEditor({ initialData }: TProps) {
  const [resumeData, dispatch] = useReducer(resumeReducer, initialData);

  return (
    <div className="resume-editor">
      <EditorTabs resumeData={resumeData} dispatch={dispatch} />
    </div>
  );
}

