import React from "react";

const Items = props => {
  const { val, index } = props;
  return (
    <li key={val.title}>
      <input
        onChange={e => props.toggle(e, index)}
        id="check"
        type="checkbox"
      />
      <span className={val.done ? "done" : " "}>{val.title}</span>
      <button
        className="btn btn-danger"
        onClick={e => props.del(index)}
        id="bot"
      >
        del
      </button>
    </li>
  );
};
export default Items;
