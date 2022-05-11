export const aboutText =
  "Nathan is a passionate, driven, and highly ambitious worker who takes immense pride in the things he creates. He cares deeply about the end user experience, and is dedicated to providing humane and beautiful interfaces for everyday use.";

export const technicalSkills = [
  "React",
  "Javascript / Typescript",
  "UI/UX Design",
  "CSS",
  "API Development",
  "Python",
];
export const professionalSkills = [
  "Project Planning",
  "Self-Organizing",
  "Self-Teaching",
];

export interface JobType {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export const jobs: JobType[] = [
  {
    title: "Lead Frontend Developer - Lead UX Designer",
    company: "Gray Wolf Analytics Inc.",
    duration: "January 2021 - Present",
    description: `Nathan was hired as the sole Frontend contributor to this fast-paced startup right after graduation. The small size of the company allowed him to try new roles and gain new expertise including: `,
    responsibilities: [
      "Building, testing, and deploying a production-grade web app",
      "Designing attractive and intuitive UI / UX",
      "Shaping company goals into actionable projects",
    ],
  },
  {
    title: "Software Developer",
    company: "IBM",
    duration: "September 2017 - September 2020",
    description: `Nathan worked here 5 terms during his formal education as part of his CO-OP designation. Each term taught him new skills such as:`,
    responsibilities: [
      "Performing automated QA on an app's frontend",
      "Large-scale container orchestration",
      "Thorough understanding of SCRUM and agile methodologies",
    ],
  },
];
