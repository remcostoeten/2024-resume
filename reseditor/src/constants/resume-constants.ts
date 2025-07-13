import type { TResumeData } from "../types/resume-types"

export const TEMPLATES = {
  "modern-professional": {
    name: "Modern Professional",
    description: "Clean, traditional layout with prominent header and organized sections. Perfect for corporate and professional roles.",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      accent: "#0ea5e9",
    },
  },
  "creative-designer": {
    name: "Creative Designer",
    description: "Sidebar layout with emphasis on projects and skills. Great for creative professionals and designers.",
    colors: {
      primary: "#7c3aed",
      secondary: "#a855f7",
      accent: "#c084fc",
    },
  },
  modern: {
    name: "Modern Professional (Legacy)",
    description: "Clean, contemporary design perfect for tech and creative roles",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      accent: "#0ea5e9",
    },
  },
  classic: {
    name: "Classic Traditional",
    description: "Traditional format ideal for corporate and formal positions",
    colors: {
      primary: "#1f2937",
      secondary: "#6b7280",
      accent: "#374151",
    },
  },
  creative: {
    name: "Creative Bold (Legacy)",
    description: "Eye-catching design for creative professionals and designers",
    colors: {
      primary: "#7c3aed",
      secondary: "#a855f7",
      accent: "#c084fc",
    },
  },
}

export const AVAILABLE_FONTS = [
  { value: "Inter, sans-serif", label: "Inter (Sans-serif)" },
  { value: "Roboto, sans-serif", label: "Roboto (Sans-serif)" },
  { value: "Open Sans, sans-serif", label: "Open Sans (Sans-serif)" },
  { value: "Lato, sans-serif", label: "Lato (Sans-serif)" },
  { value: "Montserrat, sans-serif", label: "Montserrat (Sans-serif)" },
  { value: "Merriweather, serif", label: "Merriweather (Serif)" },
  { value: "Playfair Display, serif", label: "Playfair Display (Serif)" },
  { value: "Lora, serif", label: "Lora (Serif)" },
  { value: "Arial, sans-serif", label: "Arial" },
  { value: "Verdana, sans-serif", label: "Verdana" },
  { value: "Helvetica, sans-serif", label: "Helvetica" },
  { value: "Times New Roman, serif", label: "Times New Roman" },
  { value: "Georgia, serif", label: "Georgia" },
  { value: "Courier New, monospace", label: "Courier New" },
]

export const SKILL_SUGGESTIONS = {
  "Software Engineering": ["JavaScript", "Python", "React", "Node.js", "TypeScript", "Git", "AWS", "Docker"],
  Marketing: [
    "Google Analytics",
    "SEO",
    "Content Marketing",
    "Social Media",
    "Email Marketing",
    "Adobe Creative Suite",
  ],
  Sales: ["CRM", "Lead Generation", "Negotiation", "Customer Relations", "Salesforce", "Cold Calling"],
  Design: ["Figma", "Adobe Creative Suite", "UI/UX", "Prototyping", "User Research", "Sketch"],
  Finance: ["Excel", "Financial Analysis", "QuickBooks", "SAP", "Risk Management", "Budgeting"],
  Healthcare: ["Patient Care", "Medical Records", "HIPAA Compliance", "EMR Systems", "Clinical Research"],
  Education: ["Curriculum Development", "Classroom Management", "Educational Technology", "Assessment", "Mentoring"],
  General: ["Communication", "Leadership", "Problem Solving", "Time Management", "Teamwork", "Project Management"],
}

export const WRITING_TIPS = {
  summary: [
    "Keep it concise - 2-3 sentences maximum",
    "Focus on your unique value proposition",
    "Include years of experience and key skills",
    "Avoid generic phrases like 'hard worker'",
  ],
  experience: [
    "Start bullet points with action verbs",
    "Quantify achievements with numbers when possible",
    "Focus on results, not just responsibilities",
    "Tailor content to the job you're applying for",
  ],
  skills: [
    "List skills relevant to your target role",
    "Include both technical and soft skills",
    "Be honest about your skill level",
    "Group similar skills together",
  ],
}

export const DEFAULT_RESUME_DATA: TResumeData = {
  personalInfo: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  sections: [
    { id: "summary", type: "summary", title: "Professional Summary", order: 1 },
    { id: "experience", type: "experience", title: "Work Experience", order: 2 },
    { id: "education", type: "education", title: "Education", order: 3 },
    { id: "skills", type: "skills", title: "Skills", order: 4 },
    { id: "projects", type: "projects", title: "Projects", order: 5 },
  ],
  template: "modern-professional",
  customColors: {
    primary: "",
    secondary: "",
    accent: "",
  },
  customFonts: {
    body: "",
    heading: "",
  },
  customSpacing: {
    sectionMargin: 2,
    itemSpacing: 1,
  },
}
