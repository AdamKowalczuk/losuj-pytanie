const requiredExpReducer = (state = 10, action) => {
  switch (action.type) {
    case "SET_REQUIRED_EXP":
      return Math.round(state * action.payload);
    case "SET_REQUIREDEXP_FROM_LOCALSTORAGE":
      return action.payload;
    default:
      return state;
  }
};
export default requiredExpReducer;
