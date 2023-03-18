import { ContactInfo } from './contact';
import { EducationType } from './education';
import { JobType } from './jobs';

export const education: EducationType[] = [
  {
    id: '1',
    title: 'Bachelor of Computer Science',
    subTitle: 'Minor in Business Administration (CO-OP)',
    school: 'University of New Brunswick',
    duration: 'September, 2016 - December, 2020'
  }
];

export const technicalSkills: string[] = [
  'React',
  'Typescript',
  'UI/UX Design',
  'CSS',
  'API Design',
  'Logging and Monitoring'
];

export const professionalSkills: string[] = [
  'Project Management',
  'Independent Learning',
  'Clear Communication',
  'Customer-First Mindset',
  'Mentoring'
];

export const jobs: JobType[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Magnet Forensics',
    duration: 'July 2022 - Present',
    description: `Hired to spearhead web development for a new product being launched and to mentor other developers. `,
    responsibilities: [
      'Rewriting entire repositories to be clean, fast, and future-proof',
      'Leading efforts in API design, UX, DX, testing, and security',
      'Holding seminars on web development and UX discussions with company leaders.'
    ]
  },
  {
    id: '2',
    title: 'Lead Frontend Developer - Lead UX Designer',
    company: 'Gray Wolf Analytics Inc.',
    duration: 'January 2021 - July 2022',
    description: `Sole Frontend contributor for fast-paced startup. The small size of the company allowed Nathan to learn many new skills, including: `,
    responsibilities: [
      'Building, securing, and deploying a production-grade web app',
      'Designing attractive and intuitive UI / UX',
      'Shaping company goals into actionable projects'
    ]
  },
  {
    id: '3',
    title: 'Software Developer',
    company: 'IBM',
    duration: 'September 2017 - September 2020',
    description: `Nathan worked 5 terms during his formal education as part of his CO-OP designation. Each term taught him new skills such as:`,
    responsibilities: [
      "Performing automated QA on an app's frontend",
      'Thorough understanding of SCRUM and agile methodologies',
      'Strong foundation in SaaS technologies'
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: 'natemacd97@gmail.com',
  phone: '(506) 471-3038',
  linkedin: 'www.linkedin.com/in/nathanmacd',
  github: 'https://github.com/nmacdon3'
};
