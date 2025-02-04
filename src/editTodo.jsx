import { useState } from "react";

export default function EditTodo(props) {
  const { isLoggedIn, title, description, index, handleSave } = props;

  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);

  console.log("newTitle", newTitle)
  return (
    <div
      className={`todo ${isLoggedIn ? "" : "hidden"}`}
    >
      <div>Title</div> 
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
      <div>Description</div> 
      <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
      <button onClick={() => handleSave(index,newTitle, newDesc)}>save</button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
