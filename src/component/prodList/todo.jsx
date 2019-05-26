import React, { Component } from 'react';
import TodoList from './todoList'

class TodoApp extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { items: [], text: ''};
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
            <button> Add #{this.state.items.length + 1} </button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: Date.now() + this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
    
  export default TodoApp;
  