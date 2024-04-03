import PropTypes from 'prop-types';

const DefaultFrame = ({ children }) => {
  return (
    <>
      <div
        className="w-full rounded-2xl py-2"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0 rgba(0,0,0,0.3)',
        }}
      >
        {children}
      </div>
    </>
  );
};

DefaultFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultFrame;
