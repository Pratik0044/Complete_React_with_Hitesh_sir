import { createContext,useContext } from "react";

export const TodosContext = createContext({
    
});

export const useTodo = () => {
    return useContext(TodosContext);
}

export const TodoProvider = TodosContext.Provider;