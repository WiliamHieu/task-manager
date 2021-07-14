import React from "react";
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";
import TaskList from "../components/TaskList";

const App = () => {
  return (
          //wrap with this provider the entire application for share state and props 

    <TaskListContextProvider>
      <div>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
