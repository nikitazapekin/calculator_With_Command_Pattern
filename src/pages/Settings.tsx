import { useTheme } from "../hooks/useTheme";
import { ApplicationWrapper } from "../components/ApplicationWrapper/ApplicationWrapper";
const SettingsPage = () => {
    const {theme, themeOfText} =useTheme()
    return ( 
<ApplicationWrapper  background={theme ? theme : "rgba(35, 36, 35)"} color={themeOfText ? themeOfText : "rgba(35, 36, 35)"}>

</ApplicationWrapper>
     );
}
 
export default SettingsPage;