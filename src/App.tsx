import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Resume from '~/components/Resume';

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
      <Transition
        show={show}
        className="transition-all ease-in-out duration-1000 shadow h-auto sm:h-[56rem] w-[43rem] sm:overflow-hidden overflow-scroll flex flex-col bg-white relative px-10  sm:rounded-lg"
        enterFrom="sm:opacity-0 sm:scale-90 sm:translate-y-0 translate-y-full">
        <Resume />
      </Transition>
    </div>
  );
};

export default App;
