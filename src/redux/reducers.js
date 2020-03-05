import { combineReducers } from 'redux';

import {
  SET_MODAL_SHOW
} from './actions.js';


function modalShowReducer(state = false, action) {
  switch (action.type) {
    case SET_MODAL_SHOW:
      return action.show;

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  modalShow: modalShowReducer,
});

export default rootReducer;
