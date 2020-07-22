import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");



// Data를 바꾸고 Modifiy하는 것을 책임짐.(Modify의 의미를 찾고 수정함)  
// reducer나 modifier는 처음으로 Data를 변경해 줌.
// return 값 : Application의 Data
// redux : 유일하게 reducer로만 Data 값을 변경할 수 있다.
const countModifier = (count = 0) => {
    // ... modify state
    return count;
};

// countModifier를 initial state로 불러옴. => state 기본값 지정 가능
const countStore = createStore(countModifier);