import type { Experience } from "@/features/resume/types";

export const experiences: Experience[] = [
  {
    company: "Gardener's Supply Company",
    positions: [
      {
        title: "Software Engineer",
        startDate: new Date("2024-04-02"),
        bullets: [
          "Impelmented features and fixed bugs across the web stack",
          "Lead the redesign of the mobile & header navigation",
          `Spearheaded the transition of the React codebase from javascript
           class components to typescript functional components`,
        ],
      },
      {
        title: "Software Engineer Intern",
        startDate: new Date("2022-06-02"),
        endDate: new Date("2022-08-02"),
        bullets: [
          "Designed & developed a full stack web application using the MERN stack",
          "Stored documents in Azure's Cosmos DB",
          "Deployed the application to Azure's App Service",
        ],
      },
    ],
  },
];
