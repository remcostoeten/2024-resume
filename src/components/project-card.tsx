import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Link2 } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
}

export function ProjectCard({ title, description, tags, href }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <div className=" font-mono text-xs underline print:visible">
            <a
              href={href}
              target="_blank"
              className="inline-flex items-center gap-1 hover:underline"
            >
              {title}
            </a>
          </div>

          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
