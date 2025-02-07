import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";

import { SiteContext } from "./SiteContext";
import TodoList from "./TodoList"

function App() {
  const {tasks, setTasks} = useContext(SiteContext);

  // Load from localStorage ONLY ONCE, when the site first runs
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("data"));
    if (savedItems) setTasks(savedItems);
  }, []);

  // const [tasks, setTasks] = useState([]); // Commented out, variable used from context instead

  const createTask = () => {
    const title = newTitle;
    const content = newContent;
    const newActivites = [...tasks, { title: title, content: content }];
    localStorage.setItem("data", JSON.stringify(newActivites));
    setTasks(newActivites); // Save the new list to localstorage
  };

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <>
      

      <div>
        <Link to="/next">Next page</Link>
        <h1>Todo list</h1>
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
        <TodoList/>
      </div>
    </>
  );
}

export default App;
