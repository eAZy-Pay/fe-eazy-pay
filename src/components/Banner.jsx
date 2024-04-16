import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Banner Component
 *
 * @param {string} to - 이동할 경로
 * @param {string} title - 배너 제목
 * @param {string} description - 배너 설명
 * @param {string} imageSrc - 배너 이미지 경로
 * @param {string} imageAlt - 배너 이미지 alt
 * @param {string} bgColor - 배경색
 *
 * @returns {JSX.Element} - Banner Component
 */

const Banner = ({ to, title, description, imageSrc, imageAlt, bgColor }) => {
  return (
    <Link
      to={to}
      className={`w-full h-24 flex items-center justify-between rounded-3xl p-4 my-4 cursor-pointer`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="ml-4 text-2xl text-white">{title}</p>
      <div className="flex items-center">
        <p className="mr-4 text-2xl text-white">{description}</p>
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt || 'Banner Image'} className="w-[78px] h-[78px]" />
        )}
      </div>
    </Link>
  );
};

Banner.defaultProps = {
  bgColor: '#908ef4',
  imageAlt: 'Banner Image',
};

export default Banner;
