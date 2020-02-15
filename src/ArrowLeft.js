/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ArrowLeft(props) {
  const styling = css`
    &.button-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 48%;
      width: 40px;
      height: 40px;

      cursor: pointer;
    }

    &.button-container.left {
      left: 10px;
    }

    .arrow {
      width: 25px;
      height: 8px;
      background-color: #000;
    }

    .arrow.top.left {
      transform: translateY(10px) translateX(7px) rotate(-45deg);
    }

    .arrow.bot.left {
      transform: translateY(14px) translateX(7px) rotate(45deg);
    }
  `;
  return (
    <div css={styling} className="button-container left" onClick={
      () => {
        props.setCurrent(props.current - 1)
      }
    }>
      <div className="arrow top left"></div>
      <div className="arrow bot left"></div>
    </div>
  );
}

export default ArrowLeft;
