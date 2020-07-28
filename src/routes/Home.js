import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        // onSubmit 기본 기능 : Refresh를 막기 위한 코드
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        // <> </> 태그 : React Fragments 문법
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

// mapDispatchToProps : 함수를 Props로 Component에 전달.
function mapDispatchToProps(dispatch) {
    return {
      // addToDo 함수를 만들어 전달 : text라는 변수를 받아 actionCreators.addToDo 함수에 넣어 action 객체를 만들어 dispatch.
      addToDo: text => dispatch(actionCreators.addToDo(text))
    };
  }

// mapStateToProps 함수를 이용하여 Home Component에 Prop 전달.
// 전달되는 Props : react-router에서 온 Props(Router, Route)
//                + mapStateToProps에서 return되는 값.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
