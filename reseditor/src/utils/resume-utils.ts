import type { TResumeData, TPersonalInfo } from "../types/resume-types"

export function calculateCompleteness(data: TResumeData): number {
  let completed = 0
  let total = 0

  const personalFields = ["name", "title", "email", "phone", "location"]
  personalFields.forEach((field) => {
    total++
    if (data.personalInfo[field as keyof TPersonalInfo]) completed++
  })

  total++
  if (data.summary.trim()) completed++

  total++
  if (data.workExperience.length > 0 && data.workExperience[0].company) completed++

  total++
  if (data.education.length > 0 && data.education[0].institution) completed++

  total++
  if (data.skills.filter((s) => s.trim()).length >= 3) completed++

  return Math.round((completed / total) * 100)
}

export function formatRichText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>',
    )
    .replace(/^• (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/, '<ul class="list-disc list-inside space-y-1 ml-4">$1</ul>')
    .replace(/\n/g, "<br>")
}

export function generateSlug(text: string): string {
  return text.replace(/\s+/g, "_").toLowerCase()
}

export function createFilename(name: string, extension: string, isDataFile?: boolean): string {
  const slug = generateSlug(name) || "resume"
  const suffix = isDataFile && extension === "json" ? "_data" : ""
  return `${slug}${suffix}.${extension}`
}

export function createTimestamp(): number {
  return Date.now()
}

export function formatDate(date: Date): string {
  return date.toLocaleString()
}

export function generateId(): string {
  return `${Date.now()}`
}
