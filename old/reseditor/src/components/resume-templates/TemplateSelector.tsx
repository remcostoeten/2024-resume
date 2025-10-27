import type { TResumeData } from "../../types/resume-types";
import { ModernProfessionalLayout } from "./ModernProfessionalLayout";
import { CreativeDesignerLayout } from "./CreativeDesignerLayout";

type TProps = {
  template: string;
  resumeData: TResumeData;
};

export function TemplateSelector({ template, resumeData }: TProps) {
  function renderTemplate() {
    switch (template) {
      case "modern-professional":
        return <ModernProfessionalLayout resumeData={resumeData} />;
      case "creative-designer":
        return <CreativeDesignerLayout resumeData={resumeData} />;
      default:
        return <ModernProfessionalLayout resumeData={resumeData} />;
    }
  }

  return (
    <div className="template-selector">
      {renderTemplate()}
    </div>
  );
}
