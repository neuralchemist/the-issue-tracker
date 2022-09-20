import { useEffect, useState } from "react";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

/**
 * User hook
 */

export function useUser() {
  const [authPending, setAuthPending] = useState(true);
  const [user, setUser] = useState();
  const isSignedIn = user !== null;

  useEffect(() => {

    const onChange = (current_user) => {
      /**
       * called when firebase loads up the user
       * from persistent storage or when the auth changes.
       */
      setUser(current_user);
      setAuthPending(false);
    };

    // mount
    const unsubscribe = onAuthStateChanged(auth, onChange);

    // unmount
    return unsubscribe;
  }, []);

  async function doCreateUserWithEmailPasswordUsername(
    email,
    password,
    username
  ) {
    // TODO: use transaction

    // register with email and password
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // extract new user
    let new_user = credentials.user;

    // update profile
    await updateProfile(new_user, {
      displayName: username,
    });

    // add  to 'users' collection in firestore
    const userRef = doc(db, "users", new_user.uid);
    return setDoc(userRef, {
      displayName: username,
      email,
    });
  }

  const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const doSignOut = () => {
    return signOut(auth);
  };

  return {
    authPending,
    user,
    isSignedIn,
    doCreateUserWithEmailPasswordUsername,
    doSignInWithEmailAndPassword,
    doSignOut,
  };
}
