import { combineReducers } from 'redux';

import {
  SET_MODAL_SHOW,
  SET_SLIDE_INDEX,
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


const rootReducer = combineReducers({
  modalShow: modalShowReducer,
  slideIndex: slideIndexReducer,
});

export default rootReducer;
