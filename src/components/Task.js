import React from "react";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Task = () => {
  return (
    <li className="list-item">
      <span>Task title</span>
      <div>
        <button className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};
export default Task;
