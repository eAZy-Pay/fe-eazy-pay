import PropTypes from 'prop-types';

const CreditCard = ({ card }) => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col items-center justify-center gap-4">
      <img className="w-[157.71px] h-[251.98px]" src={card.image} alt="Credit Card" />
      <div className="text-xl font-bold text-black">{card.name}</div>
      <div className="text-lg font-bold text-black">{card.info}</div>
    </div>
  );
};

CreditCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
export default CreditCard;
