import {AppDispatch} from "../store";
import axios from "axios";
import { calculatorSlice } from "../slices/CalculatorSlice";
export const AddExpressionToHistory = (expression: string) => (dispatch: AppDispatch) => {
    console.log("payload");
    if(expression.includes('=')){

        dispatch(calculatorSlice.actions.addExpressionToHistory(expression));
    }
};