export const SET_MODAL_SHOW = 'SET_MODAL_SHOW';

export function setModalShow(show) {
  console.log("Set modal show");
  return { type: SET_MODAL_SHOW, show };
}
