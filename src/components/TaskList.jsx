import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="w-full max-w-md">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
      ) : (
        <p className="text-gray-500">No tasks available!</p>
      )}
    </div>
  );
}

export default TaskList;
