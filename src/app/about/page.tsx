import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { experiences, personalInfo, education } from "@/features/resume/data";
import Experience from "@/features/resume/components/experience";
import Section from "@/features/resume/components/section";
import ThemeToggle from "@/components/theme-toggle";
import Institution from "@/features/resume/components/institution";

export default function About() {
  return (
    <div className="mx-4 my-4 flex h-screen flex-col items-center justify-start gap-4 sm:mx-0 sm:my-0 sm:justify-center sm:gap-6">
      <ThemeToggle />
      <Card>
        <CardHeader className="items-center justify-center text-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <p className="text-muted-foreground text-sm">{personalInfo.title}</p>
          <Link href={`mailto:${personalInfo.email}`} className="text-sm">
            {personalInfo.email}
          </Link>
        </CardHeader>
        <CardContent className="flex max-w-[800px] flex-col gap-6 px-4 sm:min-w-lg sm:px-8">
          <Section title="Experience">
            {experiences.map((experience) => (
              <Experience key={experience.company} experience={experience} />
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
