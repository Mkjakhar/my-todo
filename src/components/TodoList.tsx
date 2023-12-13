import React, { useState, useEffect } from "react";
import TodoDataLists from "./TodoDataLists";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
interface TodoData {
  id: string;
  title: string;
  isCompleted: boolean;
}
const TodoList: React.FC = () => {
  const [todoData, setTodoData] = useState<TodoData[]>([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "todo"));
      const array: TodoData[] = [];
      querySnapshot.forEach((doc) => {
        array.push({
          id: doc.id,
          ...doc.data(),
        } as TodoData);
      });
      setTodoData(array);
    };
    getData();
    console.log(todoData);
  }, []);
  const [todoInput, setTodoInput] = useState("");

  const addTask = (e: any) => {
    e.preventDefault();
    // setTasks([...tasks,title:todoInput])
    setTodoInput("");
  };

  const completeTask = () => {
    console.log("delete task");
  };
  const deleteTask = () => {
    console.log("delete task");
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center todo_bg">
      <div className="container">
        <div className="todo_box mx-auto w-100 px-4 rounded_8">
          <h1 className="todo_heading fw-semibold text-center">Todos</h1>
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
              type="submit"
              onClick={addTask}
              className="add_btn rounded-2 text-white fw-semibold border-0"
            >
              Add
            </button>
          </form>
          <div className="list_box rounded_8">
            {todoData.map((task) => (
              <TodoDataLists
                key={task.id}
                id={task.id}
                tittle={task.title}
                isCompleted={task.isCompleted}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
