import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EarthIcon,
  AtSignIcon,
  HeadsetIcon,
} from 'lucide-react';
import MainLogo from '../../assets/mainLogo.svg';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-gray-700 flex flex-col items-center justify-between">
      <div className="flex items-center justify-center gap-8 w-full max-w-screen-xl">
        <div className="flex flex-col items-center w-full max-w-md">
          <img src={MainLogo} className="h-10 mb-4" alt="Main Logo" />
          <p className="text-sm text-center max-w-md">세상에서 가장 쉽고 편리한</p>
          <p className="text-sm text-center max-w-md">결제 관리 서비스를 제공합니다</p>
        </div>

        {/* 세로 구분선 */}
        <div className="h-32 w-px bg-gray-300 mx-8" />

        <div className="flex flex-col items-center ml-8 w-full max-w-md">
          <div className="mt-6">
            <span className="text-sm block text-center mb-4">Follow Us</span>
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900" target="_blank">
                  <LinkedinIcon size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900" target="_blank">
                  <TwitterIcon size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900" target="_blank">
                  <FacebookIcon size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900" target="_blank">
                  <EarthIcon size={20} />
                  <span className="sr-only">Website</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 이메일 및 연락처 */}
          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center text-sm">
              <AtSignIcon size={16} className="mr-2" />
              <span>info@email.com</span>
            </div>
            <div className="flex items-center mt-4">
              <HeadsetIcon size={20} className="mr-2" />
              <span>+971-123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* 저작권 및 저자 정보 */}
      <div className="mt-8 text-xs text-center">
        <span>© 2024 eAZy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
