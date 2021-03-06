import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  //console.log("ToDo", id);

  return (
    <li>
      <Link to={`/${id}`}>
        {text} 
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

// mapDispatchToProps의 ownProps : react-redux로 인한 Props가 아닌 해당 component에 실제로 존재하는 Props.
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);