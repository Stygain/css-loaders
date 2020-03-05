/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch, useSelector } from 'react-redux';
import { getModalShow } from './redux/selectors.js';
import { setModalShow } from './redux/actions.js';

function Modal(props) {
  const modalShow = useSelector(getModalShow);

  const dispatch = useDispatch();

  const styling = css`
    border: 1px solid red;

    @import url('https://fonts.googleapis.com/css?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;

    position: absolute;
    z-index: 1;
    opacity: 0%;
    background-color: rgb(149, 189, 178);
    text-align: center;
    margin: 0;

    top: -100%;
    left: 0%;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: 0.8s ease-in-out 0.2s;

    &.open {
      opacity: 100%;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      transition: 0.8s ease-in-out;
    }

    .background {
      ${'' /* border: 1px solid blue; */}

      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;

      background-color: rgb(255, 166, 143);

      cursor: pointer;
    }

    .menu {
      border: 1px solid red;

      min-width: 50%;
      height: 50%;
      margin-bottom: 200%;
      border-radius: 10px;
      padding: 10px;
      ${'' /* margin: 10px; */}

      background-color: rgb(255, 255, 255);
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      ${'' /* overflow-x: hidden; */}
      ${'' /* overflow-y: scroll; */}
      overflow: hidden;

      transition: 0.8s ease-in-out 0s;
    }

    .menu.open {
      margin-bottom: 0;

      transition: 0.8s ease-in-out 0.3s;
    }

    .text-container {
      border: 1px solid blue;

      position: relative;

      background-color: rgb(255, 255, 255);
      text-align: left;
      width: 100%;

      transition: background-color 0.3s ease;
    }

    .text-container.css {
      overflow-y: scroll;
    }

    .text-container:hover {
      background-color: rgb(236, 236, 236);
    }

    .text-container .type-tag {
      border: 1px solid green;

      position: absolute;
      top: 0;
      right: 0;

      ${'' /* width: 35px; */}
      ${'' /* height: 10px; */}
      padding: 5px;
      border-radius: 3px;
    }

    pre {
      display: block;
      font-family: monospace;
      white-space: pre;
      margin: 1em 0;
    }
  `;
  return (
    <div css={styling} className={modalShow === true ? "open" : ""}>
      <div className="background" onClick={() => dispatch(setModalShow(false))}></div>
      <div className={modalShow === true ? "menu open" : "menu"}>
        <div className="text-container html">
          <div className="type-tag">
            HTML
          </div>
          <pre>
            <code>
              &#60;div&#62;
            	<br />  &#60;div&#62;&#60;/div&#62;
            	<br />  &#60;div&#62;&#60;/div&#62;
            	<br />&#60;/div&#62;
            </code>
          </pre>
        </div>
        <div className="text-container css">
          <div className="type-tag">
            CSS
          </div>
          <pre>
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
              <br />div:nth-child(2) {'{'}
              <br />  border: 8px solid;
              <br />  border-color: transparent rgb(55, 159, 228) transparent transparent;
              <br />  animation: border-color-2 6s cubic-bezier(.76,0,.63,1) 0.5s infinite;
              <br />{'}'}
              <br />div:nth-child(3) {'{'}
              <br />  border: 8px solid;
              <br />  border-color: transparent transparent rgb(55, 159, 228) transparent;
              <br />  animation: border-color-3 2s cubic-bezier(.76,0,.63,1) 0s infinite;
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
        </div>
        {/* <div className="item">
          Adam Barton
        </div>
        <div className="item link">
          <a href="https://github.com/Stygain">
            Github
          </a>
        </div>
        <div className="item link">
          <a href="https://stygain.github.io/northwestvision/">
            Photography
          </a>
        </div> */}
      </div>
  	</div>

  );
}

export default Modal;
