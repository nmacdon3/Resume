import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { BiPrinter } from 'react-icons/bi';

import pdf from '~/assets/MacDonald_Resume_2023.pdf';
import Resume from '~/components/Resume';

const PrintButton = () => {
  return (
    <a
      className="invisible lg:visible transition duration-300 ease-in-out absolute top-10 left-10  text-gray-600 px-4 py-2 rounded-lg flex items-center   hover:bg-gray-200 tracking-wide"
      download
      href={pdf}>
      <BiPrinter className="mr-4 h-5 w-5" /> Print
    </a>
  );
};

const MobilePrintButton = () => {
  return (
    <a
      className="lg:hidden transition duration-300 ease-in-out absolute top-4 right-4 z-100 backdrop-blur-lg bg-white/30   text-black p-2 rounded-full   hover:bg-gray-200"
      download
      href={pdf}>
      <BiPrinter className="h-5 w-5" />
    </a>
  );
};

const App = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div
      className={classNames(
        'h-screen bg-gradient-to-t from-gray-300 font-body flex justify-center overflow-x-scroll sm:py-10 transition-all'
      )}>
      <div
        className={classNames(
          'h-screen w-screen absolute top-0 left-0 transition-all duration-1000 bg-white -z-10',
          show ? 'opacity-0' : 'opacity-100'
        )}></div>
      <PrintButton />
      <Transition
        show={show}
        className="print:hidden print:absolute transition-all ease-in-out duration-1000 shadow h-auto sm:h-[56rem] w-[43rem] sm:overflow-hidden overflow-scroll flex flex-col bg-white relative px-10  sm:rounded-lg"
        enterFrom="opacity-0 scale-90 translate-y-0">
        <Resume />
      </Transition>
      <MobilePrintButton />

      <div
        id="toBePrinted"
        className="absolute invisible print:visible print:relative h-full w-full z-100 top-0 left-0">
        <Resume />
      </div>
    </div>
  );
};

export default App;
