import { uiSlice } from './' 
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})