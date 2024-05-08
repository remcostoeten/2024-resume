"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectCard } from "./project-card";
import { useState } from "react";

export default function ProjectTabs() {
  const [filter, setFilter] = useState("");
  const professionalProjects = RESUME_DATA.projects.filter(
    (project) =>
      project.work &&
      (project.title.toLowerCase().includes(filter.toLowerCase()) ||
        (project.techStack &&
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase()),
          ))),
  );
  const hobbyProjects = RESUME_DATA.projects.filter(
    (project) =>
      !project.work &&
      (project.title.toLowerCase().includes(filter.toLowerCase()) ||
        (project.techStack &&
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase()),
          ))),
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter projects..."
        className="mb-4"
      />
      <Tabs defaultValue="hobby" className="w-full">
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
                tags={project.techStack}
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
                tags={project.techStack}
                href={project.href}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
