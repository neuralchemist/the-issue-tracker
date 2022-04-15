import { createContext, useContext } from "react";
import { useUser } from "./hooks/useUser";

const UserContext = createContext(null);

function useUserConsumer() {
  const userState = useContext(UserContext);
  // Check the provider
  if (userState === null) {
    throw new Error(
      "useUserConsumer needs to have a UserProvider component as a parent in the React tree."
    );
  }
  return userState;
}

function UserProvider({ children }) {
  // custom useUser hook
  const { authPending, ...userState } = useUser();
  return (
    <UserContext.Provider value={userState}>
      {!authPending && children}
    </UserContext.Provider>
  );
}

export { useUserConsumer, UserProvider };
