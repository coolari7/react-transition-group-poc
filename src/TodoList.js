import React from "react";
import { Todo } from "./Todo";
import { useTodos } from "./TodoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css";

export function TodoList() {
  const { todos } = useTodos();

  const mapTodos = todos.map((todo) => (
    <CSSTransition key={todo.id} timeout={500} classNames="slide">
      <Todo key={todo.id} title={todo.title} id={todo.id} />
    </CSSTransition>
  ));
  return (
    <TransitionGroup className="grid gap-2 pt-2">{mapTodos}</TransitionGroup>
  );
}
