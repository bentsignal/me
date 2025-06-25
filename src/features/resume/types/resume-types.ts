export interface Experience {
  company: string;
  positions: Position[];
}

export interface Position {
  title: string;
  startDate: Date;
  endDate?: Date;
  bullets?: string[];
}
