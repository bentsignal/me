import type { DateRange } from "@/types";

// format a date to a string like "Apr 2024"
export const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// get a string representation of a date range, e.g. "Apr 2024 - Present"
export function getDateRangeString(dates: DateRange) {
  return `${formatDate(dates.startDate)} - ${
    dates.endDate ? formatDate(dates.endDate) : "Present"
  }`;
}

// get the number of months between two dates
export function monthsBetweenDates(dates: DateRange): number {
  const { startDate, endDate } = dates;
  const start = startDate;
  const end = endDate ?? new Date();
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  let diff = years * 12 + months;
  if (end.getDate() >= start.getDate()) {
    diff += 1;
  }
  return diff;
}

// get the total number of months across a list of date ranges
export const sumMonthsAcrossRanges = (ranges: DateRange[]): number => {
  return ranges.reduce((acc, range) => acc + monthsBetweenDates(range), 0);
};

// get a string representation of the total time, e.g. "1 year 3 months"
export function getTotalYearsAndMonthsString(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const yearsString = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthsString =
    remainingMonths > 0
      ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
      : "";
  return `${yearsString} ${monthsString}`.trim();
}

// get dates and total time from range
export function getDatesAndMonthsFromRange(dates: DateRange) {
  const months = monthsBetweenDates(dates);
  const monthsString = getTotalYearsAndMonthsString(months);
  return `${getDateRangeString(dates)} · ${monthsString}`;
}
