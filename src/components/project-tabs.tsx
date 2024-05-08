"use client";
import { RESUME_DATA } from "@/data/resume-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectCard } from "./project-card";

export default function ProjectTabs() {
  const professionalProjects = RESUME_DATA.projects.filter(
    (project) => project.work,
  );

  const hobbyProjects = RESUME_DATA.projects.filter((project) => !project.work);

  return (
    <div>
      <Tabs defaultValue="hobby" className="no-print w-full">
        <TabsList>
          <TabsTrigger value="professionally">Professionally</TabsTrigger>
          <TabsTrigger value="hobby">Hobby</TabsTrigger>
        </TabsList>

        <TabsContent value="professionally">
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
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
        </TabsContent>

        <TabsContent value="hobby">
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
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
        </TabsContent>
      </Tabs>

      {/* Print view */}
      <div className="print:block hidden">
        <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
          {RESUME_DATA.projects.map((project, index) => (
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
    </div>
  );
}