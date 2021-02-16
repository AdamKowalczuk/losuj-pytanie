const isAchievementsOpenReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_ACHIEVEMENTS_OPEN":
      return !state;
    default:
      return state;
  }
};
export default isAchievementsOpenReducer;
