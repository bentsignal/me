import type { Experience, Institution, Project } from "@/features/resume/types";

export const personalInfo = {
  name: "Shawn Rodgers",
  title: "Software Engineer",
  email: "shawn@bsx.sh",
};

export const experiences: Experience[] = [
  {
    company: "Gardener's Supply Company",
    subtitle: "Burlington, VT",
    positions: [
      {
        title: "Software Engineer",
        dates: {
          startDate: new Date("2024-04-02"),
        },
        bullets: [
          "Implemented features and bug fixes across the web stack (React and .NET)",
          "Led the redesign of the header & navigation",
          `Transitioned the team from writing class components in JavaScript, to
          functional components in TypeScript, introducing type safety to the frontend`,
          `Led the upgrade from React 15 to 18, allowing us to use hooks, and benefit from 
          the inherent performance gains of concurrent rendering`,
        ],
      },
      {
        title: "Software Engineer - Intern",
        dates: {
          startDate: new Date("2022-06-02"),
          endDate: new Date("2022-08-02"),
        },
        bullets: [
          "Designed & developed a customer facing application using the MERN stack",
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
          "Awarded 1st Place in the Advanced Machine Learning bracket at the 2022 UVM CS Fair",
          "Awarded 2nd Place in the Beginner Web Development bracket at the 2019 UVM CS Fair",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "SYNQ",
    url: "https://www.synq.cc",
    role: "Sole Developer",
    dates: {
      startDate: new Date("2024-05-02"),
    },
    description:
      "A mobile app for users to modify, share, and listen to their audio files",
    bullets: [
      "Built with React Native & Expo",
      "1000+ downloads on the App Store",
      "50+ premium subscribers",
    ],
  },
  {
    name: "QBE",
    url: "https://www.qbe.sh",
    role: "Sole Developer",
    dates: {
      startDate: new Date("2025-06-02"),
    },
    description: "An AI chat app built for the Web",
    bullets: [
      "v0 completed in 10 days for a hackathon hosted by t3.gg",
      "Built with Next.js & Convex, deployed to Vercel",
      "Leverages models from frontier providers such as OpenAI, Google, and Anthropic",
      "Driven by an agent that can search the web, analyze files, retrieve weather data, and more",
    ],
  },
];
