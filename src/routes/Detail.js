import React from "react";
//import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
    //const id = useParams();
    //console.log("Detail", id);

    // 해당 창에서 새로고침하면 toDo 객체가 없어진다. (state가 없어지기 때문)
    // 이 때, toDo? 로 해놓으면 toDo 객체가 있을 때만 해당 문장을 실행한다.
    return (
        <>
          <h1>{toDo?.text}</h1>
          <h5>Created at: {toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const {
      match: {
        params: { id }
      }
    } = ownProps;
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);