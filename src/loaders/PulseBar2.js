/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions.js';

function PulseBar2() {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid green; */}

    cursor: pointer;

    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 15px;
      height: 90px;
      background-color: #BBB;
    }

    div:nth-child(1) {
      animation: pulse .6s ease 0s infinite alternate;
    }

    div:nth-child(2) {
      animation: pulse .6s ease 0.2s infinite alternate;
    }

    div:nth-child(3) {
      animation: pulse .6s ease .4s infinite alternate;
    }

    div:nth-child(4) {
      animation: pulse .6s ease 0.4s infinite alternate;
    }

    div:nth-child(5) {
      animation: pulse .6s ease 0.2s infinite alternate;
    }

    div:nth-child(6) {
      animation: pulse .6s ease 0s infinite alternate;
    }


    @keyframes pulse {
      from {
        opacity: 1;
        transform: scale(1);
        background-color: #000;
      }
      to {
        opacity: .4;
        transform: scale(.75);
        background-color: #BBB;
      }
    }
  `;

  return (
    <div css={styling} onClick={() => dispatch(setModalShow(true))}>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	</div>
  );
}

export default PulseBar2;
