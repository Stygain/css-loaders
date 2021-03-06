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
      border: 8px solid;
      border-color: rgb(55, 159, 228) transparent transparent transparent;
      animation: border-color-1 6s cubic-bezier(.76,0,.63,1) 0.25s infinite;
    }

    div:nth-child(2) {
      border: 8px solid;
      border-color: transparent rgb(55, 159, 228) transparent transparent;
      animation: border-color-2 6s cubic-bezier(.76,0,.63,1) 0.5s infinite;
    }


    @keyframes border-color-1 {
      0% {
        border-color: rgb(55, 159, 228) transparent transparent transparent;
      }
      25% {
        border-color: transparent rgb(215, 98, 238) transparent transparent;
        transform: rotate(360deg);
      }
      50% {
        border-color: transparent transparent rgb(241, 78, 8) transparent;
        transform: rotate(720deg);
      }
      75% {
        border-color: transparent transparent transparent rgb(241, 211, 8);
        transform: rotate(1080deg);
      }
      100% {
        border-color: rgb(55, 159, 228) transparent transparent transparent;
      }
    }

    @keyframes border-color-2 {
      0% {
        border-color: transparent rgb(55, 159, 228) transparent transparent;
      }
      25% {
        border-color: transparent transparent rgb(215, 98, 238) transparent;
        transform: rotate(360deg);
      }
      50% {
        border-color: transparent transparent transparent rgb(241, 78, 8);
        transform: rotate(720deg);
      }
      75% {
        border-color: rgb(241, 211, 8) transparent transparent transparent;
        transform: rotate(1080deg);
      }
      100% {
        border-color: transparent rgb(55, 159, 228) transparent transparent;
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
