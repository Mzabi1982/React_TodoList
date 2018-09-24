import React from "react";

const Forme = props => {
  return (
    <form onSubmit={props.formsubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        onChange={props.change}
        type="text"
        id="newtodo"
        value={props.newtodo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forme;
