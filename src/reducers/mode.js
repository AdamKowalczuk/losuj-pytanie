const modeReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_GAMEMODE":
      return action.payload;
    default:
      return state;
  }
};
export default modeReducer;
