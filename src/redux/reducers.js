import { combineReducers } from 'redux';

import {
  SET_MODAL_SHOW,
  SET_SLIDE_INDEX,
  RANDOMIZE_MENU_COLOR,
} from './actions.js';


function modalShowReducer(state = false, action) {
  switch (action.type) {
    case SET_MODAL_SHOW:
      return action.show;

    default:
      return state;
  }
}

function slideIndexReducer(state = 0, action) {
  switch (action.type) {
    case SET_SLIDE_INDEX:
      return action.index;

    default:
      return state;
  }
}

const colors = [
  "rgb(149, 189, 178)",
  "rgb(149, 159, 189)",
  "rgb(169, 189, 149)",
  "rgb(189, 149, 174)"
]

// console.log("MATH")
// var randomNum = Math.random();
// console.log(randomNum)
// console.log((randomNum * (colors.length - 1)))
// console.log(Math.round(randomNum * (colors.length - 1)))

function randomizeMenuColorReducer(state = "rgb(149, 189, 178)", action) {
  switch (action.type) {
    case RANDOMIZE_MENU_COLOR:
      // Do randomizing here
      var newColor = state;
      console.log("current color: " + state);
      while (newColor === state) {
        console.log("am i in here");
        newColor = colors[Math.round(Math.random() * (colors.length - 1))]
        console.log("new color?: " + newColor);
      }
      return newColor;

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  modalShow: modalShowReducer,
  slideIndex: slideIndexReducer,
  currMenuColor: randomizeMenuColorReducer,
});

export default rootReducer;
