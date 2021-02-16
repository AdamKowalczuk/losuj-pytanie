const expReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_EXP":
            return state+action.payload;
        case "SET_EXP_FROM_LOCALSTORAGE":
            return action.payload;
        default:
            return state
    }
}
export default expReducer;