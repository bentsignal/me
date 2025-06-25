import type { Project } from "@/features/resume/types";
import ResumeItem from "@/features/resume/components/resume-item";
import { getDatesAndMonthsFromRange } from "@/lib/time-utils";

export default function Project({ project }: { project: Project }) {
  return (
    <ResumeItem
      title={project.name}
      subtitle={project.url}
      subItems={[
        {
          title: project.role,
          subtitle: getDatesAndMonthsFromRange(project.dates),
          description: project.description,
          bullets: project.bullets,
        },
      ]}
    />
  );
}
