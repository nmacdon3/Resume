import classnames from "classnames";
import profile from "./assets/brighter.png";
import { BsCode } from "react-icons/bs";
import { HiChevronRight, HiOutlineMail, HiPlus } from "react-icons/hi";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {
  aboutText,
  jobs,
  technicalSkills,
  professionalSkills,
  education,
  contactInfo,
} from "./content";
import { accent } from "./classes";
import { Cover } from "./components/Cover";
import { Education } from "./components/Education";
import { Job } from "./components/Job";
import { Section } from "./components/Section";
import { SubHeading } from "./components/SubHeading";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-300   font-body flex  justify-center overflow-x-scroll   sm:py-10">
      <div className="h-auto sm:h-[56rem] w-[43rem] bg-white relative px-10 shadow-2xl sm:overflow-hidden overflow-scroll flex flex-col sm:rounded-lg">
        <header className="flex items-start  shrink-0 pt-6">
          <Cover />
          <img
            className="rounded-full ring-4 ring-white h-16 w-16 sm:h-16 sm:w-16 z-20 relative object-cover mr-8"
            src={profile}
          />
          <div>
            <h1 className="text-2xl sm:text-4xl font-thin relative tracking-wide  font-serif text-white ">
              <span className="font-sans">Nathan</span> MacDonald
            </h1>
            <div className="flex items-center font-thin flex-wrap text-md sm:text-lg relative text-white/70">
              Lead Frontend Developer
              <HiPlus className="mx-2 h-3 w-3" /> Lead UX Designer
            </div>
          </div>
        </header>
        <section className="flex sm:space-x-16 mt-20 sm:mt-10  flex-grow flex-wrap  ">
          <div className="w-full sm:w-[24rem] ">
            <Section title="About">
              <p className="text-gray-500 text-xs  text-justify">{aboutText}</p>
            </Section>
            <Section title="Experience">
              {jobs.map((job, i) => (
                <div
                  key={i}
                  className={classnames(
                    "pb-7 flex items-start ml-1  translate-y-1 -translate-x-1",
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
          <aside className=" sm:mt-8  space-x-6 sm:space-x-0 sm:w-40 flex sm:flex-col px-2 sm:px-0">
            <Section title="Skills">
              <SubHeading text={"Technical"} />
              {technicalSkills.map((skill) => (
                <li className="text-xs text-gray-500">{skill}</li>
              ))}
              <br></br>
              <SubHeading text={"Professional"} />
              {professionalSkills.map((skill) => (
                <li className="text-xs text-gray-500">{skill}</li>
              ))}
            </Section>

            <Section title="Education">
              <Education education={education} />
            </Section>
          </aside>
        </section>

        <footer className="border-t border-orange-800/60 w-full h-20 text-xs py-4 text-gray-500 space-y-2 ">
          <div className="sm:flex items-center sm:space-x-3 mb-4 space-y-1 sm:space-y-0">
            <span className="flex items-center ">
              <HiOutlineMail className="h-4 w-4 mr-1" />{" "}
              <a
                className="hover:underline"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </span>
            <span className="flex items-center ">
              <AiOutlinePhone className="h-4 w-4 mr-1" /> {contactInfo.phone}
            </span>
            <div className="flex items-center ">
              <AiFillLinkedin className="h-4 w-4 mr-1" />{" "}
              <a
                className="hover:underline"
                href={"https://" + contactInfo.linkedin}
              >
                {contactInfo.linkedin}
              </a>
            </div>
          </div>
          <div className="flex items-center  pb-4 sm:pb-0">
            <FaReact className="h-4 w-4 mr-1" /> This resume was built with
            React{" "}
            <a
              href={contactInfo.github}
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
