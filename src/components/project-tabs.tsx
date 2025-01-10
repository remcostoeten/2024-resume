"use client";
import { RESUME_DATA } from "@/data/resume-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectCard } from "./project-card";

export default function ProjectTabs() {
  const professionalProjects = RESUME_DATA.projects.filter(
    (project) => project.work === true
  );

  const hobbyProjects = RESUME_DATA.projects.filter(
    (project) => !project.work
  );

  return (
    <div>
      <Tabs defaultValue="hobby" className="no-print w-full">
        <TabsList>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="hobby">Hobby</TabsTrigger>
        </TabsList>

        <TabsContent value="professional">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground italic">
              Note: Most professional projects are not publicly shareable due to NDAs and client confidentiality.
            </p>
            <div className="mx-1 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {professionalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  skill={project.techStack}
                  href={project.href}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hobby">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground italic">
              Note: This is just a small selection of my projects. I&apos;m always building new things - check out my <a href="https://github.com/remcostoeten" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">GitHub</a> for my latest work and works in progress.
            </p>
            <div className="mx-1 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {hobbyProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  skill={project.techStack}
                  href={project.href}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
