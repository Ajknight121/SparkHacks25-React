

export default function Todo(props) {
  const { title, description } = props;
  return (
    <div
      className={`todo`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
