import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Card({task}) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-pink-400 text-white px-5 rounded-md
    ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-700 text-bold capitalize mt-4">{task.descripcion}</p>
      <button 
      className="bg-purple-400 text-black  px-4 py-2 rounded-md mt-7 mb-7 hover:bg-purple-300" 
       onClick={() =>deleteTask(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default Card;
