const levelReducer = (state = 1, action) => {
    switch (action.type) {
        case "SET_LEVEL":
            return state+action.payload;
        case "SET_LEVEL_FROM_LOCALSTORAGE":
            return action.payload;
        default:
            return state
    }
}
export default levelReducer;