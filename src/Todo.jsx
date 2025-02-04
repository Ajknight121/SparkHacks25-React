import { useState } from "react";

export default function Todo(props) {
  const { isLoggedIn, title, description } = props;
  return (
    <div
      className={`todo ${isLoggedIn ? "" : "hidden"}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
