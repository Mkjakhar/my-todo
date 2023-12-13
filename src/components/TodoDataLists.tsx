import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
interface TodoDataListsProps {
  tittle: string;
  id: string;
  isCompleted: boolean;
  completeTask: () => void;
  deleteTask: () => void;
}
const TodoDataLists = ({
  tittle,
  id,
  isCompleted,
  completeTask,
  deleteTask,
}: TodoDataListsProps) => {
  return (
    <div
      id={id}
      className="w-100 todo_list px-3 d-flex d-lg-flex align-items-center justify-content-between"
    >
      <p
        className={`todo_para mb-0 ${
          isCompleted ? "opacity-50 text-decoration-line-through" : ""
        }`}
      >
        {tittle}
      </p>
      <div>
        <button onClick={deleteTask} className="border-0 bg-transparent p-0">
          <TrashIcon className="check-icon" height={24} width={24} />
        </button>
        <button
          onClick={completeTask}
          className="border-0 bg-transparent p-0 ms-3"
        >
          <CheckCircleIcon
            className={`check-icon ${isCompleted ? "checked-icon" : ""}`}
            height={24}
            width={24}
          />
        </button>
      </div>
    </div>
  );
};
export default TodoDataLists;
