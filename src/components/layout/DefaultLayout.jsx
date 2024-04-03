import NavBar from './NavBar';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children, banner = <></> }) => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center">
        <div className="flex flex-col w-[1200px]">
          <NavBar />
        </div>
        {banner}
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-[1200px]">{children}</div>
        </div>
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.node,
};

export default DefaultLayout;
