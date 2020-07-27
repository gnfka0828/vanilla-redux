import { createStore } from "redux";
// Store 내에 있는 함수
// dispatch, subscribe, getState, replaceReducer
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
    return {
      type: ADD_TODO,
      text
    };
};
  
const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};

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
            return state.filter(toDo => toDo.id !== parseInt(action.id)) 
        default:
            return state;
    }
};

// reducer를 initial state로 불러옴. => state 기본값 지정 가능
const store = createStore(reducer);

// 스토어를 구독할 때는 subscribe 함수를 사용하는데, 이 함수는 함수 형태의 파라미터를 받는다.
// 파라미터로 전달된 함수는 스토어 상태에 변화가 일어날 때마다 호출한다.
// 이 subscribe 함수가 호출되면 반환 값으로 구독을 취소하는 unsubscribe 함수를 반환한다.
// 나중에 구독을 취소해야 할 때는 unsubscribe()를 입력하여 호출하면 된다.
store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
};
  
const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};
  
const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.innerText = "DEL";
      btn.addEventListener("click", dispatchDeleteToDo);
      li.id = toDo.id;
      li.innerText = toDo.text;
      li.appendChild(btn);
      ul.appendChild(li);
    });
};
  
store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

// 두번째 인자로 function을 줘야 한다.
form.addEventListener("submit", onSubmit);