import type { TPersonalInfo, TWorkExperience, TEducation, TProject, TResumeSection } from "../types/resume-types"

export type TResumeAction =
  | { type: "RESET_RESUME" }
  | { type: "LOAD_RESUME"; payload: { resumeData: any } }
  | { type: "UPDATE_PERSONAL_INFO"; payload: { personalInfo: TPersonalInfo } }
  | { type: "UPDATE_SUMMARY"; payload: { summary: string } }
  | { type: "ADD_WORK_EXPERIENCE"; payload: { experience: TWorkExperience } }
  | { type: "UPDATE_WORK_EXPERIENCE"; payload: { id: string; experience: TWorkExperience } }
  | { type: "REMOVE_WORK_EXPERIENCE"; payload: { id: string } }
  | { type: "REORDER_WORK_EXPERIENCE"; payload: { fromIndex: number; toIndex: number } }
  | { type: "ADD_EDUCATION"; payload: { education: TEducation } }
  | { type: "UPDATE_EDUCATION"; payload: { id: string; education: TEducation } }
  | { type: "REMOVE_EDUCATION"; payload: { id: string } }
  | { type: "REORDER_EDUCATION"; payload: { fromIndex: number; toIndex: number } }
  | { type: "ADD_PROJECT"; payload: { project: TProject } }
  | { type: "UPDATE_PROJECT"; payload: { id: string; project: TProject } }
  | { type: "REMOVE_PROJECT"; payload: { id: string } }
  | { type: "REORDER_PROJECTS"; payload: { fromIndex: number; toIndex: number } }
  | { type: "UPDATE_SKILLS"; payload: { skills: string[] } }
  | { type: "ADD_SKILL"; payload: { skill: string } }
  | { type: "REMOVE_SKILL"; payload: { skill: string } }
  | { type: "UPDATE_SECTIONS"; payload: { sections: TResumeSection[] } }
  | { type: "REORDER_SECTIONS"; payload: { fromIndex: number; toIndex: number } }
  | { type: "UPDATE_TEMPLATE"; payload: { template: string } }
  | { type: "UPDATE_CUSTOM_COLORS"; payload: { colors: { primary: string; secondary: string; accent: string } } }
  | { type: "UPDATE_CUSTOM_FONTS"; payload: { fonts: { body: string; heading: string } } }
  | { type: "UPDATE_CUSTOM_SPACING"; payload: { spacing: { sectionMargin: number; itemSpacing: number } } }
