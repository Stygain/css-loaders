export const SET_MODAL_SHOW = 'SET_MODAL_SHOW';
export const SET_SLIDE_INDEX = 'SET_SLIDE_INDEX';
export const RANDOMIZE_MENU_COLOR = 'RANDOMIZE_MENU_COLOR';

export function setModalShow(show) {
  console.log("Set modal show");
  return { type: SET_MODAL_SHOW, show };
}

export function setSlideIndex(index) {
  console.log("Set slide index");
  return { type: SET_SLIDE_INDEX, index };
}

export function randomizeMenuColor() {
  console.log("Randomize menu color");
  return { type: RANDOMIZE_MENU_COLOR };
}
