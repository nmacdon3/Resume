import { HiPlus } from 'react-icons/hi';

import PROFILE_PIC from '~/assets/brighter.png';
import COVER_PIC from '~/assets/cover.png';

const Header = () => {
  return (
    <header className="flex items-start  shrink-0 pt-6">
      <img src={COVER_PIC} className=" object-cover absolute top-0 left-0 h-28 w-full " />
      <img
        className="rounded-full ring-4 ring-white h-16 w-16 sm:h-16 sm:w-16 z-20 relative object-cover mr-8"
        src={PROFILE_PIC}
      />
      <div>
        <h1 className="text-2xl sm:text-4xl font-thin relative tracking-wide  font-serif text-white ">
          <span className="font-sans">Nathan</span> MacDonald
        </h1>
        <div className="flex items-center font-thin flex-wrap text-md sm:text-lg relative text-white/70">
          Lead Frontend Developer
          <HiPlus className="mx-2 h-3 w-3" /> Lead UX Designer
        </div>
      </div>
    </header>
  );
};

export default Header;
