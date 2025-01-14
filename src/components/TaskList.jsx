import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="w-full max-w-md">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            serialNumber={index + 1}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p className="text-gray-500 text-lg text-center mt-3">
          No tasks available!
        </p>
      )}
    </div>
  );
}

export default TaskList;
