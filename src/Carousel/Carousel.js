/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useSelector } from 'react-redux';
import { getSlideIndex } from '../redux/selectors.js';

import ArrowLeft from './ArrowLeft.js';
import ArrowRight from './ArrowRight.js';
import ProgressDots from './ProgressDots.js';

import PulseBar1 from '../loaders/PulseBar1.js';
import PulseBar2 from '../loaders/PulseBar2.js';
import PulseBubble1 from '../loaders/PulseBubble1.js';
import PulseBubble2 from '../loaders/PulseBubble2.js';
import Ripple from '../loaders/Ripple.js';
// import Rect1 from '../loaders/Rect1.js';
// import Rect2 from '../loaders/Rect2.js';
import CircleRotate from '../loaders/CircleRotate.js';
import Square from '../loaders/Square.js';
import CircleRotateColor from '../loaders/CircleRotateColor.js';
import BarColor from '../loaders/BarColor.js';
import BubbleMove from '../loaders/BubbleMove.js';



export const pageData = [
  {
    anim: <CircleRotateColor />,
    bgColor: "rgba(232, 232, 232, 1)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
        div {'{'}
        <br />  width: 60px;
        <br />  height: 60px;
        <br />  border-radius: 50%;
        <br />  position: absolute;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  border: 8px solid;
        <br />  border-color: rgb(55, 159, 228) transparent transparent transparent;
        <br />  animation: border-color-1 6s cubic-bezier(.76,0,.63,1) 0.25s infinite;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  border: 8px solid;
        <br />  border-color: transparent rgb(55, 159, 228) transparent transparent;
        <br />  animation: border-color-2 6s cubic-bezier(.76,0,.63,1) 0.5s infinite;
        <br />{'}'}
<br />
        <br />@keyframes border-color-1 {'{'}
        <br />  0% {'{'}
        <br />    border-color: rgb(55, 159, 228) transparent transparent transparent;
        <br />  {'}'}
        <br />  25% {'{'}
        <br />    border-color: transparent rgb(215, 98, 238) transparent transparent;
        <br />    transform: rotate(360deg);
        <br />  {'}'}
        <br />  50% {'{'}
        <br />    border-color: transparent transparent rgb(241, 78, 8) transparent;
        <br />    transform: rotate(720deg);
        <br />  {'}'}
        <br />  75% {'{'}
        <br />    border-color: transparent transparent transparent rgb(241, 211, 8);
        <br />    transform: rotate(1080deg);
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    border-color: rgb(55, 159, 228) transparent transparent transparent;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes border-color-2 {'{'}
        <br />  0% {'{'}
        <br />    border-color: transparent rgb(55, 159, 228) transparent transparent;
        <br />  {'}'}
        <br />  25% {'{'}
        <br />    border-color: transparent transparent rgb(215, 98, 238) transparent;
        <br />    transform: rotate(360deg);
        <br />  {'}'}
        <br />  50% {'{'}
        <br />    border-color: transparent transparent transparent rgb(241, 78, 8);
        <br />    transform: rotate(720deg);
        <br />  {'}'}
        <br />  75% {'{'}
        <br />    border-color: rgb(241, 211, 8) transparent transparent transparent;
        <br />    transform: rotate(1080deg);
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    border-color: transparent rgb(55, 159, 228) transparent transparent;
        <br />  {'}'}
        <br />{'}'}
      </code>
    </pre>
  },
  {
    anim: <BubbleMove />,
    bgColor: "rgba(253, 255, 222, 1)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <Square />,
    bgColor: "rgb(153, 153, 153)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
        <br />  &#60;svg width="100" height="100" viewBox="0 0 100 100"&#62;
        <br />    &#60;polyline class="stroke-still" points="0,0 100,0 100,100"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-still" points="0,0 0,100 100,100"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation" points="0,0 100,0 100,100"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation" points="0,0 0,100 100,100"&#62;&#60;/polyline&#62;
        <br />  &#60;/svg&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <PulseBar1 />,
    bgColor: "rgb(210, 210, 210)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />  &#60;div&#62;&#60;/div&#62;
        <br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <BarColor />,
    bgColor: "rgba(192, 226, 178, 0.59)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
        <br />  <svg width="100" height="100" viewBox="0 0 90 90">
        <br />    <polyline class="stroke-still" points="6,0 6,90"></polyline>
        <br />    <polyline class="stroke-still" points="32,0 32,90"></polyline>
        <br />    <polyline class="stroke-still" points="58,0 58,90"></polyline>
        <br />    <polyline class="stroke-still" points="84,0 84,90"></polyline>
        <br />    <polyline class="stroke-animation-outer" points="6,0 6,90"></polyline>
        <br />    <polyline class="stroke-animation-inner" points="32,0 32,90"></polyline>
        <br />    <polyline class="stroke-animation-inner" points="58,0 58,90"></polyline>
        <br />    <polyline class="stroke-animation-outer" points="84,0 84,90"></polyline>
        <br />  </svg>
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <PulseBar2 />,
    bgColor: "rgb(210, 146, 146)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <PulseBubble1 />,
    bgColor: "rgb(124, 168, 128)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <PulseBubble2 />,
    bgColor: "rgb(139, 188, 191)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  {
    anim: <Ripple />,
    bgColor: "rgb(108, 126, 201)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
  },
  // {
  //   anim: <Rect1 />,
  //   bgColor: "rgb(218, 218, 218)",
  //   accentColor: ""
  // },
  // {
  //   anim: <Rect2 />,
  //   bgColor: "rgb(182, 245, 234)",
  //   accentColor: ""
  // },
  {
    anim: <CircleRotate />,
    bgColor: "rgb(188, 222, 181)",
    accentColor: "",
    html:
    <pre>
      <code>
        &#60;div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />  &#60;div&#62;&#60;/div&#62;
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css: <pre>
      <code>
      </code>
    </pre>
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
  const slideIndex = useSelector(getSlideIndex);

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
      {slideIndex === 0 ?
        <ArrowRight /> :
        slideIndex === pageData.length-1 ?
          <ArrowLeft /> :
          <div>
            <ArrowLeft />
            <ArrowRight />
          </div>}

      <Content item={pageData[slideIndex]} />
      <ProgressDots data={pageData} />
  	</div>
  );
}

export default Carousel;
