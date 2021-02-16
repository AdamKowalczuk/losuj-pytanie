const previousActiveReducer = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};
export default previousActiveReducer;
