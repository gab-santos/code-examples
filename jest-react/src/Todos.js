import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

class Todos extends Component {
  render() {
    return (
      <div className="Todos">
        {this.props.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Todos);
