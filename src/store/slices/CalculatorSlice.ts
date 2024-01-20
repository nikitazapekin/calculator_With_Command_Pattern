import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
 arrayOfExpressions: String[]
    }

const initialState: ThemeState = {
  
   arrayOfExpressions: []
}
export const calculatorSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addExpressionToHistory: (state, action: PayloadAction<string>): void => {
            console.log("PAYLOAD"+action.payload)
            state.arrayOfExpressions.push(action.payload)
        }
     
    
      
    },
 
})

export default calculatorSlice.reducer;