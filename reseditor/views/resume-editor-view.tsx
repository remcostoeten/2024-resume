'use client'

import React, { useState, useEffect } from 'react'
import {
	User,
	Mail,
	Smartphone,
	FileText,
	Plus,
	Trash2,
	Download,
	Upload,
	Eye,
	Edit3,
	Save,
	AlertCircle,
	CheckCircle,
	Star,
	Lightbulb,
	Code,
	GripVertical,
	HelpCircle,
	Palette,
	Paintbrush,
	Type,
	Ruler,
	Wand2,
	FileCode
} from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import { Badge } from '@/shared/ui/badge'
import { Alert, AlertDescription } from '@/shared/ui/alert'
import { Progress } from '@/shared/ui/progress'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from '@/shared/ui/dialog'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui/tooltip'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { RichTextEditor } from '../components/rich-text-editor'
import { ResumePreview } from '../src/components/feature/ResumePreview'

// Types
type TPersonalInfo = {
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

type TWorkExperience = {
	id: string
	company: string
	position: string
	location: string
	startDate: string
	endDate: string
	description: string
	skills?: string[]
}

type TEducation = {
	id: string
	institution: string
	degree: string
	field: string
	startDate: string
	endDate: string
	gpa?: string
}

type TProject = {
	id: string
	name: string
	description: string
	technologies: string[]
	link?: string
}

type TSection = {
	id: string
	type: 'summary' | 'experience' | 'education' | 'skills' | 'projects'
	title: string
	order: number
}

type TResumeData = {
	personalInfo: TPersonalInfo
	summary: string
	workExperience: TWorkExperience[]
	education: TEducation[]
	skills: string[]
	projects: TProject[]
	sections: TSection[]
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

// Constants
const DEFAULT_RESUME_DATA: TResumeData = {
	personalInfo: {
		name: '',
		title: '',
		email: '',
		phone: '',
		location: '',
		website: '',
		linkedin: '',
		github: ''
	},
	summary: '',
	workExperience: [],
	education: [],
	skills: [],
	projects: [],
	sections: [
		{
			id: 'summary',
			type: 'summary',
			title: 'Professional Summary',
			order: 1
		},
		{
			id: 'experience',
			type: 'experience',
			title: 'Work Experience',
			order: 2
		},
		{ id: 'education', type: 'education', title: 'Education', order: 3 },
		{ id: 'skills', type: 'skills', title: 'Skills', order: 4 },
		{ id: 'projects', type: 'projects', title: 'Projects', order: 5 }
	],
	template: 'modern',
	customColors: {
		primary: '',
		secondary: '',
		accent: ''
	},
	customFonts: {
		body: 'Inter, sans-serif',
		heading: 'Inter, sans-serif'
	},
	customSpacing: {
		sectionMargin: 2.0,
		itemSpacing: 1.0
	}
}

const TEMPLATES = {
	modern: {
		name: 'Modern',
		description: 'Clean and contemporary design',
		colors: {
			primary: '#2563eb',
			secondary: '#374151',
			accent: '#059669'
		}
	},
	classic: {
		name: 'Classic',
		description: 'Traditional and professional',
		colors: {
			primary: '#1f2937',
			secondary: '#4b5563',
			accent: '#dc2626'
		}
	},
	creative: {
		name: 'Creative',
		description: 'Bold and expressive',
		colors: {
			primary: '#7c3aed',
			secondary: '#374151',
			accent: '#f59e0b'
		}
	}
}

const AVAILABLE_FONTS = [
	{ label: 'Inter', value: 'Inter, sans-serif' },
	{ label: 'Roboto', value: 'Roboto, sans-serif' },
	{ label: 'Open Sans', value: 'Open Sans, sans-serif' },
	{ label: 'Lato', value: 'Lato, sans-serif' },
	{ label: 'Montserrat', value: 'Montserrat, sans-serif' },
	{ label: 'Source Sans Pro', value: 'Source Sans Pro, sans-serif' },
	{ label: 'Poppins', value: 'Poppins, sans-serif' },
	{ label: 'Nunito', value: 'Nunito, sans-serif' }
]

const SKILL_SUGGESTIONS = {
	'Software Engineering': [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
		'Python',
		'Java',
		'Git',
		'AWS',
		'Docker',
		'SQL'
	],
	'Data Science': [
		'Python',
		'R',
		'SQL',
		'Machine Learning',
		'TensorFlow',
		'Pandas',
		'NumPy',
		'Tableau',
		'Power BI',
		'Statistics'
	],
	'Product Management': [
		'Product Strategy',
		'Agile',
		'Scrum',
		'User Research',
		'A/B Testing',
		'Analytics',
		'Roadmapping',
		'Stakeholder Management'
	],
	Marketing: [
		'Digital Marketing',
		'SEO',
		'SEM',
		'Social Media',
		'Content Marketing',
		'Email Marketing',
		'Analytics',
		'Brand Management'
	],
	Design: [
		'Figma',
		'Adobe Creative Suite',
		'Sketch',
		'Prototyping',
		'User Research',
		'Wireframing',
		'Design Systems',
		'HTML/CSS'
	],
	General: [
		'Communication',
		'Leadership',
		'Problem Solving',
		'Project Management',
		'Teamwork',
		'Time Management'
	]
}

const WRITING_TIPS = {
	summary: [
		'Keep it 2-3 sentences',
		'Highlight your unique value proposition',
		'Include years of experience',
		'Mention key skills or achievements'
	],
	experience: [
		'Start with action verbs',
		'Quantify achievements with numbers',
		'Focus on impact, not just duties',
		'Use past tense for previous roles'
	],
	skills: [
		'List most relevant skills first',
		'Group similar skills together',
		'Include both technical and soft skills',
		'Match skills to job requirements'
	]
}

// Utility functions
const generateId = () => Math.random().toString(36).substr(2, 9)

const formatDate = (date: Date) => {
	const now = new Date()
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

	if (diffInSeconds < 60) return 'just now'
	if (diffInSeconds < 3600)
		return `${Math.floor(diffInSeconds / 60)} minutes ago`
	if (diffInSeconds < 86400)
		return `${Math.floor(diffInSeconds / 3600)} hours ago`
	return date.toLocaleDateString()
}

const createFilename = (
	name: string,
	extension: string,
	includeTimestamp = false
) => {
	const cleanName =
		name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() || 'resume'
	const timestamp = includeTimestamp
		? `_${new Date().toISOString().split('T')[0]}`
		: ''
	return `${cleanName}${timestamp}.${extension}`
}

const calculateCompleteness = (data: TResumeData): number => {
	let completed = 0
	let total = 0

	// Personal Info (40 points)
	const requiredPersonalFields = ['name', 'title', 'email', 'phone']
	requiredPersonalFields.forEach(field => {
		total += 1
		if (data.personalInfo[field as keyof TPersonalInfo]) completed += 1
	})

	// Summary (10 points)
	total += 1
	if (data.summary.length > 50) completed += 1

	// Work Experience (20 points)
	total += 1
	if (data.workExperience.length > 0) completed += 1

	// Education (10 points)
	total += 1
	if (data.education.length > 0) completed += 1

	// Skills (15 points)
	total += 1
	if (data.skills.length > 0) completed += 1

	// Projects (10 points)
	total += 1
	if (data.projects.length > 0) completed += 1

	return Math.round((completed / total) * 100)
}

// Format rich text for HTML export
const formatRichText = (text: string): string => {
	return text
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/g, '<em>$1</em>')
		.replace(/\n/g, '<br>')
		.replace(/•\s(.*)/g, '<li>$1</li>')
		.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>')
}

// Welcome Dialog Component
const WelcomeDialog = ({
	open,
	onOpenChange
}: {
	open: boolean
	onOpenChange: (open: boolean) => void
}) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='max-w-2xl'>
				<DialogHeader>
					<DialogTitle className='text-2xl flex items-center gap-2'>
						<Star className='w-6 h-6 text-yellow-500' />
						Welcome to Resume Builder
					</DialogTitle>
					<DialogDescription className='text-base space-y-4'>
						<p>
							Create a professional resume in minutes with our
							easy-to-use builder!
						</p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
							<div className='flex items-start gap-3'>
								<CheckCircle className='w-5 h-5 text-green-500 mt-0.5' />
								<div>
									<h4 className='font-semibold'>
										Rich Text Editing
									</h4>
									<p className='text-sm text-gray-600'>
										Format text with bold, italic, bullets,
										and links
									</p>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<CheckCircle className='w-5 h-5 text-green-500 mt-0.5' />
								<div>
									<h4 className='font-semibold'>
										Multiple Export Options
									</h4>
									<p className='text-sm text-gray-600'>
										Download as PDF or HTML
									</p>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<CheckCircle className='w-5 h-5 text-green-500 mt-0.5' />
								<div>
									<h4 className='font-semibold'>
										Professional Templates
									</h4>
									<p className='text-sm text-gray-600'>
										Choose from multiple designs
									</p>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<CheckCircle className='w-5 h-5 text-green-500 mt-0.5' />
								<div>
									<h4 className='font-semibold'>
										Smart Suggestions
									</h4>
									<p className='text-sm text-gray-600'>
										Get writing tips and skill
										recommendations
									</p>
								</div>
							</div>
						</div>

						<div className='bg-blue-50 p-4 rounded-lg mt-4'>
							<h4 className='font-semibold text-blue-900 mb-2'>
								💡 Pro Tips:
							</h4>
							<ul className='text-sm text-blue-800 space-y-1'>
								<li>
									• Use the rich text editor to format your
									descriptions
								</li>
								<li>• Start with your personal information</li>
								<li>
									• Use action verbs and quantify achievements
								</li>
								<li>
									• Export as HTML for easy online sharing
								</li>
							</ul>
						</div>
					</DialogDescription>
				</DialogHeader>
				<div className='flex justify-end'>
					<Button
						onClick={() => onOpenChange(false)}
						className='bg-blue-600 hover:bg-blue-700'
					>
						Get Started
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default function ResumeEditor() {
	const [resumeData, setResumeData] =
		useState<TResumeData>(DEFAULT_RESUME_DATA)
	const [isImporting, setIsImporting] = useState(false)
	const [isInitialized, setIsInitialized] = useState(false)
	const [showWelcome, setShowWelcome] = useState(false)
	const [lastSaved, setLastSaved] = useState<Date | null>(null)
	const [selectedIndustry, setSelectedIndustry] = useState<string>('General')
	const [draggedSection, setDraggedSection] = useState<string | null>(null)
	const [draggedWorkExp, setDraggedWorkExp] = useState<string | null>(null)

	// Load data on component mount
	useEffect(() => {
		const loadData = () => {
			try {
				if (typeof window !== 'undefined') {
					const savedData = localStorage.getItem('resumeData')
					const hasVisited = localStorage.getItem('hasVisitedResume')

					if (!hasVisited) {
						setShowWelcome(true)
						localStorage.setItem('hasVisitedResume', 'true')
					}

					if (savedData) {
						const parsed = JSON.parse(savedData)
						// Ensure new fields exist for old saved data
						if (!parsed.sections) {
							parsed.sections = DEFAULT_RESUME_DATA.sections
						}
						if (!parsed.template) {
							parsed.template = 'modern'
						}
						if (!parsed.customColors) {
							parsed.customColors =
								DEFAULT_RESUME_DATA.customColors
						}
						if (!parsed.customFonts) {
							parsed.customFonts = DEFAULT_RESUME_DATA.customFonts
						}
						if (!parsed.customSpacing) {
							parsed.customSpacing =
								DEFAULT_RESUME_DATA.customSpacing
						}
						setResumeData(parsed)
					}
				}
			} catch (error) {
				console.error(
					'Error loading resume data from localStorage:',
					error
				)
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
				if (typeof window !== 'undefined') {
					localStorage.setItem(
						'resumeData',
						JSON.stringify(resumeData)
					)
					setLastSaved(new Date())
				}
			} catch (error) {
				console.error(
					'Error saving resume data to localStorage:',
					error
				)
			}
		}
	}, [resumeData, isInitialized, isImporting])

	const completeness = calculateCompleteness(resumeData)

	// Export functions
	const exportData = () => {
		try {
			const dataStr = JSON.stringify(resumeData, null, 2)
			const dataBlob = new Blob([dataStr], { type: 'application/json' })
			const url = URL.createObjectURL(dataBlob)
			const link = document.createElement('a')
			link.href = url
			link.download = createFilename(
				resumeData.personalInfo.name,
				'json',
				true
			)
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
			URL.revokeObjectURL(url)
		} catch (error) {
			console.error('Error exporting data:', error)
		}
	}

	// Export as HTML
	const exportHTML = () => {
		const template =
			TEMPLATES[resumeData.template as keyof typeof TEMPLATES] ||
			TEMPLATES.modern

		// Use custom colors if available, otherwise fall back to template colors
		const primaryColor =
			resumeData.customColors.primary || template.colors.primary
		const secondaryColor =
			resumeData.customColors.secondary || template.colors.secondary
		const accentColor =
			resumeData.customColors.accent || template.colors.accent

		// Use custom fonts if available, otherwise fall back to default
		const bodyFont = resumeData.customFonts.body || 'Inter, sans-serif'
		const headingFont =
			resumeData.customFonts.heading || 'Inter, sans-serif'

		// Use custom spacing if available, otherwise fall back to default
		const sectionMargin = `${resumeData.customSpacing.sectionMargin}rem`
		const itemSpacing = `${resumeData.customSpacing.itemSpacing}rem`

		const sortedSections = resumeData.sections.sort(
			(a, b) => a.order - b.order
		)

		const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${resumeData.personalInfo.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: ${bodyFont};
            line-height: 1.6;
            color: ${secondaryColor};
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #ffffff;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: ${headingFont};
        }

        .header {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 40px;
            padding-bottom: 24px;
            border-bottom: 2px solid ${primaryColor};
        }

        .photo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid ${secondaryColor};
            flex-shrink: 0;
        }

        .header-content {
            flex: 1;
        }

        .name {
            font-size: 2.5rem;
            font-weight: bold;
            color: ${primaryColor};
            margin-bottom: 8px;
        }

        .title {
            font-size: 1.25rem;
            color: ${secondaryColor};
            margin-bottom: 16px;
        }

        .contact {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            font-size: 0.9rem;
        }

        .contact a {
            color: ${accentColor};
            text-decoration: none;
        }

        .contact a:hover {
            text-decoration: underline;
        }

        .section {
            margin-bottom: ${sectionMargin};
        }

        .section-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: ${primaryColor};
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid ${primaryColor};
        }

        .experience-item,
        .education-item,
        .project-item {
            margin-bottom: ${itemSpacing};
        }

        .item-header {
            font-weight: bold;
            color: ${primaryColor};
            margin-bottom: 4px;
        }

        .item-meta {
            color: ${secondaryColor};
            font-size: 0.9rem;
            margin-bottom: 8px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .skill {
            background: ${secondaryColor}33;
            color: ${secondaryColor};
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
        }

        .exp-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 12px;
        }

        .exp-skill {
            background: ${accentColor}33;
            color: ${accentColor};
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.8rem;
        }

        .technologies {
            margin-top: 8px;
        }

        .tech {
            background: ${accentColor}33;
            color: ${accentColor};
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.8rem;
            margin-right: 6px;
            margin-bottom: 4px;
            display: inline-block;
        }

        .prose {
            line-height: 1.7;
        }

        .prose strong {
            font-weight: 600;
            color: ${primaryColor};
        }

        .prose em {
            font-style: italic;
        }

        .prose ul {
            margin: 8px 0;
            padding-left: 20px;
        }

        .prose li {
            margin-bottom: 4px;
        }

        .prose a {
            color: ${accentColor};
            text-decoration: none;
        }

        .prose a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                text-align: center;
            }

            .contact {
                grid-template-columns: 1fr;
            }

            .name {
                font-size: 2rem;
            }
        }

        @media print {
            body {
                padding: 20px;
            }

            .section {
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        ${resumeData.personalInfo.photo ? `<img src="${resumeData.personalInfo.photo}" alt="${resumeData.personalInfo.name}" class="photo">` : ''}
        <div class="header-content">
            <h1 class="name">${resumeData.personalInfo.name}</h1>
            <h2 class="title">${resumeData.personalInfo.title}</h2>
            <div class="contact">
                <div>📧 <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a></div>
                <div>📱 ${resumeData.personalInfo.phone}</div>
                <div>📍 ${resumeData.personalInfo.location}</div>
                <div>🌐 <a href="https://${resumeData.personalInfo.website}" target="_blank">${resumeData.personalInfo.website}</a></div>
                <div>💼 <a href="${resumeData.personalInfo.linkedin}" target="_blank">${resumeData.personalInfo.linkedin}</a></div>
                <div>💻 <a href="https://${resumeData.personalInfo.github}" target="_blank">${resumeData.personalInfo.github}</a></div>
            </div>
        </div>
    </div>

    ${sortedSections
		.map(section => {
			switch (section.type) {
				case 'summary':
					return resumeData.summary
						? `
            <div class="section">
                <h3 class="section-title">${section.title}</h3>
                <div class="prose">${formatRichText(resumeData.summary)}</div>
            </div>
            `
						: ''

				case 'experience':
					return resumeData.workExperience.length > 0
						? `
            <div class="section">
                <h3 class="section-title">${section.title}</h3>
                ${resumeData.workExperience
					.map(
						exp => `
                <div class="experience-item">
                    <div class="item-header">${exp.position} - ${exp.company}</div>
                    <div class="item-meta">${exp.location} | ${exp.startDate} - ${exp.endDate}</div>
                    <div class="prose">${formatRichText(exp.description)}</div>
                    ${
						exp.skills && exp.skills.length > 0
							? `
                    <div class="exp-skills">
                        ${exp.skills.map(skill => `<span class="exp-skill">${skill}</span>`).join('')}
                    </div>
                    `
							: ''
					}
                </div>
                `
					)
					.join('')}
            </div>
            `
						: ''

				case 'education':
					return resumeData.education.length > 0
						? `
            <div class="section">
                <h3 class="section-title">${section.title}</h3>
                ${resumeData.education
					.map(
						edu => `
                <div class="education-item">
                    <div class="item-header">${edu.degree} in ${edu.field}</div>
                    <div class="item-meta">${edu.institution} | ${edu.startDate} - ${edu.endDate}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</div>
                </div>
                `
					)
					.join('')}
            </div>
            `
						: ''

				case 'skills':
					return resumeData.skills.length > 0
						? `
            <div class="section">
                <h3 class="section-title">${section.title}</h3>
                <div class="skills">
                    ${resumeData.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                </div>
            </div>
            `
						: ''

				case 'projects':
					return resumeData.projects.length > 0
						? `
            <div class="section">
                <h3 class="section-title">${section.title}</h3>
                ${resumeData.projects
					.map(
						project => `
                <div class="project-item">
                    <div class="item-header">${project.name}${project.link ? ` - <a href="${project.link.startsWith('http') ? project.link : `https://${project.link}`}" target="_blank">${project.link}</a>` : ''}</div>
                    <div class="prose">${formatRichText(project.description)}</div>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                    </div>
                </div>
                `
					)
					.join('')}
            </div>
            `
						: ''

				default:
					return ''
			}
		})
		.join('')}
</body>
</html>`

		const blob = new Blob([htmlContent], { type: 'text/html' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = createFilename(resumeData.personalInfo.name, 'html')
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
	}

	const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				try {
					setIsImporting(true)
					const importedData = JSON.parse(e.target?.result as string)
					// Ensure new fields exist for old saved data
					if (!importedData.sections) {
						importedData.sections = DEFAULT_RESUME_DATA.sections
					}
					if (!importedData.template) {
						importedData.template = 'modern'
					}
					if (!importedData.customColors) {
						importedData.customColors =
							DEFAULT_RESUME_DATA.customColors
					}
					if (!importedData.customFonts) {
						importedData.customFonts =
							DEFAULT_RESUME_DATA.customFonts
					}
					if (!importedData.customSpacing) {
						importedData.customSpacing =
							DEFAULT_RESUME_DATA.customSpacing
					}
					setResumeData(importedData)
					setTimeout(() => {
						localStorage.setItem(
							'resumeData',
							JSON.stringify(importedData)
						)
						setIsImporting(false)
					}, 100)
				} catch (error) {
					console.error('Error importing data:', error)
					alert('Error importing data. Please check the file format.')
					setIsImporting(false)
				}
			}
			reader.readAsText(file)
		}
		event.target.value = ''
	}

	const clearAllData = () => {
		if (
			confirm(
				'Are you sure you want to clear all resume data? This action cannot be undone.'
			)
		) {
			try {
				setIsImporting(true)
				localStorage.removeItem('resumeData')
				setResumeData(DEFAULT_RESUME_DATA)
				setTimeout(() => {
					setIsImporting(false)
				}, 100)
			} catch (error) {
				console.error('Error clearing resume data:', error)
				setIsImporting(false)
			}
		}
	}

	// Template selection
	const updateTemplate = (template: string) => {
		setResumeData(prev => ({ ...prev, template }))
	}

	// Customization updates
	const updateCustomColor = (
		field: keyof TResumeData['customColors'],
		value: string
	) => {
		setResumeData(prev => ({
			...prev,
			customColors: {
				...prev.customColors,
				[field]: value
			}
		}))
	}

	const updateCustomFont = (
		field: keyof TResumeData['customFonts'],
		value: string
	) => {
		setResumeData(prev => ({
			...prev,
			customFonts: {
				...prev.customFonts,
				[field]: value
			}
		}))
	}

	const updateCustomSpacing = (
		field: keyof TResumeData['customSpacing'],
		value: number
	) => {
		setResumeData(prev => ({
			...prev,
			customSpacing: {
				...prev.customSpacing,
				[field]: value
			}
		}))
	}

	// Section drag and drop
	const handleDragStart = (e: React.DragEvent, sectionId: string) => {
		setDraggedSection(sectionId)
		e.dataTransfer.effectAllowed = 'move'
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		e.dataTransfer.dropEffect = 'move'
	}

	const handleDrop = (e: React.DragEvent, targetSectionId: string) => {
		e.preventDefault()
		if (!draggedSection || draggedSection === targetSectionId) return

		setResumeData(prev => {
			const sections = [...prev.sections]
			const draggedIndex = sections.findIndex(
				s => s.id === draggedSection
			)
			const targetIndex = sections.findIndex(
				s => s.id === targetSectionId
			)

			if (draggedIndex === -1 || targetIndex === -1) return prev

			const [draggedItem] = sections.splice(draggedIndex, 1)
			sections.splice(targetIndex, 0, draggedItem)

			sections.forEach((section, index) => {
				section.order = index + 1
			})

			return { ...prev, sections }
		})

		setDraggedSection(null)
	}

	// Work Experience drag and drop
	const handleWorkExpDragStart = (e: React.DragEvent, id: string) => {
		setDraggedWorkExp(id)
		e.dataTransfer.effectAllowed = 'move'
	}

	const handleWorkExpDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		e.dataTransfer.dropEffect = 'move'
	}

	const handleWorkExpDrop = (e: React.DragEvent, targetId: string) => {
		e.preventDefault()
		if (!draggedWorkExp || draggedWorkExp === targetId) return

		setResumeData(prev => {
			const workExperience = [...prev.workExperience]
			const draggedIndex = workExperience.findIndex(
				exp => exp.id === draggedWorkExp
			)
			const targetIndex = workExperience.findIndex(
				exp => exp.id === targetId
			)

			if (draggedIndex === -1 || targetIndex === -1) return prev

			const [draggedItem] = workExperience.splice(draggedIndex, 1)
			workExperience.splice(targetIndex, 0, draggedItem)

			return { ...prev, workExperience }
		})

		setDraggedWorkExp(null)
	}

	// Photo upload
	const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				alert('Photo size should be less than 5MB')
				return
			}

			const reader = new FileReader()
			reader.onload = e => {
				const base64 = e.target?.result as string
				setResumeData(prev => ({
					...prev,
					personalInfo: {
						...prev.personalInfo,
						photo: base64
					}
				}))
			}
			reader.readAsDataURL(file)
		}
	}

	const removePhoto = () => {
		setResumeData(prev => ({
			...prev,
			personalInfo: {
				...prev.personalInfo,
				photo: undefined
			}
		}))
	}

	// PDF download
	const downloadPDF = () => {
		const template =
			TEMPLATES[resumeData.template as keyof typeof TEMPLATES] ||
			TEMPLATES.modern

		// Use custom colors if available, otherwise fall back to template colors
		const primaryColor =
			resumeData.customColors.primary || template.colors.primary
		const secondaryColor =
			resumeData.customColors.secondary || template.colors.secondary
		const accentColor =
			resumeData.customColors.accent || template.colors.accent

		// Use custom fonts if available, otherwise fall back to default
		const bodyFont = resumeData.customFonts.body || 'Inter, sans-serif'
		const headingFont =
			resumeData.customFonts.heading || 'Inter, sans-serif'

		// Use custom spacing if available, otherwise fall back to default
		const sectionMargin = `${resumeData.customSpacing.sectionMargin}rem`
		const itemSpacing = `${resumeData.customSpacing.itemSpacing}rem`

		const printWindow = window.open('', '_blank')
		if (printWindow) {
			const sortedSections = resumeData.sections.sort(
				(a, b) => a.order - b.order
			)

			printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${resumeData.personalInfo.name} - Resume</title>
        <style>
          body {
            font-family: ${bodyFont};
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            color: ${secondaryColor};
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: ${headingFont};
          }
          .header {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 30px;
            border-bottom: 2px solid ${primaryColor};
            padding-bottom: 20px;
          }
          .photo {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid ${secondaryColor};
          }
          .header-content { flex: 1; }
          .name {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 5px;
            color: ${primaryColor};
          }
          .title {
            font-size: 18px;
            color: ${secondaryColor};
            margin-bottom: 10px;
          }
          .contact {
            font-size: 14px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
          }
          .contact a { color: ${accentColor}; text-decoration: none; }
          .section { margin-bottom: ${sectionMargin}; }
          .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid ${primaryColor};
            padding-bottom: 5px;
            color: ${primaryColor};
          }
          .experience-item, .education-item, .project-item { margin-bottom: ${itemSpacing}; }
          .item-header {
            font-weight: bold;
            margin-bottom: 5px;
            color: ${primaryColor};
          }
          .item-meta {
            color: ${secondaryColor};
            font-size: 14px;
            margin-bottom: 5px;
          }
          .skills { display: flex; flex-wrap: wrap; gap: 8px; }
          .skill {
            background: ${secondaryColor}33;
            color: ${secondaryColor};
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 14px;
          }
          .exp-skills { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
          .exp-skill {
            background: ${accentColor}33;
            color: ${accentColor};
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 11px;
          }
          .technologies { margin-top: 5px; }
          .tech {
            background: ${accentColor}33;
            color: ${accentColor};
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 12px;
            margin-right: 5px;
          }
          .prose { line-height: 1.7; }
          .prose strong { font-weight: 600; color: ${primaryColor}; }
          .prose em { font-style: italic; }
          .prose ul { margin: 8px 0; padding-left: 20px; }
          .prose li { margin-bottom: 4px; }
          .prose a { color: ${accentColor}; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="header">
          ${resumeData.personalInfo.photo ? `<img src="${resumeData.personalInfo.photo}" alt="${resumeData.personalInfo.name}" class="photo">` : ''}
          <div class="header-content">
            <div class="name">${resumeData.personalInfo.name}</div>
            <div class="title">${resumeData.personalInfo.title}</div>
            <div class="contact">
              <div>📧 <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a></div>
              <div>📱 ${resumeData.personalInfo.phone}</div>
              <div>📍 ${resumeData.personalInfo.location}</div>
              <div>🌐 <a href="https://${resumeData.personalInfo.website}" target="_blank">${resumeData.personalInfo.website}</a></div>
              <div>💼 <a href="${resumeData.personalInfo.linkedin}" target="_blank">${resumeData.personalInfo.linkedin}</a></div>
              <div>💻 <a href="https://${resumeData.personalInfo.github}" target="_blank">${resumeData.personalInfo.github}</a></div>
            </div>
          </div>
        </div>

        ${sortedSections
			.map(section => {
				switch (section.type) {
					case 'summary':
						return resumeData.summary
							? `
                <div class="section">
                  <div class="section-title">${section.title}</div>
                  <div class="prose">${formatRichText(resumeData.summary)}</div>
                </div>
              `
							: ''

					case 'experience':
						return resumeData.workExperience.length > 0
							? `
                <div class="section">
                  <div class="section-title">${section.title}</div>
                  ${resumeData.workExperience
						.map(
							exp => `
                    <div class="experience-item">
                      <div class="item-header">${exp.position} - ${exp.company}</div>
                      <div class="item-meta">${exp.location} | ${exp.startDate} - ${exp.endDate}</div>
                      <div class="prose">${formatRichText(exp.description)}</div>
                      ${
							exp.skills && exp.skills.length > 0
								? `
                        <div class="exp-skills">
                          ${exp.skills.map(skill => `<span class="exp-skill">${skill}</span>`).join('')}
                        </div>
                      `
								: ''
						}
                    </div>
                  `
						)
						.join('')}
                </div>
              `
							: ''

					case 'education':
						return resumeData.education.length > 0
							? `
                <div class="section">
                  <div class="section-title">${section.title}</div>
                  ${resumeData.education
						.map(
							edu => `
                    <div class="education-item">
                      <div class="item-header">${edu.degree} in ${edu.field}</div>
                      <div class="item-meta">${edu.institution} | ${edu.startDate} - ${edu.endDate}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</div>
                    </div>
                  `
						)
						.join('')}
                </div>
              `
							: ''

					case 'skills':
						return resumeData.skills.length > 0
							? `
                <div class="section">
                  <div class="section-title">${section.title}</div>
                  <div class="skills">
                    ${resumeData.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                  </div>
                </div>
              `
							: ''

					case 'projects':
						return resumeData.projects.length > 0
							? `
                <div class="section">
                  <div class="section-title">${section.title}</div>
                  ${resumeData.projects
						.map(
							project => `
                    <div class="project-item">
                      <div class="item-header">${project.name}${project.link ? ` - <a href="${project.link.startsWith('http') ? project.link : `https://${project.link}`}" target="_blank">${project.link}</a>` : ''}</div>
                      <div class="prose">${formatRichText(project.description)}</div>
                      <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                      </div>
                    </div>
                  `
						)
						.join('')}
                </div>
              `
							: ''

					default:
						return ''
				}
			})
			.join('')}
      </body>
      </html>
    `)
			printWindow.document.close()
			printWindow.print()
		}
	}

	// Update functions
	const updatePersonalInfo = (field: keyof TPersonalInfo, value: string) => {
		setResumeData(prevData => ({
			...prevData,
			personalInfo: {
				...prevData.personalInfo,
				[field]: value
			}
		}))
	}

	const updateSummary = (value: string) => {
		setResumeData(prevData => ({
			...prevData,
			summary: value
		}))
	}

	const addWorkExperience = () => {
		setResumeData(prevData => ({
			...prevData,
			workExperience: [
				...prevData.workExperience,
				{
					id: generateId(),
					company: '',
					position: '',
					location: '',
					startDate: '',
					endDate: '',
					description: '',
					skills: []
				}
			]
		}))
	}

	const removeWorkExperience = (id: string) => {
		setResumeData(prevData => ({
			...prevData,
			workExperience: prevData.workExperience.filter(exp => exp.id !== id)
		}))
	}

	const updateWorkExperience = (
		id: string,
		field: keyof TWorkExperience,
		value: string | string[]
	) => {
		setResumeData(prevData => ({
			...prevData,
			workExperience: prevData.workExperience.map(exp =>
				exp.id === id ? { ...exp, [field]: value } : exp
			)
		}))
	}

	const addEducation = () => {
		setResumeData(prevData => ({
			...prevData,
			education: [
				...prevData.education,
				{
					id: generateId(),
					institution: '',
					degree: '',
					field: '',
					startDate: '',
					endDate: ''
				}
			]
		}))
	}

	const removeEducation = (id: string) => {
		setResumeData(prevData => ({
			...prevData,
			education: prevData.education.filter(edu => edu.id !== id)
		}))
	}

	const updateEducation = (
		id: string,
		field: keyof TEducation,
		value: string
	) => {
		setResumeData(prevData => ({
			...prevData,
			education: prevData.education.map(edu =>
				edu.id === id ? { ...edu, [field]: value } : edu
			)
		}))
	}

	const addSkill = () => {
		setResumeData(prevData => ({
			...prevData,
			skills: [...prevData.skills, '']
		}))
	}

	const updateSkill = (index: number, value: string) => {
		setResumeData(prevData => ({
			...prevData,
			skills: prevData.skills.map((skill, i) =>
				i === index ? value : skill
			)
		}))
	}

	const removeSkill = (index: number) => {
		setResumeData(prevData => ({
			...prevData,
			skills: prevData.skills.filter((_, i) => i !== index)
		}))
	}

	const addProject = () => {
		setResumeData(prevData => ({
			...prevData,
			projects: [
				...prevData.projects,
				{
					id: generateId(),
					name: '',
					description: '',
					technologies: []
				}
			]
		}))
	}

	const removeProject = (id: string) => {
		setResumeData(prevData => ({
			...prevData,
			projects: prevData.projects.filter(project => project.id !== id)
		}))
	}

	const updateProject = (
		id: string,
		field: keyof TProject,
		value: string | string[]
	) => {
		setResumeData(prevData => ({
			...prevData,
			projects: prevData.projects.map(project =>
				project.id === id ? { ...project, [field]: value } : project
			)
		}))
	}

	// Add suggested skills
	const addSuggestedSkills = (skills: string[]) => {
		setResumeData(prevData => ({
			...prevData,
			skills: [...new Set([...prevData.skills, ...skills])] // Remove duplicates
		}))
	}

	if (!isInitialized) {
		return (
			<div className='flex items-center justify-center min-h-screen bg-gray-50'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
					<p className='text-gray-600 text-lg'>
						Loading your resume...
					</p>
				</div>
			</div>
		)
	}

	return (
		<TooltipProvider>
			<div className='min-h-screen bg-gray-50'>
				<WelcomeDialog
					open={showWelcome}
					onOpenChange={setShowWelcome}
				/>

				<div className='max-w-7xl mx-auto p-4'>
					{/* Header */}
					<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6'>
						<div>
							<h1 className='text-4xl font-bold text-gray-900 mb-2'>
								Resume Builder
							</h1>
							<p className='text-gray-600'>
								Create a professional resume with rich text
								formatting
							</p>
						</div>

						<div className='flex flex-wrap gap-2'>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										onClick={exportData}
										variant='outline'
										size='sm'
										className='flex items-center gap-2'
									>
										<Download className='w-4 h-4' />
										Export JSON
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									Export your resume data as JSON
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<label className='cursor-pointer'>
										<Button
											variant='outline'
											size='sm'
											asChild
											className='flex items-center gap-2'
										>
											<span>
												<Upload className='w-4 h-4' />
												Import
											</span>
										</Button>
										<input
											type='file'
											accept='.json'
											onChange={importData}
											className='hidden'
										/>
									</label>
								</TooltipTrigger>
								<TooltipContent>
									Import resume data from JSON file
								</TooltipContent>
							</Tooltip>

							<Button
								onClick={clearAllData}
								variant='destructive'
								size='sm'
							>
								Clear All
							</Button>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700'>
										<Download className='w-4 h-4' />
										Export
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem onClick={downloadPDF}>
										<FileText className='w-4 h-4 mr-2' />
										Download PDF
									</DropdownMenuItem>
									<DropdownMenuItem onClick={exportHTML}>
										<FileCode className='w-4 h-4 mr-2' />
										Export HTML
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>

					{/* Progress and Auto-save Status */}
					<div className='mb-6 space-y-3'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-3'>
								<span className='text-sm font-medium text-gray-700'>
									Resume Completion
								</span>
								<Progress
									value={completeness}
									className='w-32'
								/>
								<span className='text-sm text-gray-600'>
									{completeness}%
								</span>
							</div>

							{lastSaved && (
								<div className='flex items-center gap-2 text-sm text-gray-500'>
									<Save className='w-4 h-4' />
									Auto-saved {formatDate(lastSaved)}
								</div>
							)}
						</div>

						{completeness < 100 && (
							<Alert>
								<AlertCircle className='h-4 w-4' />
								<AlertDescription>
									Your resume is {completeness}% complete.
									{completeness < 50 &&
										' Add more sections to improve your chances!'}
									{completeness >= 50 &&
										completeness < 80 &&
										" You're making great progress!"}
									{completeness >= 80 &&
										' Almost done! Just a few more details.'}
								</AlertDescription>
							</Alert>
						)}
					</div>

					<Tabs defaultValue='edit' className='w-full'>
						<TabsList className='grid w-full grid-cols-2 mb-6'>
							<TabsTrigger
								value='edit'
								className='flex items-center gap-2'
							>
								<Edit3 className='w-4 h-4' />
								Edit Resume
							</TabsTrigger>
							<TabsTrigger
								value='preview'
								className='flex items-center gap-2'
							>
								<Eye className='w-4 h-4' />
								Preview
							</TabsTrigger>
						</TabsList>

						<TabsContent value='edit' className='space-y-6'>
							{/* Template Selection */}
							<Card className='border-2 border-blue-200 bg-blue-50/50'>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Palette className='w-5 h-5' />
										Choose Your Template
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
										{Object.entries(TEMPLATES).map(
											([key, template]) => (
												<div
													key={key}
													className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
														resumeData.template ===
														key
															? 'border-blue-500 bg-blue-50'
															: 'border-gray-200 hover:border-gray-300'
													}`}
													onClick={() =>
														updateTemplate(key)
													}
												>
													<div className='flex items-center gap-3 mb-2'>
														<div
															className='w-6 h-6 rounded-full'
															style={{
																backgroundColor:
																	template
																		.colors
																		.primary
															}}
														/>
														<h3 className='font-semibold'>
															{template.name}
														</h3>
													</div>
													<p className='text-sm text-gray-600'>
														{template.description}
													</p>
												</div>
											)
										)}
									</div>
								</CardContent>
							</Card>

							{/* Customization Options */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Paintbrush className='w-5 h-5' />
										Customize Design
									</CardTitle>
								</CardHeader>
								<CardContent className='space-y-6'>
									{/* Colors */}
									<div>
										<h4 className='text-lg font-semibold mb-3 flex items-center gap-2'>
											<Palette className='w-4 h-4' />
											Colors
										</h4>
										<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Primary Color
												</label>
												<Input
													type='color'
													value={
														resumeData.customColors
															.primary ||
														(TEMPLATES[
															resumeData.template as keyof typeof TEMPLATES
														] || TEMPLATES.modern).colors.primary
													}
													onChange={e =>
														updateCustomColor(
															'primary',
															e.target.value
														)
													}
													className='h-10 w-full cursor-pointer'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Secondary Color
												</label>
												<Input
													type='color'
													value={
														resumeData.customColors
															.secondary ||
														(TEMPLATES[
															resumeData.template as keyof typeof TEMPLATES
														] || TEMPLATES.modern).colors.secondary
													}
													onChange={e =>
														updateCustomColor(
															'secondary',
															e.target.value
														)
													}
													className='h-10 w-full cursor-pointer'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Accent Color
												</label>
												<Input
													type='color'
													value={
														resumeData.customColors
															.accent ||
														(TEMPLATES[
															resumeData.template as keyof typeof TEMPLATES
														] || TEMPLATES.modern).colors.accent
													}
													onChange={e =>
														updateCustomColor(
															'accent',
															e.target.value
														)
													}
													className='h-10 w-full cursor-pointer'
												/>
											</div>
										</div>
									</div>

									{/* Fonts */}
									<div>
										<h4 className='text-lg font-semibold mb-3 flex items-center gap-2'>
											<Type className='w-4 h-4' />
											Fonts
										</h4>
										<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Body Font
												</label>
												<Select
													value={
														resumeData.customFonts
															.body ||
														'Inter, sans-serif'
													}
													onValueChange={value =>
														updateCustomFont(
															'body',
															value
														)
													}
												>
													<SelectTrigger>
														<SelectValue placeholder='Select body font' />
													</SelectTrigger>
													<SelectContent>
														{AVAILABLE_FONTS.map(
															font => (
																<SelectItem
																	key={
																		font.value
																	}
																	value={
																		font.value
																	}
																>
																	{font.label}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
											</div>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Heading Font
												</label>
												<Select
													value={
														resumeData.customFonts
															.heading ||
														'Inter, sans-serif'
													}
													onValueChange={value =>
														updateCustomFont(
															'heading',
															value
														)
													}
												>
													<SelectTrigger>
														<SelectValue placeholder='Select heading font' />
													</SelectTrigger>
													<SelectContent>
														{AVAILABLE_FONTS.map(
															font => (
																<SelectItem
																	key={
																		font.value
																	}
																	value={
																		font.value
																	}
																>
																	{font.label}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
											</div>
										</div>
									</div>

									{/* Spacing */}
									<div>
										<h4 className='text-lg font-semibold mb-3 flex items-center gap-2'>
											<Ruler className='w-4 h-4' />
											Spacing (rem)
										</h4>
										<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Section Margin
												</label>
												<Input
													type='number'
													value={
														resumeData.customSpacing
															.sectionMargin
													}
													onChange={e =>
														updateCustomSpacing(
															'sectionMargin',
															Number.parseFloat(
																e.target.value
															) || 0
														)
													}
													min='0'
													step='0.1'
													placeholder='2.0'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-1'>
													Item Spacing
												</label>
												<Input
													type='number'
													value={
														resumeData.customSpacing
															.itemSpacing
													}
													onChange={e =>
														updateCustomSpacing(
															'itemSpacing',
															Number.parseFloat(
																e.target.value
															) || 0
														)
													}
													min='0'
													step='0.1'
													placeholder='1.0'
												/>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Section Order Management */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<GripVertical className='w-5 h-5' />
										Section Order
										<Tooltip>
											<TooltipTrigger asChild>
												<button className='p-0 border-0 bg-transparent hover:bg-transparent'>
													<HelpCircle className='w-4 h-4 text-gray-400' />
												</button>
											</TooltipTrigger>
											<TooltipContent>
												Drag sections to reorder them on
												your resume
											</TooltipContent>
										</Tooltip>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-2'>
										{resumeData.sections
											.sort((a, b) => a.order - b.order)
											.map(section => (
												<div
													key={section.id}
													draggable
													onDragStart={e =>
														handleDragStart(
															e,
															section.id
														)
													}
													onDragOver={handleDragOver}
													onDrop={e =>
														handleDrop(
															e,
															section.id
														)
													}
													className='flex items-center gap-3 p-3 bg-white border rounded-lg cursor-move hover:bg-gray-50 transition-colors shadow-sm'
												>
													<GripVertical className='w-4 h-4 text-gray-400' />
													<span className='font-medium text-blue-600'>
														{section.order}.
													</span>
													<span className='font-medium'>
														{section.title}
													</span>
												</div>
											))}
									</div>
								</CardContent>
							</Card>

							{/* Personal Information */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<User className='w-5 h-5' />
										Personal Information
										<Badge
											variant='secondary'
											className='ml-2'
										>
											Required
										</Badge>
									</CardTitle>
								</CardHeader>
								<CardContent className='space-y-6'>
									{/* Photo Upload */}
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0'>
											{resumeData.personalInfo.photo ? (
												<div className='relative'>
													<img
														src={
															resumeData
																.personalInfo
																.photo ||
															'/placeholder.svg'
														}
														alt='Profile'
														className='w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md'
													/>
													<Button
														onClick={removePhoto}
														size='sm'
														variant='destructive'
														className='absolute -top-2 -right-2 h-6 w-6 rounded-full p-0'
													>
														×
													</Button>
												</div>
											) : (
												<div className='w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-md'>
													<User className='w-10 h-10 text-gray-400' />
												</div>
											)}
										</div>
										<div>
											<label className='cursor-pointer'>
												<Button
													variant='outline'
													size='sm'
													asChild
													className='flex items-center gap-2'
												>
													<span>
														<Upload className='w-4 h-4' />
														{resumeData.personalInfo
															.photo
															? 'Change Photo'
															: 'Upload Photo'}
													</span>
												</Button>
												<input
													type='file'
													accept='image/*'
													onChange={handlePhotoUpload}
													className='hidden'
												/>
											</label>
											<p className='text-xs text-gray-500 mt-1'>
												Optional • Max 5MB • JPG/PNG
											</p>
										</div>
									</div>

									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<label className='block text-sm font-medium mb-2 flex items-center gap-1'>
												Full Name
												<span className='text-red-500'>
													*
												</span>
											</label>
											<Input
												value={
													resumeData.personalInfo.name
												}
												onChange={e =>
													updatePersonalInfo(
														'name',
														e.target.value
													)
												}
												placeholder='John Doe'
												className={
													!resumeData.personalInfo
														.name
														? 'border-red-200'
														: ''
												}
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2 flex items-center gap-1'>
												Professional Title
												<span className='text-red-500'>
													*
												</span>
											</label>
											<Input
												value={
													resumeData.personalInfo
														.title
												}
												onChange={e =>
													updatePersonalInfo(
														'title',
														e.target.value
													)
												}
												placeholder='Software Engineer'
												className={
													!resumeData.personalInfo
														.title
														? 'border-red-200'
														: ''
												}
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2 flex items-center gap-1'>
												<Mail className='w-4 h-4' />
												Email
												<span className='text-red-500'>
													*
												</span>
											</label>
											<Input
												type='email'
												value={
													resumeData.personalInfo
														.email
												}
												onChange={e =>
													updatePersonalInfo(
														'email',
														e.target.value
													)
												}
												placeholder='john@example.com'
												className={
													!resumeData.personalInfo
														.email
														? 'border-red-200'
														: ''
												}
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2 flex items-center gap-1'>
												<Smartphone className='w-4 h-4' />
												Phone
												<span className='text-red-500'>
													*
												</span>
											</label>
											<Input
												value={
													resumeData.personalInfo
														.phone
												}
												onChange={e =>
													updatePersonalInfo(
														'phone',
														e.target.value
													)
												}
												placeholder='+1 (555) 123-4567'
												className={
													!resumeData.personalInfo
														.phone
														? 'border-red-200'
														: ''
												}
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2'>
												Location
											</label>
											<Input
												value={
													resumeData.personalInfo
														.location
												}
												onChange={e =>
													updatePersonalInfo(
														'location',
														e.target.value
													)
												}
												placeholder='New York, NY'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2'>
												Website
											</label>
											<Input
												value={
													resumeData.personalInfo
														.website
												}
												onChange={e =>
													updatePersonalInfo(
														'website',
														e.target.value
													)
												}
												placeholder='johndoe.com'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2'>
												LinkedIn
											</label>
											<Input
												value={
													resumeData.personalInfo
														.linkedin
												}
												onChange={e =>
													updatePersonalInfo(
														'linkedin',
														e.target.value
													)
												}
												placeholder='https://linkedin.com/in/johndoe'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium mb-2'>
												GitHub
											</label>
											<Input
												value={
													resumeData.personalInfo
														.github
												}
												onChange={e =>
													updatePersonalInfo(
														'github',
														e.target.value
													)
												}
												placeholder='github.com/johndoe'
											/>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Professional Summary */}
							<Card>
								<CardHeader>
									<div className='flex items-center justify-between'>
										<CardTitle className='flex items-center gap-2'>
											<FileText className='w-5 h-5' />
											Professional Summary
										</CardTitle>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant='ghost'
													size='sm'
												>
													<Lightbulb className='w-4 h-4' />
												</Button>
											</TooltipTrigger>
											<TooltipContent className='max-w-xs'>
												<div className='space-y-1'>
													<p className='font-semibold'>
														Writing Tips:
													</p>
													{WRITING_TIPS.summary.map(
														(tip, index) => (
															<p
																key={index}
																className='text-xs'
															>
																• {tip}
															</p>
														)
													)}
												</div>
											</TooltipContent>
										</Tooltip>
									</div>
								</CardHeader>
								<CardContent>
									<RichTextEditor
										value={resumeData.summary}
										onChange={updateSummary}
										placeholder='Write a compelling 2-3 sentence summary highlighting your experience, skills, and career goals. Use **bold** for emphasis, *italic* for style, and • bullet points for lists.'
										rows={4}
									/>
									<div className='flex justify-between items-center mt-2'>
										<p className='text-xs text-gray-500'>
											{resumeData.summary.length}/300
											characters recommended
										</p>
										{resumeData.summary.length > 300 && (
											<p className='text-xs text-red-500'>
												Consider shortening your summary
											</p>
										)}
									</div>
								</CardContent>
							</Card>

							{/* Work Experience */}
							<Card>
								<CardHeader>
									<div className='flex justify-between items-center'>
										<div className='flex items-center gap-2'>
											<CardTitle>
												Work Experience
											</CardTitle>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant='ghost'
														size='sm'
													>
														<Lightbulb className='w-4 h-4' />
													</Button>
												</TooltipTrigger>
												<TooltipContent className='max-w-xs'>
													<div className='space-y-1'>
														<p className='font-semibold'>
															Writing Tips:
														</p>
														{WRITING_TIPS.experience.map(
															(tip, index) => (
																<p
																	key={index}
																	className='text-xs'
																>
																	• {tip}
																</p>
															)
														)}
													</div>
												</TooltipContent>
											</Tooltip>
										</div>
										<Button
											onClick={addWorkExperience}
											size='sm'
											className='flex items-center gap-2'
										>
											<Plus className='w-4 h-4' />
											Add Experience
										</Button>
									</div>
								</CardHeader>
								<CardContent className='space-y-6'>
									{resumeData.workExperience.length === 0 ? (
										<div className='text-center py-8 text-gray-500'>
											<p>No work experience added yet.</p>
											<p className='text-sm'>
												Click "Add Experience" to get
												started!
											</p>
										</div>
									) : (
										resumeData.workExperience.map(
											(exp, index) => (
												<div
													key={exp.id}
													draggable
													onDragStart={e =>
														handleWorkExpDragStart(
															e,
															exp.id
														)
													}
													onDragOver={
														handleWorkExpDragOver
													}
													onDrop={e =>
														handleWorkExpDrop(
															e,
															exp.id
														)
													}
													className='border-2 border-gray-100 rounded-lg p-6 relative bg-gray-50/50 flex items-start gap-3'
												>
													<GripVertical className='w-5 h-5 text-gray-400 cursor-grab mt-1' />
													<div className='flex-1'>
														<div className='flex justify-between items-start mb-4'>
															<Badge variant='outline'>
																Experience #
																{index + 1}
															</Badge>
															<Button
																onClick={() =>
																	removeWorkExperience(
																		exp.id
																	)
																}
																size='sm'
																variant='destructive'
															>
																<Trash2 className='w-4 h-4' />
															</Button>
														</div>

														<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
															<div>
																<label className='block text-sm font-medium mb-1'>
																	Company *
																</label>
																<Input
																	value={
																		exp.company
																	}
																	onChange={e =>
																		updateWorkExperience(
																			exp.id,
																			'company',
																			e
																				.target
																				.value
																		)
																	}
																	placeholder='Google'
																/>
															</div>
															<div>
																<label className='block text-sm font-medium mb-1'>
																	Position *
																</label>
																<Input
																	value={
																		exp.position
																	}
																	onChange={e =>
																		updateWorkExperience(
																			exp.id,
																			'position',
																			e
																				.target
																				.value
																		)
																	}
																	placeholder='Software Engineer'
																/>
															</div>
															<div>
																<label className='block text-sm font-medium mb-1'>
																	Location
																</label>
																<Input
																	value={
																		exp.location
																	}
																	onChange={e =>
																		updateWorkExperience(
																			exp.id,
																			'location',
																			e
																				.target
																				.value
																		)
																	}
																	placeholder='San Francisco, CA'
																/>
															</div>
															<div className='grid grid-cols-2 gap-2'>
																<div>
																	<label className='block text-sm font-medium mb-1'>
																		Start
																		Date
																	</label>
																	<Input
																		value={
																			exp.startDate
																		}
																		onChange={e =>
																			updateWorkExperience(
																				exp.id,
																				'startDate',
																				e
																					.target
																					.value
																			)
																		}
																		placeholder='Jan 2020'
																	/>
																</div>
																<div>
																	<label className='block text-sm font-medium mb-1'>
																		End Date
																	</label>
																	<Input
																		value={
																			exp.endDate
																		}
																		onChange={e =>
																			updateWorkExperience(
																				exp.id,
																				'endDate',
																				e
																					.target
																					.value
																			)
																		}
																		placeholder='Present'
																	/>
																</div>
															</div>
														</div>

														<div className='mb-4'>
															<label className='block text-sm font-medium mb-1'>
																Description *
															</label>
															<RichTextEditor
																value={
																	exp.description
																}
																onChange={value =>
																	updateWorkExperience(
																		exp.id,
																		'description',
																		value
																	)
																}
																placeholder='• **Developed** and maintained web applications using React and Node.js&#10;• **Collaborated** with cross-functional teams to deliver features on time&#10;• **Improved** application performance by 30% through code optimization'
																rows={4}
															/>
														</div>

														<div>
															<label className='block text-sm font-medium mb-1'>
																Skills Used
																(optional)
															</label>
															<Input
																value={
																	exp.skills?.join(
																		', '
																	) || ''
																}
																onChange={e =>
																	updateWorkExperience(
																		exp.id,
																		'skills',
																		e.target.value
																			.split(
																				','
																			)
																			.map(
																				s =>
																					s.trim()
																			)
																			.filter(
																				s =>
																					s !==
																					''
																			)
																	)
																}
																placeholder='React, TypeScript, Node.js, AWS...'
															/>
														</div>
													</div>
												</div>
											)
										)
									)}
								</CardContent>
							</Card>

							{/* Education */}
							<Card>
								<CardHeader>
									<div className='flex justify-between items-center'>
										<CardTitle>Education</CardTitle>
										<Button
											onClick={addEducation}
											size='sm'
											className='flex items-center gap-2'
										>
											<Plus className='w-4 h-4' />
											Add Education
										</Button>
									</div>
								</CardHeader>
								<CardContent className='space-y-6'>
									{resumeData.education.length === 0 ? (
										<div className='text-center py-8 text-gray-500'>
											<p>No education added yet.</p>
											<p className='text-sm'>
												Click "Add Education" to get
												started!
											</p>
										</div>
									) : (
										resumeData.education.map(
											(edu, index) => (
												<div
													key={edu.id}
													className='border-2 border-gray-100 rounded-lg p-6 relative bg-gray-50/50'
												>
													<div className='flex justify-between items-start mb-4'>
														<Badge variant='outline'>
															Education #
															{index + 1}
														</Badge>
														<Button
															onClick={() =>
																removeEducation(
																	edu.id
																)
															}
															size='sm'
															variant='destructive'
														>
															<Trash2 className='w-4 h-4' />
														</Button>
													</div>

													<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Institution *
															</label>
															<Input
																value={
																	edu.institution
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'institution',
																		e.target
																			.value
																	)
																}
																placeholder='Harvard University'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Degree *
															</label>
															<Input
																value={
																	edu.degree
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'degree',
																		e.target
																			.value
																	)
																}
																placeholder='Bachelor of Science'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Field of Study *
															</label>
															<Input
																value={
																	edu.field
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'field',
																		e.target
																			.value
																	)
																}
																placeholder='Computer Science'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																GPA (Optional)
															</label>
															<Input
																value={
																	edu.gpa ||
																	''
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'gpa',
																		e.target
																			.value
																	)
																}
																placeholder='3.8'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Start Date
															</label>
															<Input
																value={
																	edu.startDate
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'startDate',
																		e.target
																			.value
																	)
																}
																placeholder='2018'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																End Date
															</label>
															<Input
																value={
																	edu.endDate
																}
																onChange={e =>
																	updateEducation(
																		edu.id,
																		'endDate',
																		e.target
																			.value
																	)
																}
																placeholder='2022'
															/>
														</div>
													</div>
												</div>
											)
										)
									)}
								</CardContent>
							</Card>

							{/* Skills */}
							<Card>
								<CardHeader>
									<div className='flex justify-between items-center'>
										<div className='flex items-center gap-2'>
											<CardTitle>Skills</CardTitle>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant='ghost'
														size='sm'
													>
														<Lightbulb className='w-4 h-4' />
													</Button>
												</TooltipTrigger>
												<TooltipContent className='max-w-xs'>
													<div className='space-y-1'>
														<p className='font-semibold'>
															Writing Tips:
														</p>
														{WRITING_TIPS.skills.map(
															(tip, index) => (
																<p
																	key={index}
																	className='text-xs'
																>
																	• {tip}
																</p>
															)
														)}
													</div>
												</TooltipContent>
											</Tooltip>
										</div>
										<div className='flex gap-2'>
											<Select
												value={selectedIndustry}
												onValueChange={
													setSelectedIndustry
												}
											>
												<SelectTrigger className='w-48'>
													<SelectValue placeholder='Select industry' />
												</SelectTrigger>
												<SelectContent>
													{Object.keys(
														SKILL_SUGGESTIONS
													).map(industry => (
														<SelectItem
															key={industry}
															value={industry}
														>
															{industry}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														onClick={() =>
															addSuggestedSkills(
																SKILL_SUGGESTIONS[
																	selectedIndustry as keyof typeof SKILL_SUGGESTIONS
																]
															)
														}
														size='sm'
														variant='outline'
														className='flex items-center gap-2'
													>
														<Wand2 className='w-4 h-4' />
														Add Suggested
													</Button>
												</TooltipTrigger>
												<TooltipContent>
													Add common skills for{' '}
													{selectedIndustry}
												</TooltipContent>
											</Tooltip>
											<Button
												onClick={addSkill}
												size='sm'
												className='flex items-center gap-2'
											>
												<Plus className='w-4 h-4' />
												Add Skill
											</Button>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									{resumeData.skills.length === 0 ? (
										<div className='text-center py-8 text-gray-500'>
											<p>No skills added yet.</p>
											<p className='text-sm'>
												Add skills manually or use
												suggested skills for your
												industry!
											</p>
										</div>
									) : (
										<div className='flex flex-wrap gap-2'>
											{resumeData.skills.map(
												(skill, index) => (
													<div
														key={index}
														className='flex items-center gap-1'
													>
														<Badge
															variant='secondary'
															className='px-3 py-2 flex items-center gap-2'
														>
															<Input
																value={skill}
																onChange={e =>
																	updateSkill(
																		index,
																		e.target
																			.value
																	)
																}
																className='border-none p-0 h-auto bg-transparent text-sm min-w-0'
																style={{
																	width: `${Math.max(skill.length, 5)}ch`
																}}
																placeholder='Skill name'
															/>
															<Button
																onClick={() =>
																	removeSkill(
																		index
																	)
																}
																size='sm'
																variant='ghost'
																className='h-4 w-4 p-0 hover:bg-red-100'
															>
																<Trash2 className='w-3 h-3' />
															</Button>
														</Badge>
													</div>
												)
											)}
										</div>
									)}

									{resumeData.skills.filter(s => s.trim())
										.length < 3 && (
										<Alert className='mt-4'>
											<AlertCircle className='h-4 w-4' />
											<AlertDescription>
												Add at least 3 skills to improve
												your resume completeness score.
											</AlertDescription>
										</Alert>
									)}
								</CardContent>
							</Card>

							{/* Projects */}
							<Card>
								<CardHeader>
									<div className='flex justify-between items-center'>
										<CardTitle className='flex items-center gap-2'>
											<Code className='w-5 h-5' />
											Projects
											<Badge
												variant='outline'
												className='ml-2'
											>
												Optional
											</Badge>
										</CardTitle>
										<Button
											onClick={addProject}
											size='sm'
											className='flex items-center gap-2'
										>
											<Plus className='w-4 h-4' />
											Add Project
										</Button>
									</div>
								</CardHeader>
								<CardContent className='space-y-6'>
									{resumeData.projects.length === 0 ? (
										<div className='text-center py-8 text-gray-500'>
											<p>No projects added yet.</p>
											<p className='text-sm'>
												Showcase your work by adding
												projects!
											</p>
										</div>
									) : (
										resumeData.projects.map(
											(project, index) => (
												<div
													key={project.id}
													className='border-2 border-gray-100 rounded-lg p-6 relative bg-gray-50/50'
												>
													<div className='flex justify-between items-start mb-4'>
														<Badge variant='outline'>
															Project #{index + 1}
														</Badge>
														<Button
															onClick={() =>
																removeProject(
																	project.id
																)
															}
															size='sm'
															variant='destructive'
														>
															<Trash2 className='w-4 h-4' />
														</Button>
													</div>

													<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Project Name *
															</label>
															<Input
																value={
																	project.name
																}
																onChange={e =>
																	updateProject(
																		project.id,
																		'name',
																		e.target
																			.value
																	)
																}
																placeholder='My Awesome App'
															/>
														</div>
														<div>
															<label className='block text-sm font-medium mb-1'>
																Link (Optional)
															</label>
															<Input
																value={
																	project.link ||
																	''
																}
																onChange={e =>
																	updateProject(
																		project.id,
																		'link',
																		e.target
																			.value
																	)
																}
																placeholder='github.com/username/project'
															/>
														</div>
													</div>

													<div className='mb-4'>
														<label className='block text-sm font-medium mb-1'>
															Description *
														</label>
														<RichTextEditor
															value={
																project.description
															}
															onChange={value =>
																updateProject(
																	project.id,
																	'description',
																	value
																)
															}
															placeholder='Describe your project, what it does, and your role in building it. Use **bold** for emphasis and • bullet points for features:&#10;&#10;• **Built** a full-stack web application for task management&#10;• **Implemented** user authentication and real-time updates&#10;• **Deployed** on AWS with CI/CD pipeline'
															rows={5}
														/>
													</div>

													<div>
														<label className='block text-sm font-medium mb-1'>
															Technologies Used *
														</label>
														<Input
															value={project.technologies.join(
																', '
															)}
															onChange={e =>
																updateProject(
																	project.id,
																	'technologies',
																	e.target.value
																		.split(
																			','
																		)
																		.map(
																			t =>
																				t.trim()
																		)
																		.filter(
																			t =>
																				t !==
																				''
																		)
																)
															}
															placeholder='React, Node.js, MongoDB, AWS...'
														/>
													</div>
												</div>
											)
										)
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='preview'>
							<div className='space-y-4'>
								<div className='flex justify-between items-center'>
									<h2 className='text-2xl font-bold'>
										Resume Preview
									</h2>
									<div className='flex gap-2'>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													className='flex items-center gap-2'
													asChild
												>
													<button>
														<Download className='w-4 h-4' />
														Export
													</button>
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuItem
													onClick={downloadPDF}
												>
													<FileText className='w-4 h-4 mr-2' />
													Download PDF
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={exportHTML}
												>
													<FileCode className='w-4 h-4 mr-2' />
													Export HTML
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</div>
								<ResumePreview data={resumeData} />
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</TooltipProvider>
	)
}
