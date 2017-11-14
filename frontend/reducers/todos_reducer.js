import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";
import merge from 'lodash/merge';

// default state definition
const _defaultState = {
  todos: {}
}

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      })
      return newState;
    case RECEIVE_TODO:
      const updateState = {};
      updateState[action.todo.id] = action.todo;
      return merge({}, updateState, state);
    // case CLEAR:
    //   return _defaultState;
    default:
      return state;
  }
}

export default todosReducer;