import {createSlice} from '@reduxjs/toolkit'


const initialState = {
 pastes : localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const Slice = createSlice({
    name: 'pastes',
    initialState,
    reducers:{
        addToPaste : (state,action)=>{
            
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