let players = [
  {
    name: "Gracz 1",
  },
];
let newPlayers;
const playersReducer = (state = players, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      newPlayers = players;
      newPlayers[action.id].name = action.payload;
      return newPlayers;
    case "SET_PLAYERS":
      newPlayers = players;
      newPlayers.push({
        name: action.payload,
      });
      return newPlayers;
    case "DELETE_PLAYER":
      newPlayers = players;
      newPlayers.pop();
      return newPlayers;
    default:
      return state;
  }
};
export default playersReducer;
