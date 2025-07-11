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
          "Implemented features and bug fixes across the web stack",
          `Transitioned the team from writing class components in javascript to
          functional components in typescript, introducing type safety to the frontend`,
          "Led the upgrade from React 15 to 18, allowing us to finally leverage the use of hooks",
          "Led the redesign of the header & navigation on mobile",
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
    description: "An AI chat app built for Web & XR",
    bullets: [
      "Delivers complementary 2D & 3D interfaces for LLM interaction",
      "v0 completed in 10 days for a hackathon hosted by t3.gg",
      "Built with Next.js, deployed to Vercel",
      "Leverages models from foundational providers such as OpenAI, Google, and Anthropic",
      "Driven by custom agents that can perform tasks such as searching the web, writing code, and more",
    ],
  },
];
