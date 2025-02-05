import { useState, useEffect, useContext } from "react";
import TodoList from "./TodoList";
import { Link } from "react-router";

import { SiteContext } from "./main";

function App() {
  // const {tasks, setTasks} = useContext(SiteContext);
  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("data"));
    if (savedItems) setTasks(savedItems);
  }, []);
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    const title = newTitle;
    const content = newContent;
    const newActivites = [...tasks, { title: title, content: content }];
    localStorage.setItem("data", JSON.stringify(newActivites));
    setTasks(newActivites);
  };

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <>
      <div className="nav">
        Welcome!
      </div>

      <div>
        <h1>Todo list</h1>
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
        />
        <div className="create-task">
          <div>Title</div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div>Content</div>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <div>
            <button onClick={createTask}>Create new task</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
