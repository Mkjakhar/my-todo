import React, { useState, useEffect, MouseEventHandler } from "react";
import TodoDataLists from "./TodoDataLists";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
interface TodoData {
  id: string;
  title: string;
  isCompleted: boolean;
}
type Status = "loading" | "error" | "success";
const TodoList: React.FC = () => {
  const [todoData, setTodoData] = useState<TodoData[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("This is error");
  const getData = async () => {
    setStatus("loading");
    const querySnapshot = await getDocs(collection(db, "todo"));
    const array: TodoData[] = [];
    querySnapshot.forEach((doc) => {
      array.push({
        id: doc.id,
        ...doc.data(),
      } as TodoData);
    });
    setTodoData(array);
    setStatus("success");
  };
  useEffect(() => {
    getData();
  }, []);
  const [todoInput, setTodoInput] = useState("");

  const addTask: MouseEventHandler<HTMLButtonElement> = async (e) => {
    setStatus("loading");
    e.preventDefault();
    if (todoInput === "") {
      setStatus("error");
    } else {
      await addDoc(collection(db, "todo"), {
        title: todoInput,
        isCompleted: false,
      })
        .catch((err) => setError(err))
        .finally(() => getData());
      setStatus("success");
      setTodoInput("");
    }
  };

  const completeTask = () => {
    console.log("delete task");
  };
  const deleteTask = async (id: string) => {
    setStatus("loading");
    const deletedElem = todoData.find((data) => data.id === id);
    if (deletedElem) {
      await deleteDoc(doc(db, "todo", deletedElem.id));
      getData();
      setStatus("success");
    } else {
      console.error(`Element with id ${id} not found`);
      setStatus("error");
    }
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center todo_bg">
      {status === "loading" && (
        <div className="position-fixed d-flex align-items-center justify-content-center z-3 top-0 start-0 w-100 min-vh-100 bg-white">
          Loading...
        </div>
      )}
      <div className="container">
        <div className="todo_box mx-auto w-100 px-4 rounded_8">
          <h1 className="todo_heading fw-semibold text-center">Todos</h1>
          {status === "error" && (
            <p className="px-4 py-3 bg-danger-500 rounded_8 text-danger">
              {error}
            </p>
          )}
          <h3 className="sub_heading fw-medium mb-2">Enter Todo</h3>
          <form className="w-100 d-flex rounded-2 overflow-hidden p-1">
            <input
              required
              onChange={(event) => setTodoInput(event.target.value)}
              value={todoInput}
              name="todo-input"
              type="text"
              placeholder="Learn html css"
              className="w-100 border-0 px-3 px-sm-4"
            />
            <button
              onClick={addTask}
              className="add_btn rounded-2 text-white fw-semibold border-0"
            >
              Add
            </button>
          </form>
          <div className="list_box rounded_8 overflow-hidden">
            {todoData.length ? (
              todoData.map((task) => (
                <TodoDataLists
                  key={task.id}
                  id={task.id}
                  tittle={task.title}
                  isCompleted={task.isCompleted}
                  completeTask={completeTask}
                  deleteTask={() => deleteTask(task.id)}
                />
              ))
            ) : (
              <p className="mb-0 todo_para text-danger bg-danger-500 px-2 py-3 border-danger">
                No Todos Yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
