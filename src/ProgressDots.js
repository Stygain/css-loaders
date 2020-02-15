/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ArrowRight() {
  const styling = css`
    border: 1px solid blue;
    width: 100%;
    position: absolute;
    bottom: 10px;
    height: 40px;

    .dot-container {
      border: 1px solid green;
      margin: 0 auto;
      width: 200px;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .dot-container .dot {
      border-radius: 50%;
      background-color: #000;
      width: 10px;
      height: 10px;
    }
  `;
  return (
    <div css={styling}>
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default ArrowRight;
