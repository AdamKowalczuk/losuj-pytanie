
let questions = [
    {
        description: "Ile masz lat?",
        isUsed: false,
        category: "Prywatne",

    },
    {
        description: "Jak masz na imię?",
        isUsed: false,
        category: "Osobiste",

    },
    {
        description: "Czy masz psa?",
        isUsed: false,
        category: "Zwierzęce",

    }
];
let generalQuestions = [
    {
        description: "Czym się interesujesz?",
        isUsed: false,
        category: "Ogólne",

    },
    {
        description: "Jaka jest twoja ulubiona potrawa?",
        isUsed: false,
        category: "Ogólne",

    },
    {
        description: "Czy masz psa?",
        isUsed: false,
        category: "Ogólne",

    },

];

let forwardLookingQuestions = [
    {
        description: "Gdzie widzisz siebie za 10 lat?",
        isUsed: false,
        category: "Przyszłościowe",

    },
    {
        description: "Gdzie chcesz pracować w przyszłości?",
        isUsed: false,
        category: "Przyszłościowe",

    },
    {
        description: "Czy chcesz mieć dzieci?",
        isUsed: false,
        category: "Przyszłościowe",

    },
];


const actualQuestionReducer = (state = questions, action) => {

    switch (action.type) {
        case "SET_QUESTIONS":
            return state;
        case "SET_ACTUAL_QUESTION":
            let availableQuestions = [];
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].isUsed === false) {
                    availableQuestions.push(questions[i])
                }
            }
            console.log(availableQuestions);
            if (availableQuestions.length === 0) {
                return {
                    description: "Zadałeś wszystkie pytania!",
                    category: "Brak pytań",
                };
            }
            else {
                let random = Math.floor(Math.random() * availableQuestions.length);
                console.log(random);
                availableQuestions[random].isUsed = true;
                return availableQuestions[random];
            }

        default:
            return {
                description: "Losuj pytanie",
                isUsed: false,
                category: "Losowe",
            };
    }
}

export default actualQuestionReducer;