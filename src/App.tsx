import "./App.css";
import { useState } from "react";
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

  // const getData = () => {
  //   return getDocs(collection(db, "todo"))
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map(
  //         (doc) =>
  //           ({
  //             id: doc.id,
  //             ...doc.data(),
  //           } as TodoData)
  //       );
  //       setTodoData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todo"));

      const data: TodoData[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as TodoData)
      );

      setTodoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getData();
  console.log(todoData);
  const completeTask = () => {
    console.log("delete task");
  };
  const deleteTask = () => {
    console.log("delete task");
  };
  // const todoDatas: TodoData[] = [];

  // const getDatas = async () => {
  //   const querySnapshot = await getDocs(collection(db, "my-todo"));
  //   querySnapshot.forEach((doc) => {
  //     todoData.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     } as TodoData);
  //   });
  // };
  // getDatas();
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
