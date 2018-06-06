import { ADD_TODO, TOGGLE_STATUS } from "../actions";

const initialState = {
    todos: []
};

/* reducers */
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_STATUS:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index == action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
        default:
            return state;
    }
}

export default rootReducer;