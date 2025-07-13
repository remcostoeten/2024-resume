import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ResumePreview } from "../feature/ResumePreview";
import { PersonalInfoForm } from "../atomic/PersonalInfoForm";
import { SummaryEditor } from "../atomic/SummaryEditor";
import { WorkExperienceForm } from "../atomic/WorkExperienceForm";
import { EducationForm } from "../atomic/EducationForm";
import { SkillsManager } from "../atomic/SkillsManager";
import { ProjectForm } from "../atomic/ProjectForm";
import { TemplateSelector } from "../atomic/TemplateSelector";
import { CustomizationPanel } from "../atomic/CustomizationPanel";
import { SectionOrderManager } from "../atomic/SectionOrderManager";
import { Edit3, Eye, User, FileText, Briefcase, GraduationCap, Code, Wrench, Palette, Settings } from "lucide-react";
import type { TResumeData } from "../../types/resume-types";

type TProps = {
  resumeData: TResumeData;
  dispatch: (action: any) => void;
};

export function EditorTabs({ resumeData, dispatch }: TProps) {
  const [activeTab, setActiveTab] = useState("personal");

  function handleResumeDataUpdate(newData: TResumeData) {
    dispatch({ type: 'UPDATE', payload: newData });
  }

  function handlePersonalInfoUpdate(personalInfo: any) {
    dispatch({ type: 'UPDATE', payload: { personalInfo } });
  }

  function handleSummaryUpdate(summary: string) {
    dispatch({ type: 'UPDATE', payload: { summary } });
  }

  function handleWorkExperienceUpdate(workExperience: any[]) {
    dispatch({ type: 'UPDATE', payload: { workExperience } });
  }

  function handleEducationUpdate(education: any[]) {
    dispatch({ type: 'UPDATE', payload: { education } });
  }

  function handleSkillsUpdate(skills: string[]) {
    dispatch({ type: 'UPDATE', payload: { skills } });
  }

  function handleProjectsUpdate(projects: any[]) {
    dispatch({ type: 'UPDATE', payload: { projects } });
  }

  function handleTemplateUpdate(template: string) {
    dispatch({ type: 'UPDATE', payload: { template } });
  }

  function handleCustomColorsUpdate(customColors: any) {
    dispatch({ type: 'UPDATE', payload: { customColors } });
  }

  function handleCustomFontsUpdate(customFonts: any) {
    dispatch({ type: 'UPDATE', payload: { customFonts } });
  }

  function handleCustomSpacingUpdate(customSpacing: any) {
    dispatch({ type: 'UPDATE', payload: { customSpacing } });
  }

  function handleSectionsUpdate(sections: any[]) {
    dispatch({ type: 'UPDATE', payload: { sections } });
  }

  return (
    <Tabs defaultValue="edit" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="edit" className="flex items-center gap-2">
          <Edit3 className="w-4 h-4" />
          Edit Resume
        </TabsTrigger>
        <TabsTrigger value="preview" className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Preview
        </TabsTrigger>
      </TabsList>

      <TabsContent value="edit" className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-6">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Summary
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="template" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Template
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <PersonalInfoForm
              personalInfo={resumeData.personalInfo}
              onUpdate={handlePersonalInfoUpdate}
            />
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            <SummaryEditor
              summary={resumeData.summary}
              onUpdate={handleSummaryUpdate}
            />
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <WorkExperienceForm
              workExperience={resumeData.workExperience}
              onUpdate={handleWorkExperienceUpdate}
            />
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <EducationForm
              education={resumeData.education}
              onUpdate={handleEducationUpdate}
            />
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <SkillsManager
              skills={resumeData.skills}
              onUpdate={handleSkillsUpdate}
            />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectForm
              projects={resumeData.projects}
              onUpdate={handleProjectsUpdate}
            />
          </TabsContent>

          <TabsContent value="template" className="space-y-6">
            <TemplateSelector
              template={resumeData.template}
              onUpdate={handleTemplateUpdate}
            />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <CustomizationPanel
              customColors={resumeData.customColors}
              customFonts={resumeData.customFonts}
              customSpacing={resumeData.customSpacing}
              onColorsChange={handleCustomColorsUpdate}
              onFontsChange={handleCustomFontsUpdate}
              onSpacingChange={handleCustomSpacingUpdate}
            />
            <SectionOrderManager
              sections={resumeData.sections}
              onUpdate={handleSectionsUpdate}
            />
          </TabsContent>
        </Tabs>
      </TabsContent>

      <TabsContent value="preview" className="space-y-6">
        <ResumePreview
          resumeData={resumeData}
          onUpdate={handleResumeDataUpdate}
        />
      </TabsContent>
    </Tabs>
  );
}
