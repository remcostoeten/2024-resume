import type { TResumeData } from "../../types/resume-types";

type TProps = {
  resumeData: TResumeData;
};

export function ModernProfessionalLayout({ resumeData }: TProps) {
  const { personalInfo, summary, workExperience, education, skills, projects, customColors, customFonts, customSpacing } = resumeData;

  return (
    <div 
      className="resume-template modern-professional max-w-4xl mx-auto bg-white shadow-lg"
      style={{
        fontFamily: customFonts.body,
        color: '#333',
        lineHeight: '1.6'
      }}
    >
      <header className="resume-header p-8 border-b-2" style={{ borderColor: customColors.primary }}>
        <div className="text-center">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ 
              fontFamily: customFonts.heading,
              color: customColors.primary 
            }}
          >
            {personalInfo.name}
          </h1>
          <h2 
            className="text-xl mb-4"
            style={{ color: customColors.secondary }}
          >
            {personalInfo.title}
          </h2>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
            <span>{personalInfo.email}</span>
            <span>•</span>
            <span>{personalInfo.phone}</span>
            <span>•</span>
            <span>{personalInfo.location}</span>
            {personalInfo.website && (
              <>
                <span>•</span>
                <a href={personalInfo.website} className="hover:underline" style={{ color: customColors.accent }}>
                  {personalInfo.website}
                </a>
              </>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="text-sm hover:underline" style={{ color: customColors.accent }}>
                LinkedIn
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} className="text-sm hover:underline" style={{ color: customColors.accent }}>
                GitHub
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="resume-content p-8">
        {summary && (
          <section className="mb-8" style={{ marginBottom: `${customSpacing.sectionMargin}px` }}>
            <h3 
              className="text-2xl font-bold mb-4 border-b-2 pb-2"
              style={{ 
                fontFamily: customFonts.heading,
                color: customColors.primary,
                borderColor: customColors.primary
              }}
            >
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {workExperience.length > 0 && (
          <section className="mb-8" style={{ marginBottom: `${customSpacing.sectionMargin}px` }}>
            <h3 
              className="text-2xl font-bold mb-4 border-b-2 pb-2"
              style={{ 
                fontFamily: customFonts.heading,
                color: customColors.primary,
                borderColor: customColors.primary
              }}
            >
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <div 
                  key={work.id} 
                  className="work-item"
                  style={{ marginBottom: `${customSpacing.itemSpacing}px` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: customColors.secondary }}>
                        {work.position}
                      </h4>
                      <p className="text-gray-600 font-medium">{work.company} • {work.location}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {work.startDate} - {work.endDate}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-2">{work.description}</p>
                  {work.skills && work.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {work.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 text-xs rounded-full"
                          style={{ 
                            backgroundColor: customColors.accent + '20',
                            color: customColors.accent
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-8" style={{ marginBottom: `${customSpacing.sectionMargin}px` }}>
            <h3 
              className="text-2xl font-bold mb-4 border-b-2 pb-2"
              style={{ 
                fontFamily: customFonts.heading,
                color: customColors.primary,
                borderColor: customColors.primary
              }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="education-item"
                  style={{ marginBottom: `${customSpacing.itemSpacing}px` }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: customColors.secondary }}>
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                    </div>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-8" style={{ marginBottom: `${customSpacing.sectionMargin}px` }}>
            <h3 
              className="text-2xl font-bold mb-4 border-b-2 pb-2"
              style={{ 
                fontFamily: customFonts.heading,
                color: customColors.primary,
                borderColor: customColors.primary
              }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full font-medium"
                  style={{ 
                    backgroundColor: customColors.primary + '20',
                    color: customColors.primary
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mb-8" style={{ marginBottom: `${customSpacing.sectionMargin}px` }}>
            <h3 
              className="text-2xl font-bold mb-4 border-b-2 pb-2"
              style={{ 
                fontFamily: customFonts.heading,
                color: customColors.primary,
                borderColor: customColors.primary
              }}
            >
              Projects
            </h3>
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-item"
                  style={{ marginBottom: `${customSpacing.itemSpacing}px` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold" style={{ color: customColors.secondary }}>
                      {project.name}
                    </h4>
                    {project.link && (
                      <a 
                        href={project.link}
                        className="text-sm hover:underline"
                        style={{ color: customColors.accent }}
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: customColors.secondary + '20',
                          color: customColors.secondary
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
