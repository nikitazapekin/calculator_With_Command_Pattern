import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
 theme:  "rgba(35, 36, 35)" | "#fff";
 themeOfText:  "rgba(35, 36, 35)" | "#fff";
 themeOfNavBar: "rgba(10, 10, 10)" | "rgba(32, 33, 32)";
 test: "Hello" | "Goodbye";
 tt: number
    }

const initialState: ThemeState = {
  theme: "rgba(35, 36, 35)",
  themeOfText: "#fff",
  themeOfNavBar: "rgba(10, 10, 10)",
  test: "Hello",
   tt: 0
}
export const calculatorSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      switchToDarken: (state) => {
            state.theme =  "rgba(35, 36, 35)";
            state.themeOfText="#fff"
            state.themeOfNavBar= "rgba(32, 33, 32)" 
        },
    
      
    },
 
})

export default calculatorSlice.reducer;