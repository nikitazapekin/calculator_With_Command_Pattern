import { useAppSelector } from "./redux"
export const useTheme = ()=> {
    const {theme, themeOfText, themeOfNavBar} =useAppSelector(state=>state.themeReducer)
    return {theme, themeOfText, themeOfNavBar}
}