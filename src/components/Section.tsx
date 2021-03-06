export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-10">
      <h3 className="tracking-widest text-md font-medium mb-2 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
};
