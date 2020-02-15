/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import ArrowLeft from './ArrowLeft.js';
import ArrowRight from './ArrowRight.js';
import ProgressDots from './ProgressDots.js';


const dotData = [
  {
    somedata: "somevalue"
  },
  {
    somedata: "somevalue"
  },
  {
    somedata: "somevalue"
  },
  {
    somedata: "somevalue"
  },
  {
    somedata: "somevalue"
  }
]

console.log(dotData.length)

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
      {current == 0 ?
        <ArrowRight current={current} setCurrent={setCurrent} /> :
        current == dotData.length-1 ?
        <ArrowLeft current={current} setCurrent={setCurrent} /> :
        <div>
          <ArrowLeft current={current} setCurrent={setCurrent} />
          <ArrowRight current={current} setCurrent={setCurrent} />
        </div>}
      <ProgressDots current={current} data={dotData} setCurrent={setCurrent} />
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
