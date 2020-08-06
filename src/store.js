import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

/*
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// createReducer 작업 방식 1. state mutate, 2. state 반환 : redux toolkit + immer에 의해.
// 2. state 반환 시에는 그 state는 꼭 새로운 state여야 한다.(무언가를 반환해야 한다.)
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
})
*/

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

// ConfigureStore : Redux Developer Tools 사용 가능해짐.
export const {add, remove} = toDos.actions;

export default configureStore({ reducer: toDos.reducer });