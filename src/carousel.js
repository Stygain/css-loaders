/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Carousel() {
  const styling = css`
    border: 5px solid red;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    .button-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 48%;
      width: 40px;
      height: 40px;

      cursor: pointer;
    }

    .button-container.left {
      left: 10px;
    }

    .button-container.right {
      right: 10px;
    }

    .arrow {
      width: 25px;
      height: 8px;
      background-color: #000;
    }

    .arrow.top.right {
      transform: translateY(10px) translateX(7px) rotate(45deg);
    }

    .arrow.bot.right {
      transform: translateY(14px) translateX(7px) rotate(-45deg);
    }

    .arrow.top.left {
      transform: translateY(10px) translateX(7px) rotate(-45deg);
    }

    .arrow.bot.left {
      transform: translateY(14px) translateX(7px) rotate(45deg);
    }
  `;
  return (
    <div css={styling}>
      <div className="button-container right">
        <div className="arrow top right"></div>
        <div className="arrow bot right"></div>
      </div>
      <div className="button-container left">
        <div className="arrow top left"></div>
        <div className="arrow bot left"></div>
      </div>
  	</div>
  );
}

export default Carousel;




{/* <PulseBar1 />
<PulseBar2 />
<PulseBubble1 />
<PulseBubble2 />
<Ripple />
<Rect1 />
<Rect2 />
<CircleRotate /> */}
