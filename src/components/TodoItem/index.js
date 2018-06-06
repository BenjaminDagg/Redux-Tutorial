import React, { Component } from 'react';


class TodoItem extends Component {

    constructor(props) {
        super(props);

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
                <button onClick={this.props.onClick}>Complete</button>
            </div>
        );
    }

}


export default TodoItem;