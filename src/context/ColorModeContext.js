// colorModeContext.js
import { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, amber, teal, grey,  brown,  } from "@mui/material/colors";


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

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for LIGHT MODE
                primary: deepPurple,
                secondary: teal,
                // divider: deepPurple[200],
                background: {
                  default: brown[200],
                  paper: brown[300],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for DARK MODE
                primary: amber,
                // divider: amber[700],
                divider: brown,
                background: {
                  default: grey[800],
                  paper: grey[900],
                },
                text: {
                  primary: grey[50],
                  secondary: grey[100]
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
