import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from './Slice'



export const Store = configureStore({
    reducer:{
        pastes : sliceReducer
    },
})