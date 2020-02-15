/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import PulseBar1 from './loaders/pulseBar1.js';
import PulseBar2 from './loaders/pulseBar2.js';
import PulseBubble1 from './loaders/pulseBubble1.js';
import PulseBubble2 from './loaders/pulseBubble2.js';
import Ripple from './loaders/ripple.js';
import Rect1 from './loaders/rect1.js';
import Rect2 from './loaders/rect2.js';
import CircleRotate from './loaders/circleRotate.js';

import HamburgerX from './hamburgerX.js';
import Menu from './menu.js';


import Carousel from './carousel.js';


function App() {
  const [clicked, setClicked] = useState(false);//temp set to false
  const hamburgerStyle = css`
    position: relative;
    top: 20px;
    left: 20px;
    z-index: 2;
  `;
  return (
    <div>
  	  <div css={hamburgerStyle}>
        <HamburgerX click={clicked} clickhandler={setClicked}/>
      </div>
      {/* <Menu click={clicked}/> */}
      <Carousel />
    </div>
  );
}

export default App;
