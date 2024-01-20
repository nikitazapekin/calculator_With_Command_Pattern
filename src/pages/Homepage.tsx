import React from "react";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
import { useTheme } from "../hooks/useTheme";
import { tes} from "../store/action-creators/theme-actionCreator";
import { useAppDispatch } from "../hooks/redux";
import NavBar from "../components/NavBar/navbar";
import Calculator from "../components/Calculator/calculator";
const Homepage = () => {
    const {theme, themeOfText, test, tt} =useTheme()
    return (  
    <ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
<NavBar />
<Calculator />
        </ApplicationWrapper>
    );
}
export default Homepage;