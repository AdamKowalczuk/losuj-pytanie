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

export const setExp = (exp) => {
    return {
        type: 'SET_EXP',
        payload: exp
    }
};

export const setLevel = (level) => {
    return {
        type: 'SET_LEVEL',
        payload: level
    }
};

export const setRequiredExp= (requiredExp) => {
    return {
        type: 'SET_REQUIRED_EXP',
        payload: requiredExp
    }
};


