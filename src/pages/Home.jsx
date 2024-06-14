// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todo:tasks";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0); // State untuk menyimpan jumlah total tasks
  const [completedTasks, setCompletedTasks] = useState(0);
  const navigate = useNavigate();

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const savedTasks = JSON.parse(saved);
      setTasks(savedTasks);
      setTotalTasks(savedTasks.length); // Mengatur jumlah total tasks dari data yang tersimpan
      setCompletedTasks(savedTasks.filter((task) => task.isCompleted).length);
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    setTotalTasks(newTasks.length); // Mengatur jumlah total tasks setelah perubahan
    setCompletedTasks(newTasks.filter((task) => task.isCompleted).length);
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div className="bg-light min-vh-100">
      <Header handleAddTask={addTask} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <Tasks
              tasks={tasks}
              onDelete={deleteTaskById}
              onComplete={toggleTaskCompletedById}
            />
          </div>
          <div className="col-12 mt-3">
            <div className="p-3 bg-white rounded shadow-sm">
              <p className="mb-1">
                <strong>Total Tasks:</strong> {totalTasks}{" "}
                {/* Menampilkan jumlah total tasks */}
              </p>
              <p className="mb-0">
                <strong>Completed/Deleted Tasks:</strong> {completedTasks}
              </p>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button
              className="btn btn-danger"
              onClick={() => navigate("/goodbye")}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
