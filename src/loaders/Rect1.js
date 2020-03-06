/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions.js';

function Rect1() {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid green; */}

    cursor: pointer;

    width: 80px;
    height: 10px;
    position: relative;

    div {
      width: 10px;
      height: 10px;
      background-color: rgb(0, 0, 0);
      position: absolute;
      top: 0;
      left: 0;
    }

    div:nth-child(1) {
      animation: move 1s ease 0s infinite alternate;
    }


    @keyframes move {
      0% {
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
      }
      50% {
        top: 0;
        left: 0;
        width: 80px;
        height: 10px;
        background-color: rgb(140, 140, 140);
      }
      100% {
        top: 0;
        left: 70px;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 0, 0);
      }
    }
  `;

  return (
    <div css={styling} onClick={() => dispatch(setModalShow(true))}>
  	  <div></div>
  	</div>
  );
}

export default Rect1;
