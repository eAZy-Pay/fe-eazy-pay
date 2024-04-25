import { useContext } from 'react';
import SideBarFull from './SideBarFull';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { ModalContext } from '../../App';

const AdminDefaultLayout = ({ children }) => {
  const { modal } = useContext(ModalContext);

  return (
    <div className="flex z-0 select-none notranslate">
      <SideBarFull />
      <div className="text-center h-screen w-screen">{children}</div>
      {modal.isOpen && <Modal></Modal>}
    </div>
  );
};

AdminDefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminDefaultLayout;
