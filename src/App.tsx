import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import TodoDataLists from "./components/TodoDataLists";
interface TodoData {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [todoData, setTodoData] = useState<TodoData[]>([]);
  const completeTask = () => {
    console.log("delete task");
  };
  const deleteTask = () => {
    console.log("delete task");
  };

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
  }, []);

  console.log(todoData);

  return (
    <>
      <TodoList />
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
    </>
  );
}

export default App;
