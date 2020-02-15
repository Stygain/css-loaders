/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import ArrowLeft from './ArrowLeft.js';
import ArrowRight from './ArrowRight.js';
import ProgressDots from './ProgressDots.js';

import PulseBar1 from './loaders/pulseBar1.js';
import PulseBar2 from './loaders/pulseBar2.js';
import PulseBubble1 from './loaders/pulseBubble1.js';
import PulseBubble2 from './loaders/pulseBubble2.js';
import Ripple from './loaders/ripple.js';
import Rect1 from './loaders/rect1.js';
import Rect2 from './loaders/rect2.js';
import CircleRotate from './loaders/circleRotate.js';


const dotData = [
  <PulseBar1 />,
  <PulseBar2 />,
  <PulseBubble1 />,
  <PulseBubble2 />,
  <Ripple />,
  <Rect1 />,
  <Rect2 />,
  <CircleRotate />
]

console.log(dotData.length)

function Content(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    .centered {
      ${'' /* border: 1px solid orange; */}

      margin: 0 auto;
      width: 80%;
      height: 80%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  return (
    <div css={styling}>
      <div className="centered">
        {dotData[props.current]}
      </div>
  	</div>
  );
}

function Carousel() {
  const [ current, setCurrent ] = useState(0);
  const styling = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;
  return (
    <div css={styling}>
      {current === 0 ?
        <ArrowRight current={current} setCurrent={setCurrent} /> :
        current === dotData.length-1 ?
          <ArrowLeft current={current} setCurrent={setCurrent} /> :
          <div>
            <ArrowLeft current={current} setCurrent={setCurrent} />
            <ArrowRight current={current} setCurrent={setCurrent} />
          </div>}

      <Content current={current} data={dotData} />
      <ProgressDots current={current} data={dotData} setCurrent={setCurrent} />
  	</div>
  );
}

export default Carousel;
