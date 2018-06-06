import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/index';

class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var list = this.props.todos.map((todo, index) => {

            return (<TodoItem key={index} todo={todo} index={index}></TodoItem>);
        });

        return(
            <div>
                {list}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { todos: state.todos};
};

export default connect(mapStateToProps)(List);