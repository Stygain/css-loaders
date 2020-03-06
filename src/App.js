/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './HamburgerX.js';
import Menu from './Menu.js';
import Carousel from './Carousel/Carousel.js';
import Modal from './Modal.js';


function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <HamburgerX click={clicked} clickhandler={setClicked}/>
      <Menu click={clicked}/>
      <Modal />
      <Carousel />
    </div>
  );
}

export default App;
