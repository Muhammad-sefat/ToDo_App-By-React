import React, { useEffect, useState } from "react";

function InputBox({ addTask, currentTask, updateTask }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (currentTask) {
      setInputValue(currentTask.text); // Populate input when editing
    } else {
      setInputValue(""); // Clear input when no task is being edited
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (currentTask) {
      updateTask(currentTask.id, inputValue); // Update task if editing
    } else {
      addTask(inputValue); // Add new task if not editing
    }
    setInputValue(""); // Clear input after submission
  };

  return (
    <div className="flex items-center mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 mb-4 w-full max-w-md"
      >
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {currentTask ? "Update Task" : "Add Task"} {/* Change label */}
        </button>
      </form>
    </div>
  );
}

export default InputBox;
