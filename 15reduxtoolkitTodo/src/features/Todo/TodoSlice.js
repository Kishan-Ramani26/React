import {createSlice , nanoid} from "@reduxjs/toolkit"
// nanoid genert only unic id

const initialState = {
    todos:[{id:1 , text:"Hello world"}]
}


export const todoSlice = createSlice({
    name:todo,
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=>{
                if(todo.id == action.payload){
                    todo.text = action.payload.text
                }
            })
        }
    }
})




