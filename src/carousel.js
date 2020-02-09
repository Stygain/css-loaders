/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import HamburgerX from './hamburgerX.js';


function Carousel() {
  const styling = css`
    border: 5px solid red;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
  const hamburgerStyle = css`
    position: relative;
    top: 20px;
    left: 20px;
  `;
  return (
    <div css={styling}>
  	  <div css={hamburgerStyle}>
        <HamburgerX />
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
