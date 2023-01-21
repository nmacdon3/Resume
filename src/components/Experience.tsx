import classnames from "classnames";
import { HiChevronRight } from "react-icons/hi";
import { accent } from "~/classes";
import { jobs } from "~/content";
import Job from "./Job";
import Section from "./Section";

const Experience = () => {
  return (
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
  );
};

export default Experience;
