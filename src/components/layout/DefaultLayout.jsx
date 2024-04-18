import NavBar from './NavBar';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children, banner, showNavBar, bannerFull }) => {
  return (
    <div className="flex flex-col items-center w-full ">
      {showNavBar && (
        <div className="w-full max-w-screen-xl">
          <NavBar />
        </div>
      )}
      {bannerFull ? (
        <div className="w-full py-4">{banner}</div>
      ) : (
        <div className="w-full max-w-screen-xl py-4">{banner}</div>
      )}
      <div className="flex flex-col w-full max-w-screen-xl">
        <div>{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.defaultProps = {
  banner: <></>,
  showNavBar: true,
  bannerFull: false,
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.node,
  showNavBar: PropTypes.bool,
};

export default DefaultLayout;
