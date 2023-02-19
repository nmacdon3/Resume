import { ReactNode } from 'react';

const Section = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="mb-6 ">
      <h3 className="tracking-widest text-md font-medium mb-2 uppercase">{title}</h3>
      {children}
    </div>
  );
};

export default Section;
