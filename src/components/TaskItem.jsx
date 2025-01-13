import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <div className="flex items-center justify-between bg-white p-2 mb-2 shadow">
      <p>{task.text}</p>
      <button
        className="bg-red-500 text-white px-2 py-1"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
