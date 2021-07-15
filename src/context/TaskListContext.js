import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  //task, setTasks for access to update or show array
  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItems] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTask = () => {
    setTasks([]);
  };

  const editTask = (title, id) => {
    // if task id same, return new task or return current task
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    console.log(newTasks);
    setTasks(newTasks);
    setEditItems(null);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItems(item);
  };

  return (
    //create contact provider for sharing state through components
    // property value is tasks
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
