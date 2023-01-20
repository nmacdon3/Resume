const SubHeading = ({ text }: { text: string }) => {
  return (
    <h5 className=" tracking-widest text-xs  mb-2 text-gray-700  uppercase">
      {text}
    </h5>
  );
};

export default SubHeading;
