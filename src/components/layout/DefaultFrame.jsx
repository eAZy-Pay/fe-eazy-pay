import PropTypes from 'prop-types';

const DefaultFrame = ({ children, boxShadow = true, className }) => {
  return (
    <>
      <div
        className={`w-full rounded-2xl p-4 bg-white border-2 border-[#e2e2e2] ${className}`}
        style={{
          backgroundColor: '#ffffff',
          boxShadow: boxShadow
            ? '0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0 rgba(0,0,0,0.3)'
            : 'none',
        }}
      >
        {children}
      </div>
    </>
  );
};

DefaultFrame.propTypes = {
  children: PropTypes.node.isRequired,
  boxShadow: PropTypes.bool,
  className: PropTypes.string,
};

export default DefaultFrame;
