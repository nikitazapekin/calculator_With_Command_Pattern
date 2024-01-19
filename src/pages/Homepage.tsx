import React from "react";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
import { useTheme } from "../hooks/useTheme";
const Homepage = () => {
    const {theme, themeOfText} =useTheme()
    return (  
    <ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
  ewfeefwefw
        </ApplicationWrapper>
    );
}
 
export default Homepage;