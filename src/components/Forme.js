import React from "react";

const Forme = props => {
  return (
    <form onSubmit={props.formsubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        onChange={props.change}
        type="text"
        name="inpute"
        id="newtodo"
        value={props.newtodo}
        placeholder="Tape todo..."
      />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Forme;
