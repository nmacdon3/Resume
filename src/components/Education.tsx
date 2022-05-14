import { EducationType } from "../content";
import { motif } from "../classes";

export const Education = ({ education }: { education: EducationType }) => {
  return (
    <>
      <h4 className="text-xs  w-40  text-gray-500">
        <span className="font-medium text-gray-700">{education.title}</span>,{" "}
        {education.subTitle}
      </h4>
      <h5 style={{ color: motif }} className="text-xs mt-1 font-medium">
        {education.school}
      </h5>
      <h5 style={{ color: "#A57A58" }} className="text-xs opacity-80 mt-1">
        {education.duration}
      </h5>
    </>
  );
};
