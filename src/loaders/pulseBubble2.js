/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function PulseBubble2() {
  const styling = css`
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #BBB;
    }

    div:nth-child(1) {
      animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0s infinite alternate;
    }
    div:nth-child(2) {
      animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0.2s infinite alternate;
    }
    div:nth-child(3) {
      animation: bubble .6s cubic-bezier(.6,0,.73,1.29) .4s infinite alternate;
    }
    div:nth-child(4) {
      animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0.6s infinite alternate;
    }

    @keyframes bubble {
      from {
        opacity: 1;
        background-color: #000;
      }
      to {
        opacity: .4;
        transform: translateY(15px);
        background-color: #BBB;
      }
    }
  `;
  return (
    <div css={styling}>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	</div>
  );
}

export default PulseBubble2;
