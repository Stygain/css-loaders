/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function PulseBubble1() {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    width: 113px;
    height: 60px;
    position: relative;

    div {
      ${'' /* border: 1px solid red; */}

      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgb(0, 0, 0);
      opacity: 0%;

      position: absolute;
    }

    div:nth-child(1) {
      top: 0;
      left: 0;
      animation: move-1 5s ease 0s infinite;
      z-index: 1;
    }
    div:nth-child(2) {
      top: 0;
      left: 30px;
      animation: move-2 5s ease 1s infinite;
      z-index: 2;
    }
    div:nth-child(3) {
      top: 0;
      left: 60px;
      animation: move-3 5s ease 2s infinite;
      z-index: 3;
    }
    div:nth-child(4) {
      top: 0;
      left: 90px;
      animation: move-4 5s ease 3s infinite;
      z-index: 4;
    }


    @keyframes move-1 {
      0% {
        top: 0;
        left: 0;
      }
      10% {
        top: 0;
        left: 30px;
        opacity: 100%;
      }
      98% {
        opacity: 0%;
      }
      100% {
        top: 0;
        left: 30px;
      }
    }

    @keyframes move-2 {
      0% {
        top: 0;
        left: 30px;
      }
      10% {
        top: 0;
        left: 60px;
        opacity: 100%;
      }
      98% {
        opacity: 0%;
      }
      100% {
        top: 0;
        left: 60px;
      }
    }

    @keyframes move-3 {
      0% {
        top: 0;
        left: 60px;
      }
      10% {
        top: 0;
        left: 90px;
        opacity: 100%;
      }
      98% {
        opacity: 0%;
      }
      100% {
        top: 0;
        left: 90px;
      }
    }

    @keyframes move-4 {
      0% {
        top: 0;
        left: 90px;
      }
      10% {
        top: 30px;
        left: 90px;
        opacity: 100%;
      }
      22% {
        top: 30px;
        left: 0px;
        opacity: 100%;
      }
      32% {
        top: 0;
        left: 0px;
        opacity: 100%;
      }
      98% {
        opacity: 0%;
      }
      100% {
        top: 0;
        left: 0px;
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

export default PulseBubble1;
