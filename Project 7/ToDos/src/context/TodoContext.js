import { createContext,useContext } from "react";

export const TodosContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed : false
        }
    ]
    
});

export const useTodo = () => {
    return useContext(TodosContext);
}

export const TodoProvider = TodosContext.Provider;