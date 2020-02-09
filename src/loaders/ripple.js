/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Ripple() {
  const styling = css`
    width: 40px;
    height: 40px;
    position: relative;

    div {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
    }

    div:nth-child(1) {
      animation: ripple 1.6s ease 0s infinite;
    }
    div:nth-child(2) {
      animation: ripple 1.6s ease 0.4s infinite;
    }
    div:nth-child(3) {
      animation: ripple 1.6s ease 0.8s infinite;
    }

    @keyframes ripple {
      from {
        border: 5px solid;
        opacity: 1;
        top: 35px;
        left: 35px;
        width: 0px;
        height: 0px;
      }
      to {
        border: 5px solid;
        opacity: 0;
        top: 0;
        left: 0;
        width: 70px;
        height: 70px;
        transform: scale(1.3);
      }
    }
  `;
  return (
    <div css={styling}>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	</div>
  );
}

export default Ripple;
