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
    bgColor: "rgb(180, 203, 212)",
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 20px;
        <br />  height: 20px;
        <br />  border-radius: 50%;
        <br />  background-color: rgb(0, 0, 0);
        <br />  opacity: 0%;
<br />
        <br />  position: absolute;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  top: 0;
        <br />  left: 0;
        <br />  animation: move-1 5s ease 0s infinite;
        <br />  z-index: 1;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  top: 0;
        <br />  left: 30px;
        <br />  animation: move-2 5s ease 1s infinite;
        <br />  z-index: 2;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  top: 0;
        <br />  left: 60px;
        <br />  animation: move-3 5s ease 2s infinite;
        <br />  z-index: 3;
        <br />{'}'}
<br />
        <br />div:nth-child(4) {'{'}
        <br />  top: 0;
        <br />  left: 90px;
        <br />  animation: move-4 5s ease 3s infinite;
        <br />  z-index: 4;
        <br />{'}'}
<br />
<br />
        <br />@keyframes move-1 {'{'}
        <br />  0% {'{'}
        <br />    top: 0;
        <br />    left: 0;
        <br />  {'}'}
        <br />  10% {'{'}
        <br />    top: 0;
        <br />    left: 30px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  98% {'{'}
        <br />    opacity: 0%;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    top: 0;
        <br />    left: 30px;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes move-2 {'{'}
        <br />  0% {'{'}
        <br />    top: 0;
        <br />    left: 30px;
        <br />  {'}'}
        <br />  10% {'{'}
        <br />    top: 0;
        <br />    left: 60px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  98% {'{'}
        <br />    opacity: 0%;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    top: 0;
        <br />    left: 60px;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes move-3 {'{'}
        <br />  0% {'{'}
        <br />    top: 0;
        <br />    left: 60px;
        <br />  {'}'}
        <br />  10% {'{'}
        <br />    top: 0;
        <br />    left: 90px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  98% {'{'}
        <br />    opacity: 0%;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    top: 0;
        <br />    left: 90px;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes move-4 {'{'}
        <br />  0% {'{'}
        <br />    top: 0;
        <br />    left: 90px;
        <br />  {'}'}
        <br />  10% {'{'}
        <br />    top: 30px;
        <br />    left: 90px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  22% {'{'}
        <br />    top: 30px;
        <br />    left: 0px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  32% {'{'}
        <br />    top: 0;
        <br />    left: 0px;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  98% {'{'}
        <br />    opacity: 0%;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    top: 0;
        <br />    left: 0px;
        <br />  {'}'}
        <br />{'}'}
      </code>
    </pre>
  },
  {
    anim: <Square />,
    bgColor: "rgb(120, 84, 84)",
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
    css:
    <pre>
      <code>
        svg {'{'}
        <br />  position: fixed;
        <br />  top: 50%;
        <br />  left: 50%;
        <br />  transform: translate(-50%, -50%) rotate(225deg) scale(1);
        <br /> {'}'}
<br />
        <br />polyline {'{'}
        <br />  stroke-width: 10;
        <br />  fill: none;
        <br />{'}'}
<br />
        <br />stroke-still {'{'}
        <br />  stroke: rgb(34, 34, 34);
        <br />{'}'}
<br />
        <br />stroke-animation {'{'}
        <br />  animation: stroke-spacing 1.5s ease-in 0s infinite,
        <br />             stroke-color 6s linear 0s infinite;
        <br />  transform-origin: center;
        <br />{'}'}
<br />
<br />
        <br />keyframes stroke-spacing {'{'}
        <br />  0% {'{'}
        <br />    stroke-dasharray: 0 200;
        <br />  {'}'}
        <br />  45% {'{'}
        <br />    stroke-dashoffset: 0;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />  90% {'{'}
        <br />    stroke-dashoffset: -200;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    stroke-dashoffset: -200;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />keyframes stroke-color {'{'}
        <br />  0%  {'{'} stroke: rgb(55, 159, 228); {'}'}
        <br />  25% {'{'} stroke: rgb(215, 98, 238); {'}'}
        <br />  50% {'{'} stroke: rgb(241, 78, 8); {'}'}
        <br />  75% {'{'} stroke: rgb(241, 211, 8); {'}'}
        <br />  100% {'{'} stroke: rgb(55, 159, 228); {'}'}
        <br />{'}'}
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 20px;
        <br />  height: 100px;
        <br />  background-color: #BBB;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  animation: pulse .6s ease 0s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  animation: pulse .6s ease .2s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  animation: pulse .6s ease .4s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(4) {'{'}
        <br />  animation: pulse .6s ease .6s infinite alternate;
        <br />{'}'}
<br />
<br />
        <br />@keyframes pulse {'{'}
        <br />  from {'{'}
        <br />    opacity: 1;
        <br />    transform: scale(1);
        <br />    background-color: #000;
        <br />  {'}'}
        <br />  to {'{'}
        <br />    opacity: .4;
        <br />    transform: scale(.75);
        <br />    background-color: #BBB;
        <br />  {'}'}
        <br />{'}'}
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
        <br />  &#60;svg width="100" height="100" viewBox="0 0 90 90"&#62;
        <br />    &#60;polyline class="stroke-still" points="6,0 6,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-still" points="32,0 32,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-still" points="58,0 58,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-still" points="84,0 84,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation-outer" points="6,0 6,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation-inner" points="32,0 32,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation-inner" points="58,0 58,90"&#62;&#60;/polyline&#62;
        <br />    &#60;polyline class="stroke-animation-outer" points="84,0 84,90"&#62;&#60;/polyline&#62;
        <br />  &#60;/svg>
      	<br />&#60;/div&#62;
      </code>
    </pre>,
    css:
    <pre>
      <code>
        svg {'{'}
        <br />  ${'{'}'' /* border: 1px solid red; */{'}'}
<br />
        <br />  position: fixed;
        <br />  top: 50%;
        <br />  left: 50%;
        <br />  ${'{'}'' /* transform: translate(-50%, -50%) rotate(225deg) scale(1); */{'}'}
        <br />  transform: translate(-50%, -50%) scale(1);
        <br />{'}'}
<br />
        <br />polyline {'{'}
        <br />  stroke-width: 15;
        <br />  fill: none;
        <br />  opacity: 0%;
        <br />{'}'}
<br />
        <br />.stroke-still {'{'}
        <br />  stroke: rgb(34, 34, 34);
        <br />{'}'}
<br />
        <br />.stroke-animation-outer {'{'}
        <br />  animation: stroke-spacing 3s ease-in 0s infinite,
        <br />             stroke-color 6s linear 0s infinite;
        <br />  transform-origin: center;
        <br />{'}'}
<br />
        <br />.stroke-animation-inner {'{'}
        <br />  animation: stroke-spacing 3s ease-in 1.5s infinite,
        <br />             stroke-color 6s linear 0s infinite;
        <br />  transform-origin: center;
        <br />{'}'}
<br />
<br />
        <br />@keyframes stroke-spacing {'{'}
        <br />  0% {'{'}
        <br />    stroke-dasharray: 0 200;
        <br />    opacity: 0%;
        <br />    transform: scaleY(0.6);
        <br />  {'}'}
        <br />  12.25% {'{'}
        <br />    opacity: 75%;
        <br />    transform: scaleY(1);
        <br />  {'}'}
        <br />  22.5% {'{'}
        <br />    stroke-dashoffset: 0;
        <br />    stroke-dasharray: 200 200;
        <br />    opacity: 100%;
        <br />  {'}'}
        <br />  45% {'{'}
        <br />    stroke-dashoffset: -200;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />  50% {'{'}
        <br />    stroke-dashoffset: -200;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />  100% {'{'}
        <br />    stroke-dashoffset: -200;
        <br />    stroke-dasharray: 200 200;
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes stroke-color {'{'}
        <br />  0%  {'{'} stroke: rgb(55, 159, 228); {'}'}
        <br />  25% {'{'} stroke: rgb(215, 98, 238); {'}'}
        <br />  50% {'{'} stroke: rgb(241, 78, 8); {'}'}
        <br />  75% {'{'} stroke: rgb(241, 211, 8); {'}'}
        <br />  100% {'{'} stroke: rgb(55, 159, 228); {'}'}
        <br />{'}'}
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 15px;
        <br />  height: 90px;
        <br />  background-color: #BBB;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  animation: pulse .6s ease 0s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  animation: pulse .6s ease 0.2s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  animation: pulse .6s ease .4s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(4) {'{'}
        <br />  animation: pulse .6s ease 0.4s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(5) {'{'}
        <br />  animation: pulse .6s ease 0.2s infinite alternate;
        <br />{'}'}

        <br />div:nth-child(6) {'{'}
        <br />  animation: pulse .6s ease 0s infinite alternate;
        <br />{'}'}
<br />
<br />
        <br />@keyframes pulse {'{'}
        <br />  from {'{'}
        <br />    opacity: 1;
        <br />    transform: scale(1);
        <br />    background-color: #000;
        <br />  {'}'}
        <br />  to {'{'}
        <br />    opacity: .4;
        <br />    transform: scale(.75);
        <br />    background-color: #BBB;
        <br />  {'}'}
        <br />{'}'}
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 20px;
        <br />  height: 20px;
        <br />  border-radius: 50%;
        <br />  background-color: #BBB;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  animation: pulse .6s ease 0s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  animation: pulse .6s ease 0.2s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  animation: pulse .6s ease .4s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(4) {'{'}
        <br />  animation: pulse .6s ease 0.6s infinite alternate;
        <br />{'}'}
<br />
<br />
        <br />@keyframes pulse {'{'}
        <br />  from {'{'}
        <br />    opacity: 1;
        <br />    transform: scale(1);
        <br />    background-color: #000;
        <br />  {'}'}
        <br />  to {'{'}
        <br />    opacity: .4;
        <br />    transform: scale(.75);
        <br />    background-color: #BBB;
        <br />  {'}'}
        <br />{'}'}
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 20px;
        <br />  height: 20px;
        <br />  border-radius: 50%;
        <br />  background-color: #BBB;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0.2s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  animation: bubble .6s cubic-bezier(.6,0,.73,1.29) .4s infinite alternate;
        <br />{'}'}
<br />
        <br />div:nth-child(4) {'{'}
        <br />  animation: bubble .6s cubic-bezier(.6,0,.73,1.29) 0.6s infinite alternate;
        <br />{'}'}
<br />
<br />
        <br />@keyframes bubble {'{'}
        <br />  from {'{'}
        <br />    opacity: 1;
        <br />    background-color: #000;
        <br />  {'}'}
        <br />  to {'{'}
        <br />    opacity: .4;
        <br />    transform: translateY(15px);
        <br />    background-color: #BBB;
        <br />  {'}'}
        <br />{'}'}
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
    css:
    <pre>
      <code>
        div {'{'}
        <br />  width: 30px;
        <br />  height: 30px;
        <br />  border-radius: 50%;
        <br />  position: absolute;
        <br />{'}'}
<br />
        <br />div:nth-child(1) {'{'}
        <br />  animation: ripple 1.6s ease 0s infinite;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  animation: ripple 1.6s ease 0.4s infinite;
        <br />{'}'}
<br />
        <br />div:nth-child(3) {'{'}
        <br />  animation: ripple 1.6s ease 0.8s infinite;
        <br />{'}'}
<br />
<br />
        <br />@keyframes ripple {'{'}
        <br />  from {'{'}
        <br />    border: 5px solid;
        <br />    opacity: 1;
        <br />    top: 45%;
        <br />    left: 45%;
        <br />    width: 0px;
        <br />    height: 0px;
        <br />  {'}'}
        <br />  to {'{'}
        <br />    border: 5px solid;
        <br />    opacity: 0;
        <br />    top: 10%;
        <br />    left: 10%;
        <br />    width: 69px;
        <br />    height: 69px;
        <br />    transform: scale(1.3);
        <br />  {'}'}
        <br />{'}'}
      </code>
    </pre>
  },
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
    css:
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
        <br />  border: 8px solid #000;
        <br />  border-color: #000 transparent transparent transparent;
        <br />  animation: circle-move-1 6s cubic-bezier(.76,0,.63,1) 0.25s infinite;
        <br />{'}'}
<br />
        <br />div:nth-child(2) {'{'}
        <br />  border: 8px solid #000;
        <br />  border-color: transparent #000 transparent transparent;
        <br />  animation: circle-move-2 6s cubic-bezier(.76,0,.63,1) 0.5s infinite;
        <br />{'}'}
<br />
        <br />@keyframes circle-move-1 {'{'}
        <br />  0% {'{'}
        <br />    border-color: #000 transparent transparent transparent;
        <br />  {'}'}
        <br />  25% {'{'}
        <br />    border-color: transparent #000 transparent transparent;
        <br />    transform: rotate(360deg);
        <br />  {'}'}
        <br />  50% {'{'}
        <br />    border-color: transparent transparent #000 transparent;
        <br />    transform: rotate(720deg);
        <br />  {'}'}
        <br />  75% {'{'}
        <br />    border-color: transparent transparent transparent #000;
        <br />    transform: rotate(1080deg);
        <br />  {'}'}
        <br />{'}'}
<br />
        <br />@keyframes circle-move-2 {'{'}
        <br />  0% {'{'}
        <br />    border-color: transparent #000 transparent transparent;
        <br />  {'}'}
        <br />  25% {'{'}
        <br />    border-color: transparent transparent #000 transparent;
        <br />    transform: rotate(360deg);
        <br />  {'}'}
        <br />  50% {'{'}
        <br />    border-color: transparent transparent transparent #000;
        <br />    transform: rotate(720deg);
        <br />  {'}'}
        <br />  75% {'{'}
        <br />    border-color: #000 transparent transparent transparent;
        <br />    transform: rotate(1080deg);
        <br />  {'}'}
        <br />{'}'}
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
