import type { Experience, Position } from "@/features/resume/types";
import {
  getMonthsAtCompanyString,
  getDatesAndMonthsAtPosition,
} from "@/features/resume/lib/experience-utils";

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-md font-bold">{experience.company}</h2>
      <p className=" text-sm">
        {getMonthsAtCompanyString(experience.positions)}
      </p>
      {experience.positions.map((position) => (
        <Position key={position.title} position={position} />
      ))}
    </div>
  );
}

function Position({ position }: { position: Position }) {
  return (
    <div>
      <h3 className=" text-sm font-semibold">{position.title}</h3>
      <p className="text-muted-foreground text-sm">
        {getDatesAndMonthsAtPosition(position)}
      </p>
      <ul className="list-disc py-1 pl-4 text-sm">
        {position.bullets?.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
