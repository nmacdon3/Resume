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
      <div className="flex sm:space-x-16 mt-12 sm:mt-10  flex-grow flex-wrap  ">
        <section className="w-full sm:w-[24rem] ">
          <About />
          <Experience />
        </section>
        <aside className=" sm:mt-8  space-x-12 sm:space-x-0 sm:w-40 flex sm:flex-col px-2 sm:px-0">
          <Skills />
          <Education />
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
