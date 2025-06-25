export const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// get the number of months between two dates
export function monthsBetweenDates(start: Date, end: Date): number {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  let diff = years * 12 + months;
  if (end.getDate() >= start.getDate()) {
    diff += 1;
  }
  return diff;
}

// get the total number of months between a list of dates
export function sumMonthsBetweenTuples(dateTuples: [Date, Date][]): number {
  let totalMonths = 0;
  for (const [start, end] of dateTuples) {
    totalMonths += monthsBetweenDates(start, end);
  }
  return totalMonths;
}

// get a string representation of the total time, e.g. "1 year 3 months"
export function getTotalTimeString(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const yearsString = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthsString =
    remainingMonths > 0
      ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
      : "";
  return `${yearsString} ${monthsString}`.trim();
}
