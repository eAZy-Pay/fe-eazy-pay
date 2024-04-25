import { useContext } from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import { ModalContext } from '../../App';
import Modal from './Modal';

const DefaultLayout = ({ children, banner, bannerClassName, showNavBar }) => {
  const { modal } = useContext(ModalContext);
  return (
    <div className="flex flex-col items-center w-full ">
      {showNavBar && (
        <div className="w-full max-w-screen-xl">
          <NavBar />
        </div>
      )}

      {modal.isOpen && <Modal></Modal>}

      {banner && (
        <div className={`flex justify-center items-center w-full ${bannerClassName}`}>
          <div className="w-full max-w-screen-xl">{banner}</div>
        </div>
      )}
      <div className="flex flex-col w-full max-w-screen-xl">
        <div>{children}</div>
      </div>
    </div>
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
