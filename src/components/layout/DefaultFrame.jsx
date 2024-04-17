import PropTypes from 'prop-types';

const DefaultFrame = ({ children, className, boxShadow = true }) => {
  return (
    <>
      <div
        className={`w-full rounded-2xl p-4 bg-white border-2 border-[#e2e2e2] ${className}`}
        style={{
          backgroundColor: '#ffffff',
          boxShadow: boxShadow
            ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
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
