import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import propTypes from 'prop-types';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';

const CardRecommendation = ({ Contents, className }) => {
  useEffect(() => {
    const checkDOM = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(checkDOM);
        const glideEl = document.querySelector('.glide-05');
        if (glideEl) {
          new Glide(glideEl, {
            type: 'slider',
            focusAt: 'center',
            perView: 1,
            gap: 0,
            classes: {
              nav: {
                active: 'bg-slate-900',
              },
            },
          }).mount();
        }
      }
    }, 100);
  }, [Contents]);

  return (
    <>
      <div className={`relative w-full h-full glide-05 m-auto ${className}`}>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {Contents &&
              Contents.map((content, index) => (
                <li className="flex items-center justify-center w-full m-auto" key={index}>
                  {content}
                </li>
              ))}
          </ul>
        </div>
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <img src={LeftArrow} alt="left arrow" className="w-20 h-20" />
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <img src={RightArrow} alt="right arrow" className="w-20 h-20" />
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          {Contents &&
            Contents.map((_, index) => (
              <button
                key={index}
                className="m-4 group block w-2 h-2 transition-colors duration-300 rounded-full"
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

CardRecommendation.defaultProps = {
  className: '',
};

CardRecommendation.propTypes = {
  Contents: propTypes.arrayOf(propTypes.element).isRequired,
  className: propTypes.string,
};

export default CardRecommendation;
