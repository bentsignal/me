import {
  formatDate,
  getTotalTimeString,
  monthsBetweenDates,
} from "@/lib/time-utils";
import { Position } from "@/features/resume/types";

// get the total number of months worked at a company, across multiple positions
export function getMonthsAtCompany(positions: Position[]) {
  return positions.reduce((acc, position) => {
    return (
      acc +
      monthsBetweenDates(position.startDate, position.endDate ?? new Date())
    );
  }, 0);
}

// get the number of months worked at a position
export function getMonthsAtPosition(position: Position) {
  return monthsBetweenDates(position.startDate, position.endDate ?? new Date());
}

// get a string representation of the total time worked at a company
// e.g. "1 year 3 months"
export function getMonthsAtCompanyString(positions: Position[]) {
  const months = getMonthsAtCompany(positions);
  return getTotalTimeString(months);
}

// get a string representation of the time worked at a position
// e.g. "1 year 3 months"
export function getMonthsAtPositionString(position: Position) {
  const months = getMonthsAtPosition(position);
  return getTotalTimeString(months);
}

// get a string representation of the dates and months worked at a position
// e.g. "Apr 2024 - Present · 1 year 3 months"
export function getDatesAndMonthsAtPosition(position: Position) {
  return `${formatDate(position.startDate)} - ${
    position.endDate ? formatDate(position.endDate) : "Present"
  } · ${getMonthsAtPositionString(position)}`;
}
