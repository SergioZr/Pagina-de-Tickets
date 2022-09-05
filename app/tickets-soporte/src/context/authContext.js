import { createContext, useContext, useState } from "react";
import PocketBase from "pocketbase";

const client = new PocketBase("http://localhost:8090");

const authContext = createContext();

export const usePocket = () => {
  const { pocketClient, user } = useContext(authContext);
  return { pocketClient, user };
};

export const useAuth = () => {
  return useContext(authContext);
};

export function AuthProvider({ children }) {
  // Create User
  const singup = async (request) => client.Users.create(request);

  // Login of users
  const login = async ({ email, password }) =>
    client.Users.authViaEmail(email, password);

  const [value, setValue] = useState({
    singup,
    login,
    pocketClient: client,
    user: null,
  });

  return (
    <authContext.Provider value={{ ...value, setValue }}>
      {children}
    </authContext.Provider>
  );
}
