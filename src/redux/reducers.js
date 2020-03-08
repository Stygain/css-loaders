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
  "rgb(211, 242, 179)",
  "rgb(189, 149, 174)",
  "rgb(219, 161, 91)"
]

function randomizeMenuColorReducer(state = "rgb(149, 189, 178)", action) {
  switch (action.type) {
    case RANDOMIZE_MENU_COLOR:
      var newColor = state;
      while (newColor === state) {
        newColor = colors[Math.round(Math.random() * (colors.length - 1))]
      }
      console.log("new color: " + newColor);
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
