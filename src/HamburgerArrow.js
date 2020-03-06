/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function HamburgerArrow() {
  const styling = css`
    width: 35px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
      width: 35px;
      height: 6px;
      background-color: #BBB;
    }

    div:nth-child(1) {
      animation: arrow-top 1s ease 0s infinite alternate;
    }
    div:nth-child(2) {
      animation: arrow-middle 1s ease 0s infinite alternate;
    }
    div:nth-child(3) {
      animation: arrow-bottom 1s ease 0s infinite alternate;
    }

    @keyframes arrow-top {
      from {
        background-color: #000;
      }
      to {
        transform: translateY(2px) translateX(30px) rotate(-45deg);
        background-color: #BBB;
      }
    }

    @keyframes arrow-bottom {
      from {
        background-color: #000;
      }
      to {
        transform: translateY(-2px) translateX(30px) rotate(45deg);
        background-color: #BBB;
      }
    }

    @keyframes arrow-middle {
      from {
        background-color: #000;
      }
      to {
        transform: translateX(45px) scaleX(1.3);
        background-color: #BBB;
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

export default HamburgerArrow;
