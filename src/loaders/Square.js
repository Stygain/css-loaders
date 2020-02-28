/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Square() {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    width: 200px;
    height: 200px;
    position: relative;

    svg {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(225deg) scale(1);
    }

    polyline {
      stroke-width: 10;
      fill: none;
    }

    .stroke-still {
      stroke: rgb(34, 34, 34);
    }

    .stroke-animation {
      animation: stroke-spacing 1.5s ease-in 0s infinite,
                 stroke-color 6s linear 0s infinite;
      transform-origin: center;
    }


    @keyframes stroke-spacing {
      0% {
        stroke-dasharray: 0 200;
      }
      45% {
        stroke-dashoffset: 0;
        stroke-dasharray: 200 200;
      }
      90% {
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
    <div css={styling}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <polyline class="stroke-still" points="0,0 100,0 100,100"></polyline>
        <polyline class="stroke-still" points="0,0 0,100 100,100"></polyline>
        <polyline class="stroke-animation" points="0,0 100,0 100,100"></polyline>
        <polyline class="stroke-animation" points="0,0 0,100 100,100"></polyline>
      </svg>
  	</div>
  );
}

export default Square;
