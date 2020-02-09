/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Rect2() {
  const styling = css`
    width: 80px;
    height: 80px;
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
      animation: square-move 3s ease 0s infinite;
    }

    @keyframes square-move {
      0% {
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
      }
      12.5% {
        top: 0;
        left: 0;
        width: 80px;
        height: 10px;
      }
      25% {
        top: 0;
        left: 70px;
        width: 10px;
        height: 10px;
      }
      37.5% {
        top: 0;
        left: 70px;
        height: 80px;
        width: 10px;
      }
      50% {
        top: 70px;
        left: 70px;
        width: 10px;
        height: 10px;
      }
      67.5% {
        top: 70px;
        left: 0px;
        width: 80px;
        height: 10px;
      }
      75% {
        top: 70px;
        left: 0px;
        width: 10px;
        height: 10px;
      }
      87.5% {
        top: 0px;
        left: 0;
        height: 80px;
        width: 10px;
      }
      100% {
        top: 0px;
        left: 0px;
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

export default Rect2;
