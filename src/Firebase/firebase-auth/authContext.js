import { createContext, useContext } from "react";
import { useUser } from "./hooks/useUser";

/**
 * context hook to share user state across
 * different components in the app
 */

// step1: create context
const UserContext = createContext(null);


// step2 : create context provider
export function UserProvider({ children }) {
  // custom useUser hook
  const { authPending, ...userState } = useUser();
  return (
    <UserContext.Provider value={userState}>
      {!authPending && children}
    </UserContext.Provider>
  );
}


// step3 : create context consumer
export function useUserConsumer() {
  const userState = useContext(UserContext);
  // Check the provider
  if (userState === null) {
    throw new Error(
      "useUserConsumer needs to have a UserProvider component as a parent in the React tree."
    );
  }
  return userState;
}

