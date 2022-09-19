// mui5
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// custom hooks
import { useCustomThemeConsumer } from "../../context/CustomThemeContext";

function SwitchButton() {
  // custom hook to consume 'mode' and 'setMode'
  const customThemeContext = useCustomThemeConsumer();

  const buttonContent =
    customThemeContext?.mode === "dark" ? (
      <Brightness7Icon />
    ) : (
      <Brightness4Icon />
    );

  const toggleCustomTheme = () =>
    customThemeContext?.setMode((prevMode) =>
      prevMode === "light" ? "dark" : "light"
    );

  return <IconButton onClick={toggleCustomTheme}>{buttonContent}</IconButton>;
}

export default SwitchButton;
