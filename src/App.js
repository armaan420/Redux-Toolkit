import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, completed, reset } from "./todoSlice";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const { list } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(text);

    setText(" ");

    dispatch(
      add({
        text,
        completed: false,
        id: Date.now(),
      })
    );
  };

  const toggleTodo = (id) => {
    dispatch(completed(id));
  };

  return (
    <div>
      <div className="card">
        <div className="search-bar">
          <input
            placeholder="todo.."
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="list-container">
          {list &&
            list.map((task) => (
              <div key={task.id}>
                <p
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </p>
                <input type="checkbox" onChange={() => toggleTodo(task.id)} />
              </div>
            ))}
        </div>
        <button onChange={() => dispatch(reset())}>Clear</button>
      </div>
    </div>
  );
}

export default App;
