import { useTheme } from "../hooks/useTheme";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
import NavBar from "../components/NavBar/navbar";
import SwitchTheme from "../components/switchTheme/switchTheme";
//import { SwitchTheme } from "../components/switchTheme/StylesSwitchTheme";
const SettingsPage = () => {
    const {theme, themeOfText} =useTheme()
    return ( 
<ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
<NavBar />
<SwitchTheme />
</ApplicationWrapper>
     );
}
 
export default SettingsPage;