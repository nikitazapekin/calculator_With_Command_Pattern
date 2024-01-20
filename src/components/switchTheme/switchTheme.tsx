import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { SwitchThemeTitle, SwitchThemeWrapper, SwitchThemeSelect, SwitchThemeSelectOption } from "./StylesSwitchTheme";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { switchToDarken, switchToLighter } from "../../store/action-creators/theme-actionCreator";
const SwitchTheme: React.FC = () => {
    const themes = ["darken", "lighter"];
    const dispatch = useAppDispatch();
    const { themeOfText, theme } = useTheme();
    const handleChange = (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
        const selectedOption = event.target as HTMLSelectElement;
        if (selectedOption.value === "lighter") {
            dispatch(switchToLighter());
        } else {
            dispatch(switchToDarken());
        }
    };
    useEffect(() => {
        console.log("THEME" + theme);
    }, [theme]);

    return (
        <SwitchThemeWrapper>
            <SwitchThemeTitle color={themeOfText}>
                Select theme
            </SwitchThemeTitle>
            <SwitchThemeSelect
                onClick={(event) => handleChange(event)}
                backColor={theme === "rgba(35, 36, 35)" ? "#fff" : "rgba(35, 36, 35)"}
            >
                {themes.map(item => (
                    <SwitchThemeSelectOption
                        key={item}
                        value={item}
                        data-id={item !== "darken" ? "lighter" : "darken"}
                        backColor={item === "darken" ? "rgba(35, 36, 35)" : "#fff"}
                    >
                        {item}
                    </SwitchThemeSelectOption>
                ))}
            </SwitchThemeSelect>
        </SwitchThemeWrapper>
    );
};

export default SwitchTheme;
