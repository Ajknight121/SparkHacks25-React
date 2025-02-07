
export default function Todo({title, content}) {
  return (
    <div className="todo">
      <h2>{title}</h2>
      <div>{content ? content : "no content"}</div>
    </div>
  )
}