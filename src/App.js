import React from "react";
import { useTodos } from "./TodoContext";
import { TodoList } from "./TodoList";

export default function App() {
  const [title, setTitle] = React.useState("");
  const { addTodo } = useTodos();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="m-2 text-sm text-gray-600">
      <form className="grid sm:flex gap-2" onSubmit={onFormSubmit}>
        <input
          required
          type="text"
          minLength="5"
          value={title}
          onChange={onTitleChange}
          placeholder="Buy eggs..."
          className="border-2 sm:flex-grow border-gray-300 p-2 outline-none focus:border-indigo-600"
        />
        <button
          type="submit"
          className="outline-none text-white bg-indigo-600 font-bold rounded-sm p-2"
        >
          Add Todo
        </button>
      </form>
      <TodoList />
    </div>
  );
}
