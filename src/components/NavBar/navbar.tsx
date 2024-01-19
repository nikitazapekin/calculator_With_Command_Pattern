/*import React from "react";
import { StyledNavBarItemImage, StyledNavbar, StyledNavBarItemText, StyledNavbarWrapper, StyledNavBarBlockText } from "./StylesNavbar";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../../asserts/logo.jpg"
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const {theme, themeOfNavBar, themeOfText} =useTheme()
    const navigate=useNavigate()
    const handleNavigate= (event: React.MouseEvent<HTMLSpanElement>) => {
        navigate(`/${(event.target as HTMLSpanElement).dataset.id}`);
    }
    return ( 
    <StyledNavbar  background={themeOfNavBar ? themeOfNavBar : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"} >
<StyledNavbarWrapper>

        <StyledNavBarItemImage>
        <img src={Logo} /> 
        </StyledNavBarItemImage>
    <StyledNavBarBlockText>
<StyledNavBarItemText data-id="homepage">
  Calculate
</StyledNavBarItemText>
<StyledNavBarItemText data-id="settings" onClick={()=>handleNavigate}>
 Settings
</StyledNavBarItemText>
        </StyledNavBarBlockText>    
</StyledNavbarWrapper>
    </StyledNavbar>
        );
}
 
export default NavBar; */


import React from "react";
import { StyledNavBarItemImage, StyledNavbar, StyledNavBarItemText, StyledNavbarWrapper, StyledNavBarBlockText } from "./StylesNavbar";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../../asserts/logo.jpg"
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const { theme, themeOfNavBar, themeOfText } = useTheme();
    const navigate = useNavigate();

    const handleNavigate = (event: React.MouseEvent<HTMLSpanElement>) => {
        navigate(`/${(event.target as HTMLSpanElement).dataset.id}`);
    }

    return (
        <StyledNavbar background={themeOfNavBar ? themeOfNavBar : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
            <StyledNavbarWrapper>
                <StyledNavBarItemImage>
                    <img src={Logo} alt="Logo" />
                </StyledNavBarItemImage>
                <StyledNavBarBlockText>
                    <StyledNavBarItemText data-id="homepage" onClick={(event) => handleNavigate(event)}>
                        Calculate
                    </StyledNavBarItemText>
                    <StyledNavBarItemText data-id="settings" onClick={(event) => handleNavigate(event)}>
                        Settings
                    </StyledNavBarItemText>
                </StyledNavBarBlockText>
            </StyledNavbarWrapper>
        </StyledNavbar>
    );
}

export default NavBar;
