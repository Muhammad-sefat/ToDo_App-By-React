import React, { useState } from "react";

function InputBox({ addTask }) {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        className="border px-4 py-2 mr-2"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default InputBox;
