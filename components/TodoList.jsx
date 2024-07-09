import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-16">
      {todos.map((todo) => (
        <TodoItem time={todo.time} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
