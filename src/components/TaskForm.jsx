import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'


// eslint-disable-next-line react/prop-types
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask}= useContext(TaskContext)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setDescripcion('')
    setTitle('')
   
  };
  
    
  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus

      />
      <textarea placeholder="La descripcion de tu tarea es"
      onChange={(e) => setDescripcion(e.target.value)}
      className="bg-slate-300 p-3 w-full mb-2"
      value={descripcion}>
      </textarea>
      <button
      className="bg-indigo-500 px-5 py-2 text-white"
      
      > GUARDAR </button>
    </form>
   </div>
  );
}

export default TaskForm;
