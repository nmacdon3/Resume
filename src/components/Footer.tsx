import classNames from 'classnames';
import { IconType } from 'react-icons';
import { AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai';
import { BsCode } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useContactInfo } from '~/store/contact';

const FooterItem = ({
  icon,
  text,
  link,
  className
}: {
  icon: { value: IconType };
  text?: string;
  link?: string;
  className?: string;
}) => {
  return (
    <span className={classNames('flex items-center ', className)}>
      <icon.value className="h-4 w-4 mr-1" />
      {link ? (
        <a className="hover:underline" href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </span>
  );
};

const Footer = () => {
  const contactInfo = useContactInfo();

  return (
    <footer className="border-t border-orange-800/60 w-full h-20 text-xs py-4 text-gray-500 space-y-2 ">
      {contactInfo.isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className="sm:flex items-center sm:space-x-3 mb-4 space-y-1 sm:space-y-0">
            <FooterItem
              icon={{ value: HiOutlineMail }}
              text={contactInfo.data?.email}
              link={`mailto:${contactInfo.data?.email}`}
            />
            <FooterItem icon={{ value: AiOutlinePhone }} text={contactInfo.data?.phone} />
            <FooterItem
              icon={{ value: AiFillLinkedin }}
              text={contactInfo.data?.linkedin}
              link={`https://${contactInfo.data?.linkedin}`}
            />
          </div>
          <div className="flex items-center  pb-4 sm:pb-0 sm:space-x-3">
            <FooterItem icon={{ value: FaReact }} text="This resume was built with React" />
            <FooterItem
              icon={{ value: BsCode }}
              text="See Code"
              link={contactInfo.data?.github}
              className="text-orange-800"
            />
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
