import { useAppSelector } from "./redux"
export const useHistory = ()=> {
    const {arrayOfExpressions} =useAppSelector(state=>state.calculator)
    
    return {arrayOfExpressions}
}