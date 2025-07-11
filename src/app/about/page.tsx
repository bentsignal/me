import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  experiences,
  personalInfo,
  education,
  projects,
} from "@/features/resume/data";
import Experience from "@/features/resume/components/experience";
import Section from "@/features/resume/components/section";
import ThemeToggle from "@/components/theme-toggle";
import Institution from "@/features/resume/components/institution";
import Project from "@/features/resume/components/project";
import "@/features/resume/styles/print.css";

export default function About() {
  return (
    <div className="mx-4 my-12 flex flex-col items-center justify-start gap-4 sm:gap-6 print:m-0">
      <ThemeToggle />
      <Card className="print:border-none print:shadow-none">
        <CardHeader className="items-center justify-center text-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <p className="text-muted-foreground text-sm">{personalInfo.title}</p>
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-sm font-semibold"
          >
            {personalInfo.email}
          </Link>
        </CardHeader>
        <CardContent className="flex max-w-[800px] flex-col gap-6 px-4 sm:min-w-lg sm:px-8">
          <Section title="Experience">
            {experiences.map((experience) => (
              <Experience key={experience.company} experience={experience} />
            ))}
          </Section>
          <Section title="Projects">
            {projects.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </Section>
          <Section title="Education">
            {education.map((institution) => (
              <Institution key={institution.name} institution={institution} />
            ))}
          </Section>
        </CardContent>
      </Card>
    </div>
  );
}
