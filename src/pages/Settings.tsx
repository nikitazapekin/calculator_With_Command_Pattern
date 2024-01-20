import { useTheme } from "../hooks/useTheme";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
import NavBar from "../components/NavBar/navbar";
import SwitchTheme from "../components/switchTheme/switchTheme";
import { ClearHistoryButton } from "../components/Calculator/calculatorStyles";
const SettingsPage = () => {
    const {theme, themeOfText} =useTheme()
    return ( 
<ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
<NavBar />
<SwitchTheme />
<ClearHistoryButton color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>
    Clear history
</ClearHistoryButton>
</ApplicationWrapper>
     );
}
 
export default SettingsPage;