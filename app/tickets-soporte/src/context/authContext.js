import {createContext, useContext} from 'react';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://localhost:8090');

const authContext = createContext();


export const useAuth = () => {
         return useContext(authContext)
}
export function AuthProvider ({ children }) {
    const singup = async (request) => {
        console.log(request)
        return client.Users.create(request);
    }
    const login = async ({email, password}) => {
        console.log(email, password)
        return client.Users.authViaEmail(email, password);
    }
    
    return <authContext.Provider value={{singup, login}}>{children}</authContext.Provider>;
}