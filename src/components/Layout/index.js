import React from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";
// custom hook
import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom components
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../Navbar";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Account from "../Account";
import CreateIssue from "../CreateIssue";
import EditIssue from "../EditIssue";
// custom routes
import {
  HOME,
  SIGNIN,
  SIGNUP,
  ACCOUNT,
  CREATEISSUE,
  EDITISSUE,
} from "../Common/routes";

function Layout() {
  const { user } = useUserConsumer();
  const isAuthenticated = !!user;
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path={HOME} element={<Home />} />
        <Route path={SIGNIN} element={<SignIn />} />
        <Route path={SIGNUP} element={<SignUp />} />
        <Route
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath={SIGNIN} />
          }
        >
          <Route path={ACCOUNT} element={<Account />} />
          <Route path={CREATEISSUE} element={<CreateIssue />} />
          <Route path={EDITISSUE} element={<EditIssue />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default Layout;
