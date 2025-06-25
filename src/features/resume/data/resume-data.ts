import type { Experience } from "@/features/resume/types";

export const personalInfo = {
  name: "Shawn Rodgers",
  title: "Software Engineer",
  email: "me@bentsignal.com",
};

export const experiences: Experience[] = [
  {
    company: "Gardener's Supply Company",
    positions: [
      {
        title: "Software Engineer",
        startDate: new Date("2024-04-02"),
        bullets: [
          "Impelmented features and bug fixes across the web stack",
          "Lead the redesign of the header & navigation",
          "Moved the team from writing class components in javascript to functional components in typescript",
          "Created an automated service to feed data from the data lake into a 3rd party marketing platform",
        ],
      },
      {
        title: "Software Engineer - Intern",
        startDate: new Date("2022-06-02"),
        endDate: new Date("2022-08-02"),
        bullets: [
          "Designed & developed a web application using the MERN stack",
          "Stored documents in Azure's Cosmos DB",
          "Deployed the application as an Azure Web App",
        ],
      },
    ],
  },
];
