import Education from './Education';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';

const Resume = () => {
  return (
    <>
      <Header />
      <div className="flex sm:space-x-16 print:space-x-10 mt-12 sm:mt-10 print:mt-16  flex-grow flex-wrap print:pl-16 ">
        <section className="w-full sm:w-[24rem] print:w-[28rem]">
          <About />
          <Experience />
        </section>
        <aside className=" sm:mt-8  space-x-12 sm:space-x-0 print:space-x-0 sm:w-40 print:w-56  flex sm:flex-col px-2 sm:px-0 print:flex-col">
          <Skills />
          <Education />
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
