import store from '../store/index';
import { addTodo } from "../actions";


window.store = store;
window.addTodo = addTodo;