import classNames from 'classnames';
import { IconType } from 'react-icons';
import { AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai';
import { BsCode } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { useContactInfo } from '~/store/contact';

const FooterItem = ({
  icon,
  text,
  link,
  className
}: {
  icon: { value: IconType };
  text: string;
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
  const { data: contact_info, isLoading } = useContactInfo();

  return (
    <footer className="border-t border-orange-800/60 w-full h-20 text-xs py-4 text-gray-500 space-y-2 ">
      {isLoading ? (
        'Loading...'
      ) : !contact_info ? (
        'Oops...'
      ) : (
        <>
          <div className="sm:flex items-center sm:space-x-3 mb-4 space-y-1 sm:space-y-0">
            <FooterItem
              icon={{ value: HiOutlineMail }}
              text={contact_info.email}
              link={`mailto:${contact_info.email}`}
            />
            <FooterItem icon={{ value: AiOutlinePhone }} text={contact_info.phone} />
            <FooterItem
              icon={{ value: AiFillLinkedin }}
              text={contact_info.linkedin}
              link={`https://${contact_info.linkedin}`}
            />
          </div>
          <div className="flex items-center  pb-4 sm:pb-0 sm:space-x-3">
            <FooterItem icon={{ value: FaReact }} text="This resume was built with React" />
            <FooterItem
              icon={{ value: BsCode }}
              text="See Code"
              link={contact_info.github}
              className="text-orange-800"
            />
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
