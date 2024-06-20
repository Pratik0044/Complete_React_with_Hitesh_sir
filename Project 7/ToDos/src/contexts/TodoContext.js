import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todoname: "Todo's Name",
            completed: flase
        }
    ],
    addTodo : (todoname)=>{},
    updateTodo : (todoname, id) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider
