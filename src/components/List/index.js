import React, { Component } from 'react';
import TodoItem from '../TodoItem/index';

class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var self = this;
        var list = this.props.todos.map((todo, index) => {

            return (<TodoItem key={index} todo={todo} index={index} onClick={() => this.props.toggleTodo(index)}></TodoItem>);
        });

        return(
            <div>
                {list}
            </div>
        );
    }

}

export default (List);