import type { DateRange } from "@/types";

export interface Experience {
  company: string;
  location: string;
  positions: Position[];
}

export interface Position {
  title: string;
  dates: DateRange;
  bullets?: string[];
}

export interface Program {
  degree: string;
  dates: DateRange;
  degreeAbbreviation?: string;
  major?: string;
  bullets?: string[];
}

export interface Institution {
  name: string;
  location: string;
  programs: Program[];
}

export interface Project {
  name: string;
  url: string;
  role: string;
  dates: DateRange;
  description: string;
  bullets: string[];
}
