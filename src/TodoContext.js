import React from "react";

const TodoContext = React.createContext([]);
const INIT_STATE = [];
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export function useTodos() {
  return React.useContext(TodoContext);
}

function todoReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export function TodoProvider({ children, initState = INIT_STATE }) {
  const [state, dispatch] = React.useReducer(todoReducer, initState);

  const provider = React.useMemo(
    () => ({
      todos: state,
      addTodo: (title) => dispatch(addTodo(title)),
      removeTodo: (id) => dispatch(removeTodo(id)),
    }),
    [state]
  );

  return (
    <TodoContext.Provider value={provider}>{children}</TodoContext.Provider>
  );
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      title,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}
