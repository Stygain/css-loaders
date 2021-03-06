/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions.js';

function CircleRotate() {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid green; */}

    cursor: pointer;

    width: 75px;
    height: 75px;
    position: relative;

    div {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: absolute;
    }

    div:nth-child(1) {
      border: 8px solid #000;
      border-color: #000 transparent transparent transparent;
      animation: circle-move-1 6s cubic-bezier(.76,0,.63,1) 0.25s infinite;
    }

    div:nth-child(2) {
      border: 8px solid #000;
      border-color: transparent #000 transparent transparent;
      animation: circle-move-2 6s cubic-bezier(.76,0,.63,1) 0.5s infinite;
    }

    @keyframes circle-move-1 {
      0% {
        border-color: #000 transparent transparent transparent;
      }
      25% {
        border-color: transparent #000 transparent transparent;
        transform: rotate(360deg);
      }
      50% {
        border-color: transparent transparent #000 transparent;
        transform: rotate(720deg);
      }
      75% {
        border-color: transparent transparent transparent #000;
        transform: rotate(1080deg);
      }
    }

    @keyframes circle-move-2 {
      0% {
        border-color: transparent #000 transparent transparent;
      }
      25% {
        border-color: transparent transparent #000 transparent;
        transform: rotate(360deg);
      }
      50% {
        border-color: transparent transparent transparent #000;
        transform: rotate(720deg);
      }
      75% {
        border-color: #000 transparent transparent transparent;
        transform: rotate(1080deg);
      }
    }
  `;

  return (
    <div css={styling} onClick={() => dispatch(setModalShow(true))}>
  	  <div></div>
  	  <div></div>
  	</div>
  );
}

export default CircleRotate;
