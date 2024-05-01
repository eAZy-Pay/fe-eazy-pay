import { useContext } from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import { ModalContext, DropdownContext } from '../../App';
import Modal from './Modal';
import Footer from './Footer';

const DefaultLayout = ({ children, banner, bannerClassName, showNavBar }) => {
  const { modal } = useContext(ModalContext);
  const { setIsDropdownOpen } = useContext(DropdownContext);

  return (
    <>
      {showNavBar && (
        <div className="flex flex-col items-center w-full mt-2">
          <div className="w-[95%] max-w-screen-xl">
            <NavBar />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center w-full" onClick={() => setIsDropdownOpen(false)}>
        {modal.isOpen && <Modal></Modal>}

        {banner && (
          <div className={`flex justify-center items-center w-full ${bannerClassName}`}>
            <div className="w-[95%] max-w-screen-xl">{banner}</div>
          </div>
        )}
        <div className="flex flex-col w-[95%] max-w-screen-xl">
          <div>{children}</div>
        </div>
        {showNavBar && (
          <div className={`flex justify-center items-center w-full mt-16 border-t border-gray-300`}>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

DefaultLayout.defaultProps = {
  banner: null,
  showNavBar: true,
  bannerClassName: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.node,
  bannerClassName: PropTypes.string,
  showNavBar: PropTypes.bool,
};

export default DefaultLayout;
