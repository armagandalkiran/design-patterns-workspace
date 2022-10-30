import useThemeContext from "../hooks/useTheme";

function Template() {
    const themeContext = useThemeContext();
    console.log(themeContext);
}

export default Template;