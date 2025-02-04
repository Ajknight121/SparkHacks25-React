import { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("data"));
    if (savedItems) setActivities(savedItems);
  }, []);
  const [activities, setActivities] = useState([]);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

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
      <div className="nav">
        Welcome{isLoggedIn != false ? ` ${username}` : ""}!
      </div>

      <div className="login">
        {isLoggedIn ? "You are logged in" : "You are logged out"}

        <form
          onSubmit={handleSubmit}
          className={isLoggedIn ? "hidden" : "display-block"}
        >
          <label>Username: </label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className={`${isLoggedIn ? "" : "hidden"}`}>
        <div>Todo list</div>
        <TodoList
          isLoggedIn={isLoggedIn}
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
