export interface EducationType {
  title: string;
  subTitle: string;
  school: string;
  duration: string;
}

export const education: EducationType = {
  title: "Bachelor of Computer Science",
  subTitle: "Minor in Business Administration (CO-OP)",
  school: "University of New Brunswick",
  duration: "September, 2016 - December, 2020",
};

export const aboutText: string =
  "Nathan is a passionate, driven, and highly ambitious worker who takes immense pride in the things he creates. He cares deeply about the end user experience, and is dedicated to providing humane and beautiful interfaces for everyday use.";

export const technicalSkills: string[] = [
  "React",
  "Typescript",
  "UI/UX Design",
  "CSS",
  "Testing",
  "API Development",
  "Python",
];

export const professionalSkills: string[] = [
  "Project Management",
  "Fast Learning",
  "Communication",
  "Finding Solutions",
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
    title: "Frontend Developer",
    company: "Magnet Forensics",
    duration: "July 2022 - Present",
    description: `Hired to spearhead web development for an new product being launched and to mentor other developers. `,
    responsibilities: [
      "Rewriting entire repositories to be clean, fast, and future-proof",
      "Leading efforts in API design, UX, DX, testing, and security",
      "Holding seminars on web development and UX discussions with company leaders.",
    ],
  },
  {
    title: "Lead Frontend Developer - Lead UX Designer",
    company: "Gray Wolf Analytics Inc.",
    duration: "January 2021 - July 2022",
    description: `Sole Frontend contributor for fast-paced startup. The small size of the company allowed for Nathan to learn many new skills, such as: `,
    responsibilities: [
      "Building, securing, and deploying a production-grade web app",
      "Designing attractive and intuitive UI / UX",
      "Shaping company goals into actionable projects",
    ],
  },
  {
    title: "Software Developer",
    company: "IBM",
    duration: "September 2017 - September 2020",
    description: `Nathan worked 5 terms during his formal education as part of his CO-OP designation. Each term taught him new skills such as:`,
    responsibilities: [
      "Performing automated QA on an app's frontend",
      "Thorough understanding of SCRUM and agile methodologies",
    ],
  },
];

export const contactInfo: Record<string, string> = {
  email: "natemacd97@gmail.com",
  phone: "(506) 471-3038",
  linkedin: "www.linkedin.com/in/nathanmacd",
  github: "https://github.com/nmacdon3/Resume",
};
