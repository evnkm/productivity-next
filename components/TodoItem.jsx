import React from "react";

const TodoItem = ({ time, text }) => {
  return (
    <div>
      <p>{time}</p>
      <text>{text}</text>
    </div>
  );
};

export default TodoItem;
