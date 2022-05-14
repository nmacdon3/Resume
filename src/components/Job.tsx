import { motif } from "../classes";
import { JobType } from "../content";
import { BsDot } from "react-icons/bs";
import { SubHeading } from "../components/SubHeading";

export const Job = ({ job }: { job: JobType }) => {
  return (
    <div style={{ color: motif }}>
      <SubHeading text={job.title} />
      <div className="flex items-center  space-x-1  text-xs  tracking-wider ">
        <span className="font-medium ">{job.company}</span>
        <BsDot className="h-4 w-4" />
        <span className="opacity-90"> {job.duration}</span>
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
