import { useState, useEffect } from "react"
import type { TResumeData, TPersonalInfo, TWorkExperience, TEducation, TProject } from "../types/resume-types"
import { DEFAULT_RESUME_DATA } from "../constants/resume-constants"
import { calculateCompleteness, createFilename, generateId } from "../utils/resume-utils"

export function useResumeData() {
  const [resumeData, setResumeData] = useState<TResumeData>(DEFAULT_RESUME_DATA)
  const [isImporting, setIsImporting] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Load data on component mount
  useEffect(() => {
    function loadData() {
      try {
        if (typeof window !== "undefined") {
          const savedData = localStorage.getItem("resumeData")
          const hasVisited = localStorage.getItem("hasVisitedResume")

          if (!hasVisited) {
            setShowWelcome(true)
            localStorage.setItem("hasVisitedResume", "true")
          }

          if (savedData) {
            const parsed = JSON.parse(savedData)
            // Ensure new fields exist for old saved data
            if (!parsed.sections) {
              parsed.sections = DEFAULT_RESUME_DATA.sections
            }
            if (!parsed.template) {
              parsed.template = "modern"
            }
            if (!parsed.customColors) {
              parsed.customColors = DEFAULT_RESUME_DATA.customColors
            }
            if (!parsed.customFonts) {
              parsed.customFonts = DEFAULT_RESUME_DATA.customFonts
            }
            if (!parsed.customSpacing) {
              parsed.customSpacing = DEFAULT_RESUME_DATA.customSpacing
            }
            setResumeData(parsed)
          }
        }
      } catch (error) {
        console.error("Error loading resume data from localStorage:", error)
      } finally {
        setIsInitialized(true)
      }
    }

    loadData()
  }, [])

  // Auto-save functionality
  useEffect(() => {
    if (isInitialized && !isImporting) {
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("resumeData", JSON.stringify(resumeData))
          setLastSaved(new Date())
        }
      } catch (error) {
        console.error("Error saving resume data to localStorage:", error)
      }
    }
  }, [resumeData, isInitialized, isImporting])

  const completeness = calculateCompleteness(resumeData)

  // Update functions
  function updatePersonalInfo(info: TPersonalInfo) {
    setResumeData(prev => ({ ...prev, personalInfo: info }))
  }

  function updateSummary(summary: string) {
    setResumeData(prev => ({ ...prev, summary }))
  }

  function updateWorkExperience(experience: TWorkExperience[]) {
    setResumeData(prev => ({ ...prev, workExperience: experience }))
  }

  function updateEducation(education: TEducation[]) {
    setResumeData(prev => ({ ...prev, education }))
  }

  function updateSkills(skills: string[]) {
    setResumeData(prev => ({ ...prev, skills }))
  }

  function updateProjects(projects: TProject[]) {
    setResumeData(prev => ({ ...prev, projects }))
  }

  function updateTemplate(template: string) {
    setResumeData(prev => ({ ...prev, template }))
  }

  function updateCustomColors(colors: TResumeData["customColors"]) {
    setResumeData(prev => ({ ...prev, customColors: colors }))
  }

  function updateCustomFonts(fonts: TResumeData["customFonts"]) {
    setResumeData(prev => ({ ...prev, customFonts: fonts }))
  }

  function updateCustomSpacing(spacing: TResumeData["customSpacing"]) {
    setResumeData(prev => ({ ...prev, customSpacing: spacing }))
  }

  // Import/Export functions
  function exportData() {
    try {
      const dataStr = JSON.stringify(resumeData, null, 2)
      const dataBlob = new Blob([dataStr], { type: "application/json" })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = createFilename(resumeData.personalInfo.name, "json", true)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error exporting data:", error)
    }
  }

  function importData(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          setIsImporting(true)
          const importedData = JSON.parse(e.target?.result as string)
          // Ensure new fields exist for old saved data
          if (!importedData.sections) {
            importedData.sections = DEFAULT_RESUME_DATA.sections
          }
          if (!importedData.template) {
            importedData.template = "modern"
          }
          if (!importedData.customColors) {
            importedData.customColors = DEFAULT_RESUME_DATA.customColors
          }
          if (!importedData.customFonts) {
            importedData.customFonts = DEFAULT_RESUME_DATA.customFonts
          }
          if (!importedData.customSpacing) {
            importedData.customSpacing = DEFAULT_RESUME_DATA.customSpacing
          }
          setResumeData(importedData)
          setTimeout(() => {
            localStorage.setItem("resumeData", JSON.stringify(importedData))
            setIsImporting(false)
          }, 100)
        } catch (error) {
          console.error("Error importing data:", error)
          alert("Error importing data. Please check the file format.")
          setIsImporting(false)
        }
      }
      reader.readAsText(file)
    }
    event.target.value = ""
  }

  function clearAllData() {
    if (confirm("Are you sure you want to clear all resume data? This action cannot be undone.")) {
      try {
        setIsImporting(true)
        localStorage.removeItem("resumeData")
        setResumeData(DEFAULT_RESUME_DATA)
        setTimeout(() => {
          setIsImporting(false)
        }, 100)
      } catch (error) {
        console.error("Error clearing resume data:", error)
        setIsImporting(false)
      }
    }
  }

  return {
    resumeData,
    isImporting,
    isInitialized,
    showWelcome,
    setShowWelcome,
    lastSaved,
    completeness,
    updatePersonalInfo,
    updateSummary,
    updateWorkExperience,
    updateEducation,
    updateSkills,
    updateProjects,
    updateTemplate,
    updateCustomColors,
    updateCustomFonts,
    updateCustomSpacing,
    exportData,
    importData,
    clearAllData,
  }
}
