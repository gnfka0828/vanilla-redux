import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
    const [text, setText] = useState("");
    console.log(props);

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        // onSubmit 기본 기능 : Refresh를 막기 위한 코드
        e.preventDefault();
        console.log(text);
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
            {/* <ul>{JSON.stringify(toDos)}</ul> */}
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

// mapStateToProps 함수를 이용하여 Home Component에 Prop 전달.
// 전달되는 Props : react-router에서 온 Props(Router, Route)
//                + mapStateToProps에서 return되는 값.
export default connect(mapStateToProps)(Home);
