import React, { useState } from "react";
import InputBox from "./components/inputBox";
import TaskList from "./components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const updateTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
    setCurrentTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-5">React To-Do App</h1>
      <InputBox
        addTask={addTask}
        currentTask={currentTask}
        updateTask={updateTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
