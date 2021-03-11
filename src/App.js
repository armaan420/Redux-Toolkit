import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, completed, reset } from "./todoSlice";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [text, setText] = useState("");

  const list = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    setText("");
    {
      text.trim() &&
        dispatch(
          add({
            text: text.trim(),
            completed: false,
            id: Date.now(),
          })
        );
    }
  };

  const toggleTodo = (id) => {
    dispatch(completed(id));
  };

  const removeTask = (id) => {
    dispatch(remove(id));
  };

  const resetTasks = () => {
    console.log("asdasd");
    dispatch(reset());
  };

  return (
    <div>
      <div className="card">
        <div className="search-bar">
          <input
            placeholder="todo.."
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <button className="btn" onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="list-container">
          {list &&
            list.map((task) => (
              <div key={task.id} className="task">
                <li
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </li>
                <div className="update-div">
                  <input
                    type="checkbox"
                    onChange={() => toggleTodo(task.id)}
                    value={text}
                  />
                  <button onClick={() => removeTask(task.id)}>
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button onClick={() => resetTasks()} className="footer-btn">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
