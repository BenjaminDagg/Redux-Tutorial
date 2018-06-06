import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from "../../actions";

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: index => {
            dispatch(toggleTodo(index));
        }

    };
};

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.toggleStatus = this.toggleStatus.bind(this);
    }



    toggleStatus() {
        this.props.toggleTodo(this.props.index);
    }

    render() {

        var todoText = {
            'width' : '80%',
            'position' : 'relative',
            'left' : '0'
        };
        this.props.todo.completed ? todoText.color = 'green' : todoText.color = 'pink';

        var todoStyle = {
            'height' : '50px',
            'border': '1px solid black',
            'width' : '400px'
        };

        return(
            <div style={todoStyle}>
                <span>{this.props.index + 1}</span>
                <span style={todoText}>{this.props.todo.text}</span>
                <button onClick={this.toggleStatus}>Complete</button>
            </div>
        );
    }

}


export default connect(null, mapDispatchToProps)(TodoItem);