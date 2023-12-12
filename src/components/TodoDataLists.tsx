import React from "react";

interface TodoData {
  para: string;
  styleList: string;
  deleteIcon: React.ReactNode;
  tickIcon: React.ReactNode;
}

interface TodoDataListsProps {
  value: TodoData;
}

const TodoDataLists: React.FC<TodoDataListsProps> = ({ value }) => {
  const completeTask = () => {
    console.log("task done");
  };

  const deleteTask = () => {
    console.log("delete task");
  };

  return (
    <div
      className={`w-100 todo_list px-3 d-flex d-lg-flex align-items-center justify-content-between overflow-hidden ${value.styleList}`}
    >
      <p className="todo_para mb-0 fw-regular">{value.para}</p>
      <div>
        <button onClick={deleteTask} className="border-0 bg-transparent p-0">
          {value.deleteIcon}
        </button>
        <button
          onClick={completeTask}
          className="border-0 bg-transparent p-0 ms-3"
        >
          {value.tickIcon}
        </button>
      </div>
    </div>
  );
};

export default TodoDataLists;
