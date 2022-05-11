import classnames from "classnames";
import React from "react";
import profile from "./brighter.png";
import { BsDot } from "react-icons/bs";
import { HiChevronRight, HiOutlineMail, HiPlus } from "react-icons/hi";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

interface JobType {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

const jobs: JobType[] = [
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

const technicalSkills = [
  "React",
  "Javascript / Typescript",
  "UI/UX Design",
  "CSS",
  "API Development",
  "Python",
];
const professionalSkills = [
  "Project Planning",
  "Self-Organizing",
  "Self-Teaching",
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-10">
      <h3 className="tracking-widest text-md font-medium mb-2">{title}</h3>
      {children}
    </div>
  );
};

const aboutText =
  "Nathan is a passionate, driven, and highly ambitious worker who takes immense pride in the things he creates. He cares deeply about the end user experience, and is dedicated to providing humane and beautiful interfaces for everyday use.";
const Job = ({ job }: { job: JobType }) => {
  return (
    <div>
      <h4 className="uppercase font-normal tracking-widest text-xs text-gray-700 mb-1">
        {job.title}
      </h4>
      <div className="flex items-center  space-x-1  text-xs  tracking-wider text-orange-800/70 ">
        <span className="font-medium text-orange-800/90">{job.company}</span>
        <BsDot className="h-4 w-4" />
        <span className=""> {job.duration}</span>
      </div>
      <p className="text-xs text-gray-500 text-justify mt-2 mb-2">
        {job.description}
      </p>
      {job.responsibilities.map((resp) => (
        <li className="text-xs text-gray-500 ml-5">{resp}</li>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-gray-300  flex justify-center items-center font-body">
      <div className="w-[44rem] h-full bg-white relative px-10 shadow-2xl overflow-hidden flex flex-col">
        <div className="h-96  bg-orange-300/40 w-[60rem] absolute -top-56 -left-6 rotate-6 overflow-hidden">
          <div className="h-96 bg-orange-300/30 w-[60rem] absolute -top-40 -right-20 rotate-45"></div>
        </div>
        <header className="flex items-start space-x-8 shrink-0 pt-10">
          <img
            className="rounded-full ring-4 ring-white h-16 w-16 sm:h-28 sm:w-28 z-20 relative object-cover"
            src={profile}
          />
          <div>
            <h1 className="text-3xl sm:text-5xl font-thin relative tracking-wide mb-2 font-serif ">
              <span className="font-sans">Nathan</span> MacDonald
            </h1>
            <div className="flex items-center flex-wrap text-sm sm:text-lg ">
              Lead Frontend Developer
              <HiPlus className="mx-2 h-3 w-3" /> Lead UX Designer
            </div>
          </div>
        </header>
        <section className="flex sm:space-x-16 mt-7  flex-grow flex-wrap  overflow-auto">
          <div className="w-full sm:w-[25rem] ">
            <Section title="ABOUT">
              <p className="text-gray-500 text-xs  text-justify">{aboutText}</p>
            </Section>
            <Section title="EXPERIENCE">
              {jobs.map((job, i) => (
                <div
                  key={i}
                  className={classnames(
                    "pb-8 flex items-start ml-1  translate-y-1 -translate-x-1",
                    i !== jobs.length - 1 && ""
                  )}
                >
                  <HiChevronRight className="h-4 w-4 text-orange-800 rounded-full shrink-0  mr-1 -translate-x-1" />

                  <Job job={job} />
                </div>
              ))}
            </Section>
          </div>
          <div className="mt-8  space-x-10 sm:space-x-0 sm:w-40 flex sm:flex-col">
            <Section title="SKILLS">
              <h5 className=" tracking-widest text-xs  mb-2 text-gray-700">
                TECHNICAL
              </h5>
              {technicalSkills.map((skill) => (
                <li className="text-xs text-gray-500">{skill}</li>
              ))}
              <h5 className=" tracking-widest text-xs  mb-2 text-gray-700 mt-5">
                PROFESSIONAL
              </h5>
              {professionalSkills.map((skill) => (
                <li className="text-xs text-gray-500">{skill}</li>
              ))}
            </Section>

            <Section title="EDUCATION">
              <h4 className="text-xs  w-40  text-gray-500">
                <span className="font-medium text-gray-700">
                  Bachelor of Computer Science
                </span>
                , Minor in Business Administration (CO-OP)
              </h4>
              <h5 className="text-xs text-orange-800/90 mt-1 font-medium">
                University of New Brunswick
              </h5>
              <h5 className="text-xs text-orange-800/60 mt-1">
                September, 2016 - December, 2020
              </h5>
            </Section>
          </div>
        </section>

        <footer className="border-t border-orange-800/60 w-full h-20 text-xs py-4 text-gray-500 space-y-2 ">
          <div className="sm:flex items-center sm:space-x-3 mb-4 ">
            <span className="flex items-center ">
              <HiOutlineMail className="h-4 w-4 mr-1" /> natemacd97@gmail.com
            </span>
            <span className="flex items-center ">
              <AiOutlinePhone className="h-4 w-4 mr-1" /> (506) 471-3038
            </span>
            <div className="flex items-center ">
              <AiFillLinkedin className="h-4 w-4 mr-1" />{" "}
              https://ca.linkedin.com/in/nathan-macdonald-489503134
            </div>
          </div>
          <div className="flex items-center ">
            <FaReact className="h-4 w-4 mr-1" /> This resume was built with
            React
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
