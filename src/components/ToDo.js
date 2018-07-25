import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
                <span> { this.props.description } </span>
                <button deleteTodo={this.props.deleteTodo} onClick={this.deleteTodo.bind(item)}>Delete</button> 
            </li>
        );
    }
}

export default ToDo;