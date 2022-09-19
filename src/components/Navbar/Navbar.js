// mui5
import Toolbar from "@mui/material/Toolbar";
import SwitchButton from "./SwitchButton";
// custom routes
import { CREATEISSUE, HOME, SIGNIN } from "../Common/routes";
// custom components
import BrandName from "./BrandName";
import LinkComponent from "./LinkComponent";
import AccountComponent from "./AccountComponent";
// styled components
import { StyledIcon, StyledAppBar } from "./styledComponents";
// custom hooks
import { useUserConsumer } from "../../Firebase/firebase-auth";

function Navbar() {
  // custom hook
  const { user, isSignedIn } = useUserConsumer();

  const SignedInContent = (
    <StyledIcon component="nav">
      <SwitchButton />
      <LinkComponent to={HOME} label="Home" />
      <LinkComponent to={CREATEISSUE} label="Create" />
      <AccountComponent label={user?.displayName} />
    </StyledIcon>
  );

  const SignedOutContent = (
    <StyledIcon component="nav">
      <SwitchButton />
      <LinkComponent to={HOME} label="Home" />
      <LinkComponent to={SIGNIN} label="SignIn" />
    </StyledIcon>
  );

  const NavContent = isSignedIn ? SignedInContent : SignedOutContent;

  return (
    <StyledAppBar position="relative" >
      <Toolbar>
        <BrandName to={HOME} label="The Issue Tracker" />
        {NavContent}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
