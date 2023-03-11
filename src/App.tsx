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
      className="lg:hidden print:hidden transition duration-300 ease-in-out absolute top-4 right-4 z-100 backdrop-blur-lg bg-white/30   text-black p-2 rounded-full   hover:bg-gray-200"
      download
      href={pdf}>
      <BiPrinter className="h-5 w-5" />
    </a>
  );
};

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-300 font-body flex justify-center overflow-y-scroll sm:py-10">
      <PrintButton />
      <Resume />
      <MobilePrintButton />
    </div>
  );
};

export default App;
