import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";


function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("data"));
    if (savedItems) setTasks(savedItems);
  }, []);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <>
      <div className="nav">
        Welcome!
      </div>

      <div>
        <h1 className="page-label">Todo list</h1>
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
            <button>Create new task</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
