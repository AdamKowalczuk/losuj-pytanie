const isMenuDisabledReducer = (state = false, action) => {
  switch (action.type) {
    case "DISABLE_MENU":
      return !state;
    default:
      return state;
  }
};
export default isMenuDisabledReducer;
