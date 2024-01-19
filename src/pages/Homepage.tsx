import React from "react";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
import { useTheme } from "../hooks/useTheme";
import { tes } from "../store/action-creators/theme-actionCreator";
import { useAppDispatch } from "../hooks/redux";
const Homepage = () => {
   // const dispatch = useAppDispatch();
   const dispatch =useAppDispatch()
    const {theme, themeOfText, test} =useTheme()
    console.log("TEST"+test)
    const handeClick= () => {
       dispatch( tes())
        console.log("TEST"+test)
    }
    return (  
    <ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
  ewfeefwefw

  <button onClick={()=> handeClick()}>IC</button>
        </ApplicationWrapper>
    );
}
 
export default Homepage;