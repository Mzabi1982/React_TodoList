import React, { Component } from "react";
import "./App.css";
import Forme from "./components/Forme";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Todo App",
      newtodo: "",
      todos: [
        { title: "learn react", done: false },
        { title: "learn JS", done: true }
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
    const field = event.target.elements.inpute.value;

    //console.log(this.state.newtodo);

    if (field) {
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
    } else {
      alert("Please Enter Todo....");
      return false;
    }

    // this.state.todos.push({      we dont wanna use that cause its bad if we change state value
    //   title: this.state.newtodo,
    //   done: false
    // });

    // this.setState({
    //   todos: this.state.todos
    // });
  }

  toggle(event, index) {
    // console.log(index);

    // we give react copy of state not changing it

    const todos = [...this.state.todos]; // copy of the array
    todos[index] = { ...todos[index] }; // copy of todo
    todos[index.done] = event.target.checked; // update done property
    console.log(todos);
    this.setState({
      todos
    });
  }

  del(index) {
    console.log(index);
    const todos = [...this.state.todos]; // copy of the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <Forme
          newtodo={this.state.newtodo}
          change={this.change.bind(this)}
          formsubmit={this.formsubmit.bind(this)}
        />
        <Todo
          todos={this.state.todos}
          toggle={this.toggle.bind(this)}
          del={this.del.bind(this)}
        />
      </div>
    );
  }
}

export default App;
