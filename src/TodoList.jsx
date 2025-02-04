import Todo from "./Todo";

export default function TodoList({ tasks, setTasks }) {
  console.log(tasks)

  const handleSave = (index, title, content) => {
    let newList = [...tasks];
    newList[index] = {title: title, content:content}
    localStorage.setItem("data", JSON.stringify(newList));

    console.log("edit",index, title, content, newList)
    setTasks([...newList]);
  }

  return (
    <div className="todo-list bg-white p-1 m-1">
      {tasks.map((task, index) => <Todo key={index} index={index} title={task.title} description={task.content} handleSave={handleSave}/>)}
      
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
