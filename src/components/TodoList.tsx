import React, { useState, ChangeEvent } from "react";
import TodoListTwo from "./TodoListTwo";

const TodoList: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const addTask = () => {};

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center todo_bg">
      <div className="container">
        <div className="todo_box mx-auto w-100 px-4 rounded_8">
          <h1 className="todo_heading fw-semibold text-center">Toods</h1>
          <h3 className="sub_heading fw-medium mb-2">Enter Todo</h3>
          <form
            onSubmit={addTask}
            className="w-100 d-flex rounded-2 overflow-hidden p-1"
          >
            <input
              onChange={handleInput}
              value={todoInput}
              name="todo-input"
              type="text"
              placeholder="Learn html css"
              className="w-100 border-0 px-3 px-sm-4 fw-normal"
            />
            <button
              type="submit"
              className="add_btn rounded-2 text-white fw-semibold border-0"
            >
              Add
            </button>
          </form>
          <div className="list_box rounded_8">
            <TodoListTwo id="as" isCompleted={false} tittle="Todo One" />
            <TodoListTwo id="ad" isCompleted={true} tittle="Todo Completed" />
            {/* {todoData.map((val, i) => (
              <TodoDataLists value={val} key={i} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
