import type { TResumeData } from "../types/resume-types"
import type { TResumeAction } from "../actions/resume-actions"
import { DEFAULT_RESUME_DATA } from "../constants/resume-constants"

function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  if (fromIndex < 0 || fromIndex >= array.length || toIndex < 0 || toIndex >= array.length) {
    return array
  }
  
  const newArray = [...array]
  const item = newArray.splice(fromIndex, 1)[0]
  newArray.splice(toIndex, 0, item)
  return newArray
}

export function resumeReducer(state: TResumeData, action: TResumeAction): TResumeData {
  switch (action.type) {
    case "RESET_RESUME":
      return { ...DEFAULT_RESUME_DATA }

    case "LOAD_RESUME":
      return { ...action.payload.resumeData }

    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: { ...action.payload.personalInfo }
      }

    case "UPDATE_SUMMARY":
      return {
        ...state,
        summary: action.payload.summary
      }

    case "ADD_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: [...state.workExperience, { ...action.payload.experience }]
      }

    case "UPDATE_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: state.workExperience.map(exp =>
          exp.id === action.payload.id ? { ...action.payload.experience } : exp
        )
      }

    case "REMOVE_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: state.workExperience.filter(exp => exp.id !== action.payload.id)
      }

    case "REORDER_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: arrayMove(state.workExperience, action.payload.fromIndex, action.payload.toIndex)
      }

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, { ...action.payload.education }]
      }

    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: state.education.map(edu =>
          edu.id === action.payload.id ? { ...action.payload.education } : edu
        )
      }

    case "REMOVE_EDUCATION":
      return {
        ...state,
        education: state.education.filter(edu => edu.id !== action.payload.id)
      }

    case "REORDER_EDUCATION":
      return {
        ...state,
        education: arrayMove(state.education, action.payload.fromIndex, action.payload.toIndex)
      }

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, { ...action.payload.project }]
      }

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? { ...action.payload.project } : project
        )
      }

    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload.id)
      }

    case "REORDER_PROJECTS":
      return {
        ...state,
        projects: arrayMove(state.projects, action.payload.fromIndex, action.payload.toIndex)
      }

    case "UPDATE_SKILLS":
      return {
        ...state,
        skills: [...action.payload.skills]
      }

    case "ADD_SKILL":
      return {
        ...state,
        skills: state.skills.includes(action.payload.skill)
          ? state.skills
          : [...state.skills, action.payload.skill]
      }

    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter(skill => skill !== action.payload.skill)
      }

    case "UPDATE_SECTIONS":
      return {
        ...state,
        sections: [...action.payload.sections]
      }

    case "REORDER_SECTIONS":
      return {
        ...state,
        sections: arrayMove(state.sections, action.payload.fromIndex, action.payload.toIndex)
      }

    case "UPDATE_TEMPLATE":
      return {
        ...state,
        template: action.payload.template
      }

    case "UPDATE_CUSTOM_COLORS":
      return {
        ...state,
        customColors: { ...action.payload.colors }
      }

    case "UPDATE_CUSTOM_FONTS":
      return {
        ...state,
        customFonts: { ...action.payload.fonts }
      }

    case "UPDATE_CUSTOM_SPACING":
      return {
        ...state,
        customSpacing: { ...action.payload.spacing }
      }

    default:
      return state
  }
}
