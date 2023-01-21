import { education } from '~/content';

import Section from './Section';

const Education = () => {
  return (
    <Section title="Education">
      <h4 className="text-xs  w-40  text-gray-500">
        <span className="font-medium text-gray-700">{education.title}</span>, {education.subTitle}
      </h4>
      <h5 className="text-xs mt-1 font-medium text-motif">{education.school}</h5>
      <h5 className="text-xs opacity-80 mt-1 text-motif">{education.duration}</h5>
    </Section>
  );
};

export default Education;
