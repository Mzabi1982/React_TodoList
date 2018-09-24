import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "hellow from coding garden",
      newtodo: "",
      todos: [
        { title: "learn react", done: "false" },
        { title: "learn JS", done: "true" }
      ]
    };
  }

  change(event) {
    //console.log(event.target.value);

    this.setState({
      newtodo: event.target.value
    });
  }

  formsubmit(event) {
    event.preventDefault();
    console.log(this.state.newtodo);
    this.setState({
      newtodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newtodo,
          done: false
        }
      ]
    });

    // this.state.todos.push({      we dont wanna use that cause its bad if we change state value
    //   title: this.state.newtodo,
    //   done: false
    // });

    // this.setState({
    //   todos: this.state.todos
    // });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <form action="" onSubmit={e => this.formsubmit(e)}>
          <label htmlFor="todo">New Todo</label>
          <input
            onChange={e => this.change(e)}
            type="text"
            id="newtodo"
            value={this.state.newtodo}
          />
          <button type="submit">Submit</button>
          <ul>
            {this.state.todos.map(val => {
              return <li key={val.title}> {val.title} </li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
