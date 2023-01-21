import { technicalSkills, professionalSkills } from "../content";
import Section from "./Section";
import SubHeading from "./SubHeading";

const Skills = () => {
  return (
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
  );
};

export default Skills;
