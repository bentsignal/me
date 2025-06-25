import type { Experience, Institution } from "@/features/resume/types";

export const personalInfo = {
  name: "Shawn Rodgers",
  title: "Software Engineer",
  email: "me@bentsignal.com",
};

export const experiences: Experience[] = [
  {
    company: "Gardener's Supply Company",
    location: "Burlington, VT",
    positions: [
      {
        title: "Software Engineer",
        dates: {
          startDate: new Date("2024-04-02"),
        },
        bullets: [
          "Impelmented features and bug fixes across the web stack",
          "Lead the redesign of the header & navigation",
          "Moved the team from writing class components in javascript to functional components in typescript",
          "Created an automated service to feed data from the data lake into a 3rd party marketing platform",
        ],
      },
      {
        title: "Software Engineer - Intern",
        dates: {
          startDate: new Date("2022-06-02"),
          endDate: new Date("2022-08-02"),
        },
        bullets: [
          "Designed & developed a web application using the MERN stack",
          "Stored documents in Azure's Cosmos DB",
          "Deployed the application as an Azure Web App",
        ],
      },
    ],
  },
];

export const education: Institution[] = [
  {
    name: "University of Vermont",
    location: "Burlington, VT",
    programs: [
      {
        degree: "Bachelor of Science",
        degreeAbbreviation: "BS",
        major: "Computer Science",
        dates: {
          startDate: new Date("2019-09-02"),
          endDate: new Date("2023-08-02"),
        },
        bullets: [
          "Awarded 1st Place in the Advanced Machine Learning bracket at the UVM CS Fair 2022",
          "Awarded 2nd Place in the Beginner Web Development bracket at the UVM CS Fair 2019",
        ],
      },
    ],
  },
];
