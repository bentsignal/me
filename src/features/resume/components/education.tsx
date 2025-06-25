import type { Institution, Program } from "@/features/resume/types";
import { getDatesAndMonthsFromRange } from "@/lib/time-utils";

export default function Institution({
  institution,
}: {
  institution: Institution;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="text-md font-bold">{institution.name}</h2>
      <p className="text-muted-foreground text-sm">{institution.location}</p>
      <div className="border-muted-foreground my-2 flex flex-col gap-2 border-l-1 pl-4">
        {institution.programs.map((program) => (
          <Program key={program.degree} program={program} />
        ))}
      </div>
    </div>
  );
}

function Program({ program }: { program: Program }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-semibold">
        {program.degree}
        {program.degreeAbbreviation && ` - ${program.degreeAbbreviation}`}
        {program.major && `, ${program.major}`}
      </h3>
      <p className="text-muted-foreground text-sm">
        {getDatesAndMonthsFromRange(program.dates)}
      </p>
      <ul className="list-disc py-1 pl-4 text-sm">
        {program.bullets?.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
