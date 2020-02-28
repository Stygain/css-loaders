/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Fill() {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    width: 200px;
    height: 200px;
    position: relative;

    svg.left {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%) scale(1);
    }

    svg.right {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(0%, -50%) scale(1) rotate(180deg);
    }

    circle {
      stroke: rgb(66, 66, 66);
      fill: none;
      stroke-width: 10;
    }

    .stroke-animation {
      animation: stroke-spacing 1.5s ease-in 0s infinite,
                 stroke-color 6s linear 0s infinite;
      transform-origin: center;
    }

    .right .stroke-animation {
      animation: stroke-spacing 1.5s ease-in 0.375s infinite,
                 stroke-color 6s linear 0s infinite;
      transform-origin: center;
    }

    @keyframes stroke-spacing {
      0% {
        stroke-dashoffset: 0;
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
      <svg className="left" width="100" height="100" viewBox="0 0 100 100">
        <circle className="stroke" cx="100" cy="50" r="40"/>
        <circle className="stroke-animation" cx="100" cy="50" r="40"/>
      </svg>
      <svg className="right" width="100" height="100" viewBox="0 0 100 100">
        <circle className="stroke" cx="100" cy="50" r="40"/>
        <circle className="stroke-animation" cx="100" cy="50" r="40"/>
      </svg>
  	</div>
  );
}

export default Fill;
