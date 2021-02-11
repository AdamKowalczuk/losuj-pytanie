let players=[
    {
        name:'Gracz 1',
        isActive:true,
    },
    {
        name:'Gracz 2',
        isActive:true,
    },
    {
        name:'Gracz 3',
        isActive:false,
    },
    {
        name:'Gracz 4',
        isActive:false,
    }
];


const playersReducer = (state = players, action) => {

    switch (action.type) {
        case "SET_PLAYERS":
            return action.payload;

        default:
            return state
    }
}

export default playersReducer;