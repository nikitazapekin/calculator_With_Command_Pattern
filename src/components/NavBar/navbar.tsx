import React from "react";
import { StyledNavbar } from "./StylesNavbar";
import { useTheme } from "../../hooks/useTheme";
const NavBar = () => {
    const {theme, themeOfNavBar, themeOfText} =useTheme()
    return ( 
    <StyledNavbar  background={themeOfNavBar ? themeOfNavBar : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"} >

    </StyledNavbar>
        );
}
 
export default NavBar;