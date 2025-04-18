import {configureStore} from "@reduxjs/toolkit"
import { todoSlice,todoReducer } from "../features/Todo/TodoSlice" 


export const store = configureStore({
    reducer:todoReducer
})