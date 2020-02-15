/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './hamburgerX.js';
// import Menu from './menu.js';


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
