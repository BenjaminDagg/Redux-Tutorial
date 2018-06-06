import { connect } from 'react-redux';
import List from '../../components/List/index';
import { toggleTodo } from "../../actions/index";

const mapStateToProps = state => {
    return { todos: state.todos};
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: index => dispatch(toggleTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);