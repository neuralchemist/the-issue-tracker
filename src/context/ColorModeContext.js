// colorModeContext.js
import { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

export function useColorMode() {
  const colorMode = useContext(ColorModeContext);
  return colorMode;
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme =  useMemo(() => createTheme({
    palette: {
      mode: mode
    }

  }), [mode])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
