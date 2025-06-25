import type { Institution } from "@/features/resume/types";
import { getDatesAndMonthsFromRange } from "@/lib/time-utils";
import ResumeItem from "@/features/resume/components/resume-item";

export default function Institution({
  institution,
}: {
  institution: Institution;
}) {
  return (
    <ResumeItem
      title={institution.name}
      subtitle={institution.location}
      subItems={institution.programs.map((program) => ({
        title: program.degree,
        subtitle: getDatesAndMonthsFromRange(program.dates),
        bullets: program.bullets,
      }))}
    />
  );
}
