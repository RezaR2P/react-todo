export function Tasks({ tasks, onDelete, onComplete }) {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onComplete(task.id)}
                className="form-check-input me-2"
              />
              {task.title}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
