import Todo from "./Todo";

import { useContext } from "react";
import { SiteContext } from "./SiteContext";

export default function TodoList() {
  const {tasks} = useContext(SiteContext);

  return (
    <div className="todo-list bg-white p-1 m-1">
      {tasks.map((task, index) => <Todo key={index} index={index} title={task.title} description={task.content}/>)}
      
    </div>
  );
}
