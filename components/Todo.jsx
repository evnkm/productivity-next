import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const currentdate = new Date();
    const datetime =
      currentdate.getMonth() +
      1 +
      "/" +
      currentdate.getDate() +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const newTodo = {
      time: datetime,
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1 className="text-white">Week of 7/8/24</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
