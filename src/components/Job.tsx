import { BsDot } from 'react-icons/bs';

import { JobType } from '~/content';
import SubHeading from '~/components/SubHeading';

const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="text-motif">
      <SubHeading text={job.title} />
      <div className="flex items-center  space-x-1  text-xs  tracking-wider ">
        <span className="font-medium ">{job.company}</span>
        <BsDot className="h-4 w-4" />
        <span className="opacity-90"> {job.duration}</span>
      </div>
      <p className="text-xs text-gray-500 text-justify mt-2 mb-2">{job.description}</p>
      {job.responsibilities.map((resp) => (
        <li key={resp} className="text-xs text-gray-500 ml-5">
          {resp}
        </li>
      ))}
    </div>
  );
};

export default Job;
