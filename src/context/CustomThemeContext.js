import { useState, createContext, useContext } from "react";
// mui
import { ThemeProvider, createTheme } from "@mui/material/styles";

/**
 * custom context to provide and consume 'mode' and 'setMode'.
 * they are used to toggle between 'light' and 'dark' theme.
 */

// step1: create context
const CustomThemeContext = createContext(null);

/**  step2: create context provider for 'mode' and 'setMode' */
export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  // create custom theme
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  const value = { mode, setMode };
  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

/**  step3: create context consumer for 'mode' and 'setMode'*/
export function useCustomThemeConsumer() {
  const context = useContext(CustomThemeContext);
  if (context === undefined)
    throw new Error(
      "useCustomThemeConsumer should be used within CustomThemeProvider"
    );
  return context;
}
