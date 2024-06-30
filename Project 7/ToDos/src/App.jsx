import { useState } from "react";
import {Todoprovider} from "./contexts"
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev)=>[{id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (todoname, id) => {
    setTodos((prev)=> prev.map((prevTodo) =>
       (prevTodo.id === id ? todoname : prevTodo )))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((element)=> element.id === id ? {...element,completed: !element.completed} : element ))
  }

  return (
    <Todoprovider value={{todos, addTodo, deleteTodo , toggleComplete
    ,updateTodo }}>
      <div className="bg-[#3d2857] min-h-screen py-8 rounded-md">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </Todoprovider >
  );
}

export default App;
