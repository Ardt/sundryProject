import React, { Component } from 'react';

class TodoList extends Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </ul>
      );
    }
  }
 
export default TodoList;