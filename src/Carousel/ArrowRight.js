/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getSlideIndex } from '../redux/selectors.js';
import { setSlideIndex } from '../redux/actions.js';


function ArrowRight(props) {
  const [ hover, setHover ] = useState(false);

  const slideIndex = useSelector(getSlideIndex);

  const dispatch = useDispatch();

  const styling = css`
    &.button-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 48%;
      width: 40px;
      height: 40px;
      z-index: 3;

      cursor: pointer;
    }

    &.button-container.right {
      right: 10px;
    }

    .arrow {
      width: 25px;
      height: 8px;
      background-color: #000;

      transition: transform 0.2s ease;
    }

    .arrow.top.right {
      transform: translateY(10px) translateX(7px) rotate(45deg);
    }

    .arrow.bot.right {
      transform: translateY(14px) translateX(7px) rotate(-45deg);
    }

    .arrow.top.right.hover {
      transform: translateY(9px) translateX(6px) rotate(53deg);
    }

    .arrow.bot.right.hover {
      transform: translateY(15px) translateX(6px) rotate(-53deg);
    }
  `;

  return (
    <div css={styling}
      className="button-container right"
      onClick={
        () => {
          dispatch(setSlideIndex(slideIndex + 1))
        }
      }
      onMouseEnter={
        () => {
          setHover(true);
        }
      }
      onMouseLeave={
        () => {
          setHover(false);
        }
      }>
      <div className={hover ? "arrow top right hover" : "arrow top right"}></div>
      <div className={hover ? "arrow bot right hover" : "arrow bot right"}></div>
    </div>
  );
}

export default ArrowRight;
