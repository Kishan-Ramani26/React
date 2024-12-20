import { createContext, useContext } from "react";

export const todoContext = createContext({
    Todos : [
        {
            id:1,
            todo : "Todo msg",
            completed : false,
        },
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    completeTodo : (id) => {},
})

export const TodoProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext)
}
