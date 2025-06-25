import type { Experience, Position } from "@/features/resume/types";
import { getDatesAndMonthsFromRange } from "@/lib/time-utils";

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-md font-bold">{experience.company}</h2>
      <p className="text-muted-foreground text-sm">{experience.location}</p>
      <div className="border-muted-foreground my-2 flex flex-col gap-2 border-l-1 pl-4">
        {experience.positions.map((position) => (
          <Position key={position.title} position={position} />
        ))}
      </div>
    </div>
  );
}

function Position({ position }: { position: Position }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{position.title}</h3>
      <p className="text-muted-foreground text-sm">
        {getDatesAndMonthsFromRange(position.dates)}
      </p>
      <ul className="list-disc py-1 pl-4 text-sm">
        {position.bullets?.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
