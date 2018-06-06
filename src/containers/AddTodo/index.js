import { connect } from 'react-redux';
import Form from '../../components/Form/index';
import { addTodo } from "../../actions";

const mapDispatchToProps = dispatch => ({

        addTodo: text => {
            dispatch(addTodo(text))
        }
});

export default connect(null, mapDispatchToProps)(Form);