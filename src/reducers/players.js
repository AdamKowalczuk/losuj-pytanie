let players=[
    {
        name:'Gracz 1',
        // isActive:true,
    },

];
let newPlayers;

const playersReducer = (state = players, action) => {

    switch (action.type) {
        case "SET_PLAYERS":
            newPlayers=players;
            newPlayers.push({
                name:action.payload,
            },);
            return newPlayers;
        case "DELETE_PLAYER":
            newPlayers=players;
            newPlayers.pop();
            return newPlayers;
        default:
            return state
    }
}

export default playersReducer;