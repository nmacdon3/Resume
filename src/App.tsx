import classnames from "classnames";
import React from "react";
import profile from "./brighter.png";
import { BsArrowRight, BsCode, BsDot } from "react-icons/bs";
import { HiChevronRight, HiOutlineMail, HiPlus } from "react-icons/hi";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {
  JobType,
  aboutText,
  jobs,
  technicalSkills,
  professionalSkills,
} from "./content";
import cover from "./cover2.jpg";

const motif = "#A57A58";
const accent = "#8B8064";

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

const Job = ({ job }: { job: JobType }) => {
  return (
    <div>
      <h4 className="uppercase font-normal tracking-widest text-xs text-gray-700 mb-1">
        {job.title}
      </h4>
      <div className="flex items-center  space-x-1  text-xs  tracking-wider \ ">
        <span
          style={{ color: motif }}
          className="font-medium text-orange-800/90"
        >
          {job.company}
        </span>
        <BsDot className="h-4 w-4" />
        <span style={{ color: motif }} className="opacity-90">
          {" "}
          {job.duration}
        </span>
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

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "#AC845F" }}
      className="h-96 opacity-60  bg-orange-300/40 w-[60rem] absolute -top-56 -left-6 rotate-6 overflow-hidden"
    >
      <div className="h-96 bg-orange-300/30 w-[60rem] absolute -top-40 -right-20 rotate-45"></div>
    </div>
  );
};
const Cover = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden  h-40">
      <div className="relative w-screen h-44 ">
        <img
          src={cover}
          className=" object-cover h-screen w-[60rem] absolute -top-24 -left-0 "
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-300   font-body flex  justify-center overflow-scroll  sm:py-10">
      <div className="h-auto sm:h-[56rem] w-[44rem] bg-white relative px-10 shadow-2xl sm:overflow-hidden overflow-scroll flex flex-col sm:rounded-lg">
        <header className="flex items-start  shrink-0 pt-9">
          <Cover />
          <img
            className="rounded-full ring-4 ring-white h-16 w-16 sm:h-24 sm:w-24 z-20 relative object-cover mr-8"
            src={profile}
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-thin relative tracking-wide  font-serif text-white ">
              <span className="font-sans">Nathan</span> MacDonald
            </h1>
            <div className="flex items-center flex-wrap text-sm sm:text-lg relative text-white/70">
              Lead Frontend Developer
              <HiPlus className="mx-2 h-3 w-3" /> Lead UX Designer
            </div>
          </div>
        </header>
        <section className="flex sm:space-x-16 mt-16  flex-grow flex-wrap  ">
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
                  <HiChevronRight
                    style={{ color: accent }}
                    className="h-4 w-4  rounded-full shrink-0  mr-1 -translate-x-1"
                  />

                  <Job job={job} />
                </div>
              ))}
            </Section>
          </div>
          <div className="mt-8  space-x-10 sm:space-x-0 sm:w-40 flex sm:flex-col px-2 sm:px-0">
            <Section title="SKILLS">
              <h5 className=" tracking-widest text-xs  mb-2 text-gray-700 w-40">
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
              <h5 style={{ color: motif }} className="text-xs mt-1 font-medium">
                University of New Brunswick
              </h5>
              <h5
                style={{ color: "#A57A58" }}
                className="text-xs opacity-80 mt-1"
              >
                September, 2016 - December, 2020
              </h5>
            </Section>
          </div>
        </section>

        <footer className="border-t border-orange-800/60 w-full h-20 text-xs py-4 text-gray-500 space-y-2 ">
          <div className="sm:flex items-center sm:space-x-3 mb-4 space-y-1 sm:space-y-0">
            <span className="flex items-center ">
              <HiOutlineMail className="h-4 w-4 mr-1" />{" "}
              <a className="hover:underline" href="mailto:natemacd97@gmail.com">
                natemacd97@gmail.com
              </a>
            </span>
            <span className="flex items-center ">
              <AiOutlinePhone className="h-4 w-4 mr-1" /> (506) 471-3038
            </span>
            <div className="flex items-center ">
              <AiFillLinkedin className="h-4 w-4 mr-1" />{" "}
              <a
                className="hover:underline"
                href="https://ca.linkedin.com/in/nathan-macdonald-489503134"
              >
                https://ca.linkedin.com/in/nathan-macdonald-489503134
              </a>
            </div>
          </div>
          <div className="flex items-center  pb-4 sm:pb-0">
            <FaReact className="h-4 w-4 mr-1" /> This resume was built with
            React{" "}
            <a
              href="https://github.com/nmacdon3/Resume"
              className="flex items-center ml-2  text-orange-800"
            >
              <BsCode className="mr-1 ml-2 h-4 w-4" /> See Code
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
