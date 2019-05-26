import React, { Component } from 'react';

class TodoList extends Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <fieldset>
              <header>ITEM</header>
              <div key={item.id}>{item.text}</div>
            </fieldset>
          ))}
        </ul>
      );
    }
  }
 
export default TodoList;