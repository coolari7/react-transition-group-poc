import React from "react";
import { useTodos } from "./TodoContext";

export function Todo({ title, id }) {
  const { removeTodo } = useTodos();

  const onDelete = () => {
    removeTodo(id);
  };

  return (
    <div className="flex items-center justify-between shadow-md border py-2 px-4 rounded-full">
      <span>{title}</span>
      <button
        type="button"
        onClick={onDelete}
        className="font-bold text-gray-400"
      >
        <span className="text-sm font-bold material-icons">clear</span>
      </button>
    </div>
  );
}
