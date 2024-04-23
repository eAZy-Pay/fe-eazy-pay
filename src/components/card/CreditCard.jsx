import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CreditCard = ({ card, showName, showInfo, useLink, scale }) => {
  const cardContent = (
    <>
      <img
        className={`w-[157.71px] h-[251.98px] ${useLink ? 'hover:translate-y-2' : ''}`}
        src={card.image}
        alt="Credit Card"
        style={{ transform: `scale(${scale / 100})` }}
      />
      {showName && <div className="text-lg font-bold text-black">{card.name}</div>}
      {showInfo && <div className="text-base font-bold text-black">{card.info}</div>}
    </>
  );

  return useLink ? (
    <Link
      to={`/card-detail/${card.uid}`}
      className="w-[400px] h-[400px] flex flex-col items-center justify-center gap-4"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="w-[400px] h-[400px] flex flex-col items-center justify-center gap-4">
      {cardContent}
    </div>
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
    uid: PropTypes.number.isRequired,
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
