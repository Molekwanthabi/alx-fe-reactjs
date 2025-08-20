import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "/components/AddTodoForm";

export default function App() {
  return (
    <div className="App">
      <TodoList />
      <AddTodoForm />
    </div>
  );
}
