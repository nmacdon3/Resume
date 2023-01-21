import { aboutText } from "~/content";
import Section from "./Section";

const About = () => {
  return (
    <Section title="About">
      <p className="text-gray-500 text-xs  text-justify">{aboutText}</p>
    </Section>
  );
};

export default About;
