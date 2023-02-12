import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useLeadershipSkills, useTechnicalSkills } from '~/store/skills';

import Section from './Section';
import SubHeading from './SubHeading';

const Skills = () => {
  const leadershipSkills = useLeadershipSkills();
  const technicalSkills = useTechnicalSkills();

  return (
    <Section title="Skills">
      <SubHeading text="Technical" />
      {technicalSkills.isLoading ? (
        <Skeleton count={4} />
      ) : (
        technicalSkills.data?.map((skill) => (
          <li key={skill.skill} className="text-xs text-gray-500">
            {skill.skill}
          </li>
        ))
      )}
      <br></br>
      <SubHeading text="Leadership" />
      {leadershipSkills.isLoading ? (
        <Skeleton count={4} />
      ) : (
        leadershipSkills.data?.map((skill) => (
          <li key={skill.skill} className="text-xs text-gray-500">
            {skill.skill}
          </li>
        ))
      )}
    </Section>
  );
};

export default Skills;
