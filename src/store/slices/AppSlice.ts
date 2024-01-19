import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
 theme:  "rgba(35, 36, 35)" | "#fff";
 themeOfText:  "rgba(35, 36, 35)" | "#fff";
 themeOfNavBar: "rgba(10, 10, 10)" | "rgba(32, 33, 32)"
    }

const initialState: ThemeState = {
  theme: "rgba(35, 36, 35)",
  themeOfText: "#fff",
  themeOfNavBar: "rgba(10, 10, 10)"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      switchToDarken: (state) => {
            state.theme =  "#fff";
            state.themeOfText="rgba(35, 36, 35)"
            state.themeOfNavBar= "rgba(10, 10, 10)" 
        },
      
    },
 
})

export default themeSlice.reducer;
