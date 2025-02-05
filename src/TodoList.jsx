import Todo from "./Todo";

import { useContext } from "react";
import { SiteContext } from "./main";

export default function TodoList() {
  const {tasks} = useContext(SiteContext);
  console.log(tasks)

  return (
    <div className="todo-list bg-white p-1 m-1">
      {tasks.map((task, index) => <Todo key={index} index={index} title={task.title} description={task.content}/>)}
      
      {/* <Todo
        title="Todo 1"
        description="Description 1"
        isLoggedIn={isLoggedIn}
      />
      <Todo
        title="Todo 2"
        description="Description 1"
        isLoggedIn={isLoggedIn}
      />
      <Todo
        title="Todo 3"
        description="Description 1"
        isLoggedIn={isLoggedIn}
      /> */}
    </div>
  );
}
