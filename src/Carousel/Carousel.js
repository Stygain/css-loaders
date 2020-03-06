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



const pageData = [
  {
    anim: <CircleRotateColor />,
    bgColor: "rgba(232, 232, 232, 1)",
    accentColor: ""
  },
  {
    anim: <BubbleMove />,
    bgColor: "rgba(253, 255, 222, 1)",
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
    anim: <BarColor />,
    bgColor: "rgba(192, 226, 178, 0.59)",
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
