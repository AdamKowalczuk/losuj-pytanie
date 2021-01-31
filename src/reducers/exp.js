
const expReducer = (state = 0, action) => {

    switch (action.type) {
        case "SET_EXP":
            return state+action.payload;
        default:
            return state
    }
}

export default expReducer;