import { createStore } from "redux";
// Store 내에 있는 함수
// dispatch, subscribe, getState, replaceReducer

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// Data를 바꾸고 Modifiy하는 것을 책임짐.(Modify의 의미를 찾고 수정함)  
// reducer나 modifier는 처음으로 Data를 변경해 줌.
// return 값 : Application의 Data
// redux : 유일하게 reducer로만 Data 값을 변경할 수 있다.
// action으로 어떨 때 해당 data 값을 변경하는지 지시할 수 있다. (dispatch 이용)
const countModifier = (count = 0, action) => {
    // ... modify state

    if ( action.type === "ADD" ) {
        return count + 1 ;
    }
    else if ( action.type === "MINUS" ) {
        return count - 1 ;
    }
    else {
        return count ;
    }
};

// countModifier를 initial state로 불러옴. => state 기본값 지정 가능
const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () =>{
    countStore.dispatch({ type: "ADD" });
}

const handleMinus = () =>{
    countStore.dispatch({ type: "MINUS" });
}

// 두번째 인자로 function을 줘야 한다.
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);