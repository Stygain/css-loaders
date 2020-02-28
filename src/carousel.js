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
import Square from './loaders/Square.js';
import Fill from './loaders/Fill.js';


const dotData = [
  <Square />,
  <PulseBar1 />,
  <PulseBar2 />,
  <PulseBubble1 />,
  <PulseBubble2 />,
  <Ripple />,
  <Rect1 />,
  <Rect2 />,
  <CircleRotate />
]

const colorData = [
  "rgb(153, 153, 153)",
  "rgb(210, 210, 210)",
  "rgb(210, 146, 146)",
  "rgb(124, 168, 128)",
  "rgb(139, 188, 191)",
  "rgb(108, 126, 201)",
  "rgb(218, 218, 218)",
  "rgb(182, 245, 234)",
  "rgb(188, 222, 181)",
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

    transition: background-color 0.5s cubic-bezier(.4,.38,.12,1);
    background-color: ${colorData[props.current]};

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
      <ProgressDots current={current} data={dotData} colorData={colorData} setCurrent={setCurrent} />
  	</div>
  );
}

export default Carousel;
