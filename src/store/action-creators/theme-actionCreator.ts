import {AppDispatch} from "../store";

import axios from "axios";
import { themeSlice } from "../slices/AppSlice";
export const switchToDarken = () => (dispatch: AppDispatch) => {
    console.log("SW to darken" )
    dispatch(themeSlice.actions.switchToDarken());
}; 
export const switchToLighter = () => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.switchToLighter());
}; 
export const tes = () => (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.test());
    dispatch(themeSlice.actions.tt());
}; 

