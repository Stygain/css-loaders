/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Rect2() {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    width: 80px;
    height: 80px;
    position: relative;

    div {
      width: 10px;
      height: 10px;
      background-color: rgb(0, 0, 0);
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
        background-color: rgb(0, 0, 0);
      }
      12.5% {
        top: 0;
        left: 0;
        width: 80px;
        height: 10px;
        background-color: rgb(140, 140, 140);
      }
      25% {
        top: 0;
        left: 70px;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
      }
      37.5% {
        top: 0;
        left: 70px;
        height: 80px;
        width: 10px;
        background-color: rgb(140, 140, 140);
      }
      50% {
        top: 70px;
        left: 70px;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
      }
      67.5% {
        top: 70px;
        left: 0px;
        width: 80px;
        height: 10px;
        background-color: rgb(140, 140, 140);
      }
      75% {
        top: 70px;
        left: 0px;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
      }
      87.5% {
        top: 0px;
        left: 0;
        height: 80px;
        width: 10px;
        background-color: rgb(140, 140, 140);
      }
      100% {
        top: 0px;
        left: 0px;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
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
