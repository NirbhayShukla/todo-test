import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState({ edit: false, index: 0 });

  function addTask() {
    if (task.length !== 0) {
      if (!isEdit.edit) setTaskList([...taskList, task]);
      else {
        const updatedTaskList = taskList.map((t, i) => {
          if (i !== isEdit.index) return t;
          else return task;
        });
        setTaskList(updatedTaskList);
        setIsEdit({ edit: false, index: 0 });
      }
      setTask("");
    }
  }

  function edit(index) {
    setTask(taskList[index]);
    setIsEdit({ edit: true, index: index });
  }

  function deleteTask(index) {
    const newtaskList = taskList.filter((task, i) => i !== index);
    setTaskList(newtaskList);
  }

  return (
    <div className="container">
      <div className="flexContainer">
        <h1>ToDo App</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Add a ToDo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button className="addButton" onClick={addTask}>
            {isEdit.edit ? "Edit" : "Add"}
          </button>
        </div>
        <div className="tasks">
          {taskList.map((task, index) => (
            <div className="taskCard" key={index}>
              <p className="taskName">{task}</p>
              <div className="button">
                <button className="modifyButton" onClick={() => edit(index)}>
                  Edit
                </button>
                <button
                  className="modifyButton"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
