/* action types */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

/* action creators */

/* Creates an ADD_TODO action.
   Text (string): text of todo object
 */
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    }
}

/* Creates TOGGLE_STATUS action which
   changes a todos completed property
   between true and false.
   Index (number): index of todos that you
   want to toggle
 */
export function toggleTodo(index) {
    return {
        type: TOGGLE_STATUS,
        index: index
    }
}