import {AppDispatch} from "../store";

import axios from "axios";
import { themeSlice } from "../slices/AppSlice";
export const switchToDarken = () => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.switchToDarken());
}; 



export const tes = () => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.test());
}; 

