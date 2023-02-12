import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { EducationType, useEducation } from '~/store/education';

import Section from './Section';

const EducationItem = ({ education }: { education: EducationType }) => {
  return (
    <div>
      <h4 className="text-xs  w-40  text-gray-500">
        <span className="font-medium text-gray-700">{education.title}</span>, {education.subTitle}
      </h4>
      <h5 className="text-xs mt-1 font-medium text-motif">{education.school}</h5>
      <h5 className="text-xs opacity-80 mt-1 text-motif">{education.duration}</h5>
    </div>
  );
};

const Education = () => {
  const education = useEducation();
  return (
    <Section title="Education">
      {education.isLoading ? (
        <Skeleton count={4} />
      ) : (
        education.data?.map((item) => <EducationItem key={item.title} education={item} />)
      )}
    </Section>
  );
};

export default Education;
