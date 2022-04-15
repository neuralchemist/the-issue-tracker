import { useEffect, useState } from "react";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

export function useUser() {
  const [authPending, setAuthPending] = useState(true);
  // user state
  const [userState, setUserState] = useState({
    user: auth.currentUser,
    isLoading: auth.currentUser === null ? true : false,
    error: null,
  });
  // create new states
  const { user, isLoading, error } = userState;
  const isSignedIn = user !== null;
  const userId = isSignedIn ? user?.uid : undefined;

  useEffect(() => {
    const onChange = (currentUser) => {
      /**
       * called when firebase loads up the user
       * from persistent storage or when the auth changes.
       */

      setUserState({ user: currentUser, isLoading: false, error: null });
      setAuthPending(false);
    };

    const onError = (error) => {
      /**
       * called ONLY when onAuthStateChanged encounters an error
       * not when signIn or signOut error.
       */
      console.error("useUser -> onAuthStateChanged -> onError", error);
      setUserState({ user: null, isLoading: false, error });
    };
    const unsubscribe = onAuthStateChanged(auth, onChange, onError);
    // effect is cleaned up.
    return unsubscribe;
  }, []);

  async function doCreateUserWithEmailPasswordUsername(
    email,
    password,
    username
  ) {
    /**
     * register with email and password then update profile
     */

    // LOADING
    setUserState({ user: null, isLoading: true, error: null });

    try {
      // create user
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("doCreateUserWithEmailPasswordUsername -> Created User...");

      // get new user
      let current_user = credentials.user;

      // update profile
      await updateProfile(current_user, {
        displayName: username,
      });

      console.log("doCreateUserWithEmailPasswordUsername -> updated profile...");

      // add to firebase
      const userRef = doc(db, "users", current_user.uid);
      await setDoc(userRef, {
        displayName: username,
        email,
      });

      console.log("doCreateUserWithEmailPasswordUsername -> Added to database...");
      // SUCCESS
      setUserState({ user: current_user, isLoading: false, error: null });
    } catch (error) {
      // error = {message: '', code: '', ..}
      console.error(
        "useUser -> doCreateUserWithEmailPasswordUsername: ",
        error
      );
      // FAILURE
      setUserState({ user: null, isLoading: false, error });
    }
  }

  const doSignInWithEmailAndPassword = async (email, password) => {
    /**
     * sign in with email and password
     */

    // LOADING
    setUserState({ user: null, isLoading: true, error: null });
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      // signed in successful
      let current_user = credentials.user;
      console.log("useUser -> doSignInWithEmailAndPassword: signed in...");
      // SUCCESS
      setUserState({ user: current_user, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      // FAILURE
      setUserState({ user: null, isLoading: false, error });
    }
  };

  const doSignOut = async () => {
    /**
     * sign out
     */

    // LOADING
    setUserState({ user: userState.user, isLoading: true, error: null });
    try {
      await signOut(auth);
      // logged out
      console.log("logged out...");
      // SUCCESS
      setUserState({ user: null, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      // FAILURE
      setUserState({ user: userState.user, isLoading: false, error });
    }
  };

  return {
    authPending,
    user,
    userId,
    isLoading,
    isSignedIn,
    error,
    doCreateUserWithEmailPasswordUsername,
    doSignInWithEmailAndPassword,
    doSignOut,
  };
}
