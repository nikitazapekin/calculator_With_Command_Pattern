import { useAppSelector } from "./redux"
export const useTheme = ()=> {
    const {theme, themeOfText, themeOfNavBar, test, tt} =useAppSelector(state=>state.themeReducer)
    
    return {theme, themeOfText, themeOfNavBar, test, tt}
}