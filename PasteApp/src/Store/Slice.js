import {createSlice} from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
 pastes : localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const Slice = createSlice({
    name: 'pastes',
    initialState,
    reducers:{
        addToPaste : (state,action)=>{
            const paste = action.payload;
            state.pastes.push(paste)
            localStorage.setItem("pastes" ,JSON.stringify(state.pastes))
            //  toast("Paste Created");
        },
        removeFormPaste : (state,action)=>{

        },
        updatePaste : (state,action)=>{

        },
        resetAllPaste : (state,action)=>{

        },
    }
})

export const {addToPaste,removeFormPaste,updatePaste,resetAllPaste} = Slice.actions

export default Slice.reducer