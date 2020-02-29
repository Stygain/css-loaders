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
import CircleRotateColor from './loaders/CircleRotateColor.js';


const pageData = [
  {
    anim: <CircleRotateColor />,
    bgColor: "rgb(210, 210, 210)",
    accentColor: ""
  },
  {
    anim: <Square />,
    bgColor: "rgb(153, 153, 153)",
    accentColor: ""
  },
  {
    anim: <PulseBar1 />,
    bgColor: "rgb(210, 210, 210)",
    accentColor: ""
  },
  {
    anim: <PulseBar2 />,
    bgColor: "rgb(210, 146, 146)",
    accentColor: ""
  },
  {
    anim: <PulseBubble1 />,
    bgColor: "rgb(124, 168, 128)",
    accentColor: ""
  },
  {
    anim: <PulseBubble2 />,
    bgColor: "rgb(139, 188, 191)",
    accentColor: ""
  },
  {
    anim: <Ripple />,
    bgColor: "rgb(108, 126, 201)",
    accentColor: ""
  },
  {
    anim: <Rect1 />,
    bgColor: "rgb(218, 218, 218)",
    accentColor: ""
  },
  {
    anim: <Rect2 />,
    bgColor: "rgb(182, 245, 234)",
    accentColor: ""
  },
  {
    anim: <CircleRotate />,
    bgColor: "rgb(188, 222, 181)",
    accentColor: ""
  }
]

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
    background-color: ${props.item.bgColor};

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
        {props.item.anim}
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
        current === pageData.length-1 ?
          <ArrowLeft current={current} setCurrent={setCurrent} /> :
          <div>
            <ArrowLeft current={current} setCurrent={setCurrent} />
            <ArrowRight current={current} setCurrent={setCurrent} />
          </div>}

      <Content item={pageData[current]} />
      <ProgressDots current={current} data={pageData} setCurrent={setCurrent} />
  	</div>
  );
}

export default Carousel;
