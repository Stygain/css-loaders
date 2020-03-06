/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions.js';

function BarColor() {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid green; */}

    cursor: pointer;

    width: 200px;
    height: 200px;
    position: relative;

    svg {
      ${'' /* border: 1px solid red; */}

      position: fixed;
      top: 50%;
      left: 50%;
      ${'' /* transform: translate(-50%, -50%) rotate(225deg) scale(1); */}
      transform: translate(-50%, -50%) scale(1);
    }

    polyline {
      stroke-width: 15;
      fill: none;
      opacity: 0%;
    }

    .stroke-still {
      stroke: rgb(34, 34, 34);
    }

    .stroke-animation-outer {
      animation: stroke-spacing 3s ease-in 0s infinite,
                 stroke-color 6s linear 0s infinite;
      transform-origin: center;
    }

    .stroke-animation-inner {
      animation: stroke-spacing 3s ease-in 1.5s infinite,
                 stroke-color 6s linear 0s infinite;
      transform-origin: center;
    }


    @keyframes stroke-spacing {
      0% {
        stroke-dasharray: 0 200;
        opacity: 0%;
        transform: scaleY(0.6);
      }
      12.25% {
        opacity: 75%;
        transform: scaleY(1);
      }
      22.5% {
        stroke-dashoffset: 0;
        stroke-dasharray: 200 200;
        opacity: 100%;
      }
      45% {
        stroke-dashoffset: -200;
        stroke-dasharray: 200 200;
      }
      50% {
        stroke-dashoffset: -200;
        stroke-dasharray: 200 200;
      }
      100% {
        stroke-dashoffset: -200;
        stroke-dasharray: 200 200;
      }
    }

    @keyframes stroke-color {
      0%  { stroke: rgb(55, 159, 228); }
      25% { stroke: rgb(215, 98, 238); }
      50% { stroke: rgb(241, 78, 8); }
      75% { stroke: rgb(241, 211, 8); }
      100% { stroke: rgb(55, 159, 228); }
    }
  `;

  return (
    <div css={styling} onClick={() => dispatch(setModalShow(true))}>
      <svg width="100" height="100" viewBox="0 0 90 90">
        <polyline class="stroke-still" points="6,0 6,90"></polyline>
        <polyline class="stroke-still" points="32,0 32,90"></polyline>
        <polyline class="stroke-still" points="58,0 58,90"></polyline>
        <polyline class="stroke-still" points="84,0 84,90"></polyline>
        <polyline class="stroke-animation-outer" points="6,0 6,90"></polyline>
        <polyline class="stroke-animation-inner" points="32,0 32,90"></polyline>
        <polyline class="stroke-animation-inner" points="58,0 58,90"></polyline>
        <polyline class="stroke-animation-outer" points="84,0 84,90"></polyline>
      </svg>
  	</div>
  );
}

export default BarColor;
