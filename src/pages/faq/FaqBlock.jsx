import { PropTypes } from 'prop-types';

const FaqBlock = ({ title, answer }) => {
  return (
    <>
    <div className='shadow-md rounded-xl p-6'>

    <div className='flex text-2xl font-extrabold px-3 items-baseline'>
        <div className='mr-2'>Q.</div>
      <div className="text-xl">{title}</div>
    </div>
      
      <hr className='bg-gray-300 w-full h-0.4 mt-3 mb-6'></hr>
      <div className='flex px-3 text-xl'>
      <div className='mr-2 font-bold text-blue-700'>A.</div>
      <div className="align-top">{answer}</div>
      </div>
    </div>
    </>
  );
};

FaqBlock.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqBlock;
