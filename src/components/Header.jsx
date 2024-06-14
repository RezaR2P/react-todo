import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="py-3 bg-primary text-white text-center">
      <div className="container">
        <h1>Todo List</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center mt-3"
        >
          <input
            className="form-control me-2"
            placeholder="Add a new task"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
          <button className="btn btn-light" type="submit">
            Create <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </div>
    </header>
  );
}
