/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions.js';

function Ripple() {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid green; */}

    cursor: pointer;

    width: 100px;
    height: 100px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
    }

    div:nth-child(1) {
      animation: ripple 1.6s ease 0s infinite;
    }

    div:nth-child(2) {
      animation: ripple 1.6s ease 0.4s infinite;
    }

    div:nth-child(3) {
      animation: ripple 1.6s ease 0.8s infinite;
    }


    @keyframes ripple {
      from {
        border: 5px solid;
        opacity: 1;
        top: 45%;
        left: 45%;
        width: 0px;
        height: 0px;
      }
      to {
        border: 5px solid;
        opacity: 0;
        top: 10%;
        left: 10%;
        width: 69px;
        height: 69px;
        transform: scale(1.3);
      }
    }
  `;

  return (
    <div css={styling} onClick={() => dispatch(setModalShow(true))}>
  	  <div></div>
  	  <div></div>
  	  <div></div>
  	</div>
  );
}

export default Ripple;
