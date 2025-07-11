import type { Experience } from "@/features/resume/types";
import { getDatesAndMonthsFromRange } from "@/lib/time-utils";
import ResumeItem from "@/features/resume/components/resume-item";

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <ResumeItem
      title={experience.company}
      subtitle={experience.subtitle}
      subItems={experience.positions.map((position) => ({
        title: position.title,
        subtitle: getDatesAndMonthsFromRange(position.dates),
        bullets: position.bullets,
      }))}
    />
  );
}
