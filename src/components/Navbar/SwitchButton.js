// mui5
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// custom hooks
import { useColorMode } from "../../context/ColorModeContext";

function SwitchButton() {
  // custom hook
  const { toggleColorMode, mode } = useColorMode();

  const buttonContent =
    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />;

  return <IconButton onClick={toggleColorMode}>{buttonContent}</IconButton>;
}

export default SwitchButton;
