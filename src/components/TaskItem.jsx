import React from "react";

function TaskItem({ task, deleteTask, serialNumber, editTask }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 shadow rounded">
      <p className="text-base">
        <span className="font-bold">{serialNumber}. </span> {task.text}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => editTask(task)}
          className="bg-orange-500 text-white px-3 rounded py-1"
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 rounded py-1"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
