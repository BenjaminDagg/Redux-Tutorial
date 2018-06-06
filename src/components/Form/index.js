import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo} from "../../actions";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
          text: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }


    /* called when add button pressed */
    handleSubmit(event) {
        //prevents page form reloading on form submit
        event.preventDefault();

        //calls addTodo dispatch passed in as prop from connect
        this.props.addTodo(this.state.text);

        //reset form text
        this.setState({text: ''});
    }



    /* called when form text changes */
    onTextChange(event) {
        //update state text with entered text
        this.setState({text: event.target.value});
    }

    render() {

        return(
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.onTextChange}>
                    <input type='text' placeholder='Enter new todo' value={this.state.text} />
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(addTodo(text))
        }
    };
};



export default connect(null, mapDispatchToProps)(Form);