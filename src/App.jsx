import { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("data"));
    if (savedItems) setActivities(savedItems);
  }, []);
  const [activities, setActivities] = useState([]);

  const createTask = () => {
    const title = newTitle;
    const content = newContent;
    const newActivites = [...activities, { title: title, content: content }];
    localStorage.setItem("data", JSON.stringify(newActivites));
    setActivities(newActivites);
  };

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <>
      <div className="nav">Welcome!</div>

      <div>
        <h1>Todo list</h1>
        <TodoList
          tasks={activities}
          setTasks={setActivities}
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
