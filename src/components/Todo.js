import React from "react";
import Items from "./Items";

const Todo = props => {
  return (
    <ul className="list">
      {props.todos.map((val, index) => {
        return (
          <Items
            key={index}
            index={index}
            val={val}
            toggle={props.toggle}
            del={props.del}
          />
        );
      })}
    </ul>
  );
};

export default Todo;
