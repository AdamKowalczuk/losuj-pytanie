// import { act } from 'react-dom/test-utils';
// import * as actions from './actionTypes'

// let lastId = 0
// let questions = [

//     {
//         description: "Jak masz na imię?",
//         id: 1
//     },
//     {
//         description: "Ile masz lat?",
//         id: 2
//     },

// ]
// function drawAQuestion() {
//     let questionId = Math.floor(Math.random() * 99) + 1;
// }

// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case actions.BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false,
//                 }
//             ];
//         case actions.BUG_REMOVED:
//             return state.filter(bug => bug.id !== action.payload.id);
//         case actions.BUG_RESOLVED:
//             return state.map(bug =>
//                 bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
//         case actions.DRAW_RANDOM:

//         default:
//             return state
//     }
// }