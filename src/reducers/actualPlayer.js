
const actualPlayerReducer = (state = 0, action) => {

    switch (action.type) {
        case "CHANGE_ACTUAL_PLAYER":
            if(state===action.payload-1){
                state=0
                return state;
            }
            else{
                return state+1;
            }

        default:
            return state
    }
}

export default actualPlayerReducer;