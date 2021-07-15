import React from "react";
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Header from "./Header";
const App = () => {
  return (
    //wrap with this provider the entire application for share state and props

    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
