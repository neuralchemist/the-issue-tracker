// mui5
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import SwitchButton from "./SwitchButton";
// custom routes
import { CREATEISSUE, HOME, SIGNIN } from "../Common/routes";
// custom components
import BrandName from "./BrandName";
import LinkComponent from "./LinkComponent";
import AccountComponent from "./AccountComponent";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";

function Navbar() {
  // custom hook
  const { user, isSignedIn } = useUserConsumer();

  const SignedInContent = (
    <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
      <SwitchButton />
      <LinkComponent to={HOME} label="Home" />
      <LinkComponent to={CREATEISSUE} label="Create" />
      <AccountComponent label={user?.displayName} />
    </Box>
  );

  const SignedOutContent = (
    <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
      <SwitchButton />
      <LinkComponent to={HOME} label="Home" />
      <LinkComponent to={SIGNIN} label="SignIn" />
    </Box>
  );

  const NavContent = isSignedIn ? SignedInContent : SignedOutContent;

  return (
    <AppBar
      position="relative"
      sx={{ boxShadow: "none", backgroundColor: "background.paper" }}
    >
      <Toolbar>
        <BrandName to={HOME} label="The Issue Tracker" />
        {NavContent}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
