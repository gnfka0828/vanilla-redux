import { createStore } from "redux";
// Store 내에 있는 함수
// dispatch, subscribe, getState, replaceReducer
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Data를 바꾸고 Modifiy하는 것을 책임짐.(Modify의 의미를 찾고 수정함)  
// reducer나 modifier는 처음으로 Data를 변경해 줌.
// return 값 : Application의 Data
// redux : 유일하게 reducer로만 Data 값을 변경할 수 있다.
// action으로 어떨 때 해당 data 값을 변경하는지 지시할 수 있다. (dispatch 이용)
const reducer = (state = [], action) => {
    // ... modify state

    // Refactor 
    // 1. Reducer에 if문 대신 switch문 사용
    // 2. action type을 미리 선언하여 사용(틀리게 입력 시 오류가 나서 알 수 있게 됨, 안전)
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
             return [];
        default:
             return state;
    }
};

// reducer를 initial state로 불러옴. => state 기본값 지정 가능
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch({ type: ADD_TODO, text: toDo });
};

// 두번째 인자로 function을 줘야 한다.
form.addEventListener("submit", onSubmit);