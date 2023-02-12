import classnames from 'classnames';
import { BsDot } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { JobType, useJobs } from '~/store/jobs';

import Section from './Section';
import SubHeading from './SubHeading';

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
        <li key={resp} className="text-xs text-gray-500 ml-2">
          {resp}
        </li>
      ))}
    </div>
  );
};

const Experience = () => {
  const jobs = useJobs();

  return (
    <Section title="Experience">
      {jobs.isLoading ? (
        <Skeleton count={6} />
      ) : (
        jobs.data?.map((job, i) => (
          <div
            key={i}
            className={classnames(
              'pb-7 flex items-start ml-1  translate-y-1 -translate-x-1',
              i !== jobs.data.length - 1 && ''
            )}>
            <HiChevronRight className="h-4 w-4  rounded-full shrink-0  mr-1 -translate-x-1 text-accent" />
            <Job job={job} />
          </div>
        ))
      )}
    </Section>
  );
};

export default Experience;
