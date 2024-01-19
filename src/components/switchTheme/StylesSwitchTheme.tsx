
import styled from "styled-components";
export const SwitchThemeWrapper = styled.div`

padding: 20px;
position: absolute;
z-index: 33;
`
export const SwitchThemeTitle = styled.h1`
font-size: 50px;
font-family: Roboto
color: ${(props) => props.color}
`

interface SwitchThemeOptionProps {
    backColor: string
}
export const SwitchThemeSelect = styled.select<SwitchThemeOptionProps>`
width: 300px;
height: 70px;
background-color: ;
padding: 10px;
font-size: 40px
 
`;
export const SwitchThemeSelectOption = styled.option<SwitchThemeOptionProps>`
width: 100%;
height: 70px;
background-color: ${props=>props.backColor};
padding: 35px;
line-height: 70px
`;
