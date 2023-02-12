import { useLeadershipSkills, useTechnicalSkills } from '~/store/skills';

import Section from './Section';
import SubHeading from './SubHeading';

const Skills = () => {
  const professionalSkills = useLeadershipSkills();
  const technicalSkills = useTechnicalSkills();

  return (
    <Section title="Skills">
      <SubHeading text="Technical" />
      {technicalSkills.data?.map((skill) => (
        <li key={skill.skill} className="text-xs text-gray-500">
          {skill.skill}
        </li>
      ))}
      <br></br>
      <SubHeading text="Leadership" />
      {professionalSkills.data?.map((skill) => (
        <li key={skill.skill} className="text-xs text-gray-500">
          {skill.skill}
        </li>
      ))}
    </Section>
  );
};

export default Skills;
