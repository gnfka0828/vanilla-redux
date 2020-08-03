import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = ( state = [], action ) => {
//     switch(action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// createReducer 작업 방식 1. state mutate, 2. state 반환 : redux toolkit + immer에 의해.
// 2. state 반환 시에는 그 state는 꼭 새로운 state여야 한다.(무언가를 반환해야 한다.)
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
})

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;