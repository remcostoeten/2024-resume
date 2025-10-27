import { TResumeData, TResumeSection } from "../../types/resume-types";
import { TEMPLATES } from "../../constants/resume-constants";
import { formatRichText } from "../../utils/resume-utils";
import { TemplateSelector } from "../resume-templates";

export type TProps = {
  data: TResumeData;
};

export function ResumePreview({ data }: TProps) {
  const template = TEMPLATES[data.template as keyof typeof TEMPLATES] || TEMPLATES['modern-professional'];

  // Use custom colors if available, otherwise fall back to template colors
  const primaryColor = data.customColors.primary || template.colors.primary;
  const secondaryColor = data.customColors.secondary || template.colors.secondary;
  const accentColor = data.customColors.accent || template.colors.accent;

  // Use custom fonts if available, otherwise fall back to default
  const bodyFont = data.customFonts.body || "Inter, sans-serif";
  const headingFont = data.customFonts.heading || "Inter, sans-serif";

  // Use custom spacing if available, otherwise fall back to default
  const sectionMargin = `${data.customSpacing.sectionMargin}rem`;
  const itemSpacing = `${data.customSpacing.itemSpacing}rem`;

  const sortedSections = data.sections.sort((a, b) => a.order - b.order);

  function renderSection(section: TResumeSection) {
    switch (section.type) {
      case "summary":
        return data.summary ? (
          <div key={section.id} className="mb-6" style={{ marginBottom: sectionMargin }}>
            <h3
              className="text-lg font-bold mb-3 border-b pb-1"
              style={{ color: primaryColor, borderColor: primaryColor, fontFamily: headingFont }}
            >
              {section.title}
            </h3>
            <div
              className="leading-relaxed prose prose-sm max-w-none"
              style={{ color: secondaryColor, fontFamily: bodyFont }}
              dangerouslySetInnerHTML={{ __html: formatRichText(data.summary) }}
            />
          </div>
        ) : null;

      case "experience":
        return data.workExperience.length > 0 ? (
          <div key={section.id} className="mb-6" style={{ marginBottom: sectionMargin }}>
            <h3
              className="text-lg font-bold mb-3 border-b pb-1"
              style={{ color: primaryColor, borderColor: primaryColor, fontFamily: headingFont }}
            >
              {section.title}
            </h3>
            {data.workExperience.map((exp) => (
              <div key={exp.id} className="mb-4" style={{ marginBottom: itemSpacing }}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold" style={{ color: primaryColor, fontFamily: headingFont }}>
                    {exp.position} - {exp.company}
                  </h4>
                  <span className="text-sm" style={{ color: secondaryColor, fontFamily: bodyFont }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-sm mb-2" style={{ color: secondaryColor, fontFamily: bodyFont }}>
                  {exp.location}
                </div>
                <div
                  className="text-sm leading-relaxed mb-2 prose prose-sm max-w-none"
                  style={{ color: secondaryColor, fontFamily: bodyFont }}
                  dangerouslySetInnerHTML={{ __html: formatRichText(exp.description) }}
                />
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                          fontFamily: bodyFont,
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
        ) : null;

      case "education":
        return data.education.length > 0 ? (
          <div key={section.id} className="mb-6" style={{ marginBottom: sectionMargin }}>
            <h3
              className="text-lg font-bold mb-3 border-b pb-1"
              style={{ color: primaryColor, borderColor: primaryColor, fontFamily: headingFont }}
            >
              {section.title}
            </h3>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3" style={{ marginBottom: itemSpacing }}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold" style={{ color: primaryColor, fontFamily: headingFont }}>
                      {edu.degree} in {edu.field}
                    </h4>
                    <div className="text-sm" style={{ color: secondaryColor, fontFamily: bodyFont }}>
                      {edu.institution}
                    </div>
                  </div>
                  <div className="text-right text-sm" style={{ color: secondaryColor, fontFamily: bodyFont }}>
                    <div>
                      {edu.startDate} - {edu.endDate}
                    </div>
                    {edu.gpa && <div>GPA: {edu.gpa}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null;

      case "skills":
        return data.skills.length > 0 ? (
          <div key={section.id} className="mb-6" style={{ marginBottom: sectionMargin }}>
            <h3
              className="text-lg font-bold mb-3 border-b pb-1"
              style={{ color: primaryColor, borderColor: primaryColor, fontFamily: headingFont }}
            >
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${secondaryColor}20`,
                    color: secondaryColor,
                    fontFamily: bodyFont,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null;

      case "projects":
        return data.projects.length > 0 ? (
          <div key={section.id} className="mb-6" style={{ marginBottom: sectionMargin }}>
            <h3
              className="text-lg font-bold mb-3 border-b pb-1"
              style={{ color: primaryColor, borderColor: primaryColor, fontFamily: headingFont }}
            >
              {section.title}
            </h3>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-4" style={{ marginBottom: itemSpacing }}>
                <h4 className="font-semibold mb-1" style={{ color: primaryColor, fontFamily: headingFont }}>
                  {project.name}
                  {project.link && (
                    <span className="text-sm ml-2">
                      (
                      <a
                        href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: accentColor, fontFamily: bodyFont }}
                        className="hover:underline"
                      >
                        {project.link}
                      </a>
                      )
                    </span>
                  )}
                </h4>
                <div
                  className="text-sm mb-2 prose prose-sm max-w-none"
                  style={{ color: secondaryColor, fontFamily: bodyFont }}
                  dangerouslySetInnerHTML={{ __html: formatRichText(project.description) }}
                />
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        color: accentColor,
                        fontFamily: bodyFont,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null;

      default:
        return null;
    }
  }

  return <TemplateSelector template={template} resumeData={data} />;
}
