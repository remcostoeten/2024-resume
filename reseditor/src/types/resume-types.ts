export type TPersonalInfo = {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  photo?: string
}

export type TWorkExperience = {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
  skills?: string[]
}

export type TEducation = {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
}

export type TProject = {
  id: string
  name: string
  description: string
  technologies: string[]
  link?: string
}

export type TResumeSection = {
  id: string
  type: "summary" | "experience" | "education" | "skills" | "projects"
  title: string
  order: number
}

export type TResumeData = {
  personalInfo: TPersonalInfo
  summary: string
  workExperience: TWorkExperience[]
  education: TEducation[]
  skills: string[]
  projects: TProject[]
  sections: TResumeSection[]
  template: string
  customColors: {
    primary: string
    secondary: string
    accent: string
  }
  customFonts: {
    body: string
    heading: string
  }
  customSpacing: {
    sectionMargin: number
    itemSpacing: number
  }
}

export type TToastState = {
  toasts: any[]
}
