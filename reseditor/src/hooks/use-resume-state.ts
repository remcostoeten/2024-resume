import { useReducer, useEffect, useCallback } from "react"
import type { TResumeData } from "../types/resume-types"
import type { TResumeAction } from "../actions/resume-actions"
import { resumeReducer } from "../reducers/resume-reducer"
import { DEFAULT_RESUME_DATA } from "../constants/resume-constants"

const LOCAL_STORAGE_KEY = "resume-editor-data"

function loadFromLocalStorage(): TResumeData {
  if (typeof window === "undefined") {
    return DEFAULT_RESUME_DATA
  }
  
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return { ...DEFAULT_RESUME_DATA, ...parsed }
    }
  } catch (error) {
    console.warn("Failed to load resume data from localStorage:", error)
  }
  
  return DEFAULT_RESUME_DATA
}

function saveToLocalStorage(data: TResumeData): void {
  if (typeof window === "undefined") {
    return
  }
  
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.warn("Failed to save resume data to localStorage:", error)
  }
}

export function useResumeState() {
  const [state, dispatch] = useReducer(resumeReducer, DEFAULT_RESUME_DATA, loadFromLocalStorage)
  
  useEffect(() => {
    saveToLocalStorage(state)
  }, [state])
  
  const actions = {
    resetResume: useCallback(() => {
      dispatch({ type: "RESET_RESUME" })
    }, []),
    
    loadResume: useCallback((resumeData: TResumeData) => {
      dispatch({ type: "LOAD_RESUME", payload: { resumeData } })
    }, []),
    
    updatePersonalInfo: useCallback((personalInfo: TResumeData["personalInfo"]) => {
      dispatch({ type: "UPDATE_PERSONAL_INFO", payload: { personalInfo } })
    }, []),
    
    updateSummary: useCallback((summary: string) => {
      dispatch({ type: "UPDATE_SUMMARY", payload: { summary } })
    }, []),
    
    addWorkExperience: useCallback((experience: TResumeData["workExperience"][0]) => {
      dispatch({ type: "ADD_WORK_EXPERIENCE", payload: { experience } })
    }, []),
    
    updateWorkExperience: useCallback((id: string, experience: TResumeData["workExperience"][0]) => {
      dispatch({ type: "UPDATE_WORK_EXPERIENCE", payload: { id, experience } })
    }, []),
    
    removeWorkExperience: useCallback((id: string) => {
      dispatch({ type: "REMOVE_WORK_EXPERIENCE", payload: { id } })
    }, []),
    
    reorderWorkExperience: useCallback((fromIndex: number, toIndex: number) => {
      dispatch({ type: "REORDER_WORK_EXPERIENCE", payload: { fromIndex, toIndex } })
    }, []),
    
    addEducation: useCallback((education: TResumeData["education"][0]) => {
      dispatch({ type: "ADD_EDUCATION", payload: { education } })
    }, []),
    
    updateEducation: useCallback((id: string, education: TResumeData["education"][0]) => {
      dispatch({ type: "UPDATE_EDUCATION", payload: { id, education } })
    }, []),
    
    removeEducation: useCallback((id: string) => {
      dispatch({ type: "REMOVE_EDUCATION", payload: { id } })
    }, []),
    
    reorderEducation: useCallback((fromIndex: number, toIndex: number) => {
      dispatch({ type: "REORDER_EDUCATION", payload: { fromIndex, toIndex } })
    }, []),
    
    addProject: useCallback((project: TResumeData["projects"][0]) => {
      dispatch({ type: "ADD_PROJECT", payload: { project } })
    }, []),
    
    updateProject: useCallback((id: string, project: TResumeData["projects"][0]) => {
      dispatch({ type: "UPDATE_PROJECT", payload: { id, project } })
    }, []),
    
    removeProject: useCallback((id: string) => {
      dispatch({ type: "REMOVE_PROJECT", payload: { id } })
    }, []),
    
    reorderProjects: useCallback((fromIndex: number, toIndex: number) => {
      dispatch({ type: "REORDER_PROJECTS", payload: { fromIndex, toIndex } })
    }, []),
    
    updateSkills: useCallback((skills: string[]) => {
      dispatch({ type: "UPDATE_SKILLS", payload: { skills } })
    }, []),
    
    addSkill: useCallback((skill: string) => {
      dispatch({ type: "ADD_SKILL", payload: { skill } })
    }, []),
    
    removeSkill: useCallback((skill: string) => {
      dispatch({ type: "REMOVE_SKILL", payload: { skill } })
    }, []),
    
    updateSections: useCallback((sections: TResumeData["sections"]) => {
      dispatch({ type: "UPDATE_SECTIONS", payload: { sections } })
    }, []),
    
    reorderSections: useCallback((fromIndex: number, toIndex: number) => {
      dispatch({ type: "REORDER_SECTIONS", payload: { fromIndex, toIndex } })
    }, []),
    
    updateTemplate: useCallback((template: string) => {
      dispatch({ type: "UPDATE_TEMPLATE", payload: { template } })
    }, []),
    
    updateCustomColors: useCallback((colors: TResumeData["customColors"]) => {
      dispatch({ type: "UPDATE_CUSTOM_COLORS", payload: { colors } })
    }, []),
    
    updateCustomFonts: useCallback((fonts: TResumeData["customFonts"]) => {
      dispatch({ type: "UPDATE_CUSTOM_FONTS", payload: { fonts } })
    }, []),
    
    updateCustomSpacing: useCallback((spacing: TResumeData["customSpacing"]) => {
      dispatch({ type: "UPDATE_CUSTOM_SPACING", payload: { spacing } })
    }, [])
  }
  
  return {
    state,
    actions
  }
}
