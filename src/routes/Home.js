import React, { useState } from "react";

function Home() {
    const [text, setText] = useState("");
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
            <ul></ul>
        </>
    )
}

export default Home;