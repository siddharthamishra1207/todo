import React, { useState } from 'react';
// Importing Tailwind CSS for styling and responsiveness
import './Todo.css'

const Todo = () => {
  // State variables to manage the task and list of tasks
  const [task, setTask] = useState('');
  const [act, setAct] = useState([]);

  // Function to add a task
  const added = () => {
    setAct((act) => {
      const updated = [...act, task];
      setTask('');
      return updated;
    });
  };

  // Function to remove a task
  function removed(i) {
    const updatedList = act.filter((_, id) => i !== id);
    setAct(updatedList);
  }

  // Function to edit a task
  const edited = (i, newTask) => {
    // Map through the current list of tasks
    const updatedList = act.map((ele, id) => {
      // Check if the current index matches the index of the task we want to edit
      if (id === i) {
        // If it matches, replace the current task with the new task
        return newTask;
      } else {
        // If it doesn't match, keep the task unchanged
        return ele;
      }
    });
    // Update the state with the modified list of tasks
    setAct(updatedList);
  };

  return (
    <> <div className=" flex justify-center " > 
    <div className="todo-container m-10 p-4 ">
      <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
      {/* Input field to enter a new task */}
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="border-2 border-gray-400 m-3 p-2 w-80"
        />
        <button onClick={added} className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
      {/* Display the list of tasks */}
      <div className="todo-list-container ">
        <h2 className="text-2xl font-bold mb-4">Tasks:</h2>
        <div className="todo-item-container">
          {act.map((data, i) => {
            return (
              <div key={i} className="todo-item">
                <h2> <span className="todo-text font-bold ">{data}</span> </h2>
                <div className="todo-item-buttons">
                  {/* Button to delete a task */}
                  <button onClick={() => removed(i)} className="bg-red-500 text-white p-2">
                    Delete
                  </button>
                  {/* Button to edit a task */}
                  <button
                    onClick={() => {
                      const newTask = prompt('Edit Task', data);
                      if (newTask !== null && newTask !== '') {
                        edited(i, newTask);
                      }
                    }}
                    className="bg-yellow-500 text-white p-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div></>
  );
};

export default Todo;