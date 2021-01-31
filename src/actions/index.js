export const setActualQuestion = (category) => {
    return {
        type: 'SET_ACTUAL_QUESTION',
        payload:category
    }
};


export const setCategory = (category) => {
    return {
        type: 'SET_CATEGORY',
        payload: category
    }
};

export const setMode = (mode) => {
    return {
        type: 'SET_GAMEMODE',
        payload: mode
    }
};
