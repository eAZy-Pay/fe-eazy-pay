import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CreditCard = ({ card, showName, showInfo, useLink, scale }) => {
  const cardContent = (
    <>
      <img
        className={`w-[9.8rem] h-[15.7rem] ${useLink ? 'hover:translate-y-[-1.5rem]' : ''}`}
        src={card.image}
        alt="Credit Card"
        style={{ transform: `scale(${scale / 100})` }}
      />
      {showName && <div className="text-sm md:text-lg font-bold text-black">{card.name}</div>}
      {showInfo && <div className="text-sm md:text-base font-bold text-black">{card.info}</div>}
    </>
  );

  return useLink ? (
    <Link
      to={`/card-detail/${card.uid}`}
      className="w-96 h-96 flex flex-col items-center justify-center gap-4"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="w-96 h-96 flex flex-col items-center justify-center gap-4">{cardContent}</div>
  );
};

CreditCard.defaultProps = {
  showName: true,
  showInfo: true,
  useLink: true,
  sclae: 100,
};

CreditCard.propTypes = {
  card: PropTypes.shape({
    uid: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  showName: PropTypes.bool,
  showInfo: PropTypes.bool,
  useLink: PropTypes.bool,
  scale: PropTypes.number,
};
export default CreditCard;
