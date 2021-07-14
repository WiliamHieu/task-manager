import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  //task, setTasks for access to update or show array
  const [tasks, setTasks] = useState([
    { task: "read the book", id: 1 },
    { task: "Wash the car", id: 2 },
    { task: "Write the book", id: 3 },
  ]);

  return (
    //create contact provider for sharing state through components
    // property value is tasks
    <TaskListContext.Provider value={{ tasks }}>

      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
