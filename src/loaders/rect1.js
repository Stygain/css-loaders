/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Rect1() {
  const styling = css`
    width: 80px;
    height: 20px;
    position: relative;

    div {
      width: 10px;
      height: 10px;
      background-color: #BBB;
      position: absolute;
      top: 0;
      left: 0;
    }

    div:nth-child(1) {
      animation: move 1s ease 0s infinite alternate;
    }

    @keyframes move {
      0% {
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
      }
      50% {
        top: 0;
        left: 0;
        width: 80px;
        height: 10px;
      }
      100% {
        top: 0;
        left: 70px;
        width: 10px;
        height: 10px;
      }
    }
  `;
  return (
    <div css={styling}>
  	  <div></div>
  	</div>
  );
}

export default Rect1;