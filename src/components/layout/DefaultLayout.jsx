import NavBar from './NavBar';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children, banner = <></>, showNavBar = true }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col w-full max-w-screen-xl">
        {showNavBar && <NavBar />}
        {banner}
        <div>{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.node,
  showNavBar: PropTypes.bool,
};

export default DefaultLayout;
