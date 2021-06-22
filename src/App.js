import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => getLocal(), []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveLocal();
  }, [todos, status]);

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
