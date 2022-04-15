// react-router-dom
import { BrowserRouter } from "react-router-dom";
// mui 5
import { CssBaseline } from "@mui/material";
// react-query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// custom hook
import { UserProvider } from "./Firebase/firebase-auth";
import { ColorModeProvider } from "./context/ColorModeContext";
// component
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ColorModeProvider>
          <UserProvider>
            <CssBaseline />
            <Layout />
          </UserProvider>
        </ColorModeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
