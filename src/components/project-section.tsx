"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  title?: string;
  techStack?: string[];
  description?: string;
  logo?: string;
  href?: string;
  work?: boolean;
}

type ProjectType = "work" | "personal";

export function ProjectSection({ projects }: { projects: Project[] }) {
  const [showAllHobbyProjects, setShowAllHobbyProjects] = useState(false);
  const [showAllWorkProjects, setShowAllWorkProjects] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState<ProjectType>("personal");
  
  const workProjects = projects.filter((project) => project.work);
  const hobbyProjects = projects.filter((project) => !project.work);
  const initialHobbyProjectCount = 6;
  const initialWorkProjectCount = 6;
  
  const visibleHobbyProjects = showAllHobbyProjects 
    ? hobbyProjects 
    : hobbyProjects.slice(0, initialHobbyProjectCount);

  const visibleWorkProjects = showAllWorkProjects
    ? workProjects
    : workProjects.slice(0, initialWorkProjectCount);

  const renderProjects = (projectList: Project[]) => {
    return projectList.map((project, index) => (
      <Card key={index} className="flex flex-col">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <a className="hover:underline" href={project.href} target="_blank">
                {project.title}
              </a>
            </h3>
          </div>
        </CardHeader>
        <CardContent className="mt-2 text-xs flex-grow">
          {project.description}
          <div className="mt-2 flex flex-wrap gap-1">
            {project.techStack?.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveProjectType("personal")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeProjectType === "personal" 
              ? "text-primary border-b-2 border-primary -mb-[2px]" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          Personal Projects ({hobbyProjects.length})
        </button>
        <button
          onClick={() => setActiveProjectType("work")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeProjectType === "work" 
              ? "text-primary border-b-2 border-primary -mb-[2px]" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          Work Projects ({workProjects.length})
        </button>
      </div>
      
      {activeProjectType === "work" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {renderProjects(visibleWorkProjects)}
          </div>
          {workProjects.length > initialWorkProjectCount && (
            <button
              onClick={() => setShowAllWorkProjects(!showAllWorkProjects)}
              className="mt-4 text-sm text-primary hover:text-primary/80 underline decoration-dashed underline-offset-4"
            >
              {showAllWorkProjects ? "Show Less" : `Show ${workProjects.length - initialWorkProjectCount} More Work Projects...`}
            </button>
          )}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {renderProjects(visibleHobbyProjects)}
          </div>
          {hobbyProjects.length > initialHobbyProjectCount && (
            <button
              onClick={() => setShowAllHobbyProjects(!showAllHobbyProjects)}
              className="mt-4 text-sm text-primary hover:text-primary/80 underline decoration-dashed underline-offset-4"
            >
              {showAllHobbyProjects ? "Show Less" : `Show ${hobbyProjects.length - initialHobbyProjectCount} More Personal Projects...`}
            </button>
          )}
        </div>
      )}
    </div>
  );
} 
