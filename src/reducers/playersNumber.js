const playersNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return state+action.payload;
        default:
            return state
    }
}
export default playersNumberReducer;