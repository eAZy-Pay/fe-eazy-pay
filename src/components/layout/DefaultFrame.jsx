import PropTypes from 'prop-types';

const DefaultFrame = ({ children, className, boxShadow = true }) => {
  return (
    <>
      <div
        className={`w-full rounded-2xl p-4 bg-white border-[1px] border-[#e2e2e2] ${className}`}
        style={{
          backgroundColor: '#ffffff',
          boxShadow: boxShadow
            ? '0 0.5px 1px rgba(0, 0, 0, 0.1), 0 0.5px 1px rgba(0, 0, 0, 0.06)'
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
