import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GithubIcon, GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectsTabsComponent from "@/components/project-tabs";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";

export default function Page() {
  return (
    <main className="container relative p-4 mx-auto overflow-auto scroll-my-12 md:p-16 print:p-12 ">
      <section className="w-full max-w-2xl mx-auto space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md font-mono text-sm text-pretty text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="items-center max-w-md font-mono text-xs text-pretty text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}g pu
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex pt-1 font-mono text-sm gap-x-2 text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email && (
                <Button className="size-8" variant="social" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="w-4 size-4" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button className="size-8" variant="social" size="icon" asChild>
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              )}
              <Button className="size-8" variant="social" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/remco-stoeten/"
                  target="_blank"
                >
                  <LinkedInIcon width={20} />
                </Link>
              </Button>
              <Button className="size-8" variant="social" size="icon" asChild>
                <Link href="https://github.com/remcostoeten" target="_blank">
                  <GithubIcon width={20} />
                </Link>
              </Button>
            </div>
            <div className="flex-col hidden font-mono text-sm gap-x-1 text-muted-foreground print:flex">
              {RESUME_DATA.contact.email && (
                <Button variant="social">
                  {" "}
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button variant="social">
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src="avatar.jpg" />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm text-pretty text-muted-foreground">
              {RESUME_DATA.summary}
            </p>
            <p className="font-mono text-sm text-pretty text-muted-foreground">
              {RESUME_DATA.summarytwo}
            </p>
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between text-base gap-x-2">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none gap-x-1">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="text-xs align-middle"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm text-gray-500 tabular-nums">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between text-base gap-x-2">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm text-gray-500 tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill, index) => {
              return <Badge key={index}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <p>
            Switch between my hobby projects and projects I've made or
            contributed to at work. There are a lot of private/client projects
            which I can't share for obvious reasons.
          </p>
          <ProjectsTabsComponent />
        </Section>
      </section>
      <div className="!no-print absolute right-0 top-0">
        <ThemeToggle />
      </div>
      <div className="relative">
        <CommandMenu
          links={[
            {
              url: RESUME_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink, index) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
              key: index,
            })),
          ]}
        />
      </div>
    </main>
  );
}
