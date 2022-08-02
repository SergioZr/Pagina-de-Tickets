import {createContext, useContext} from 'react';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://localhost:8090');

const authContext = createContext();


export const useAuth = () => {
    const context = useContext(authContext)
    return context
}
export function AuthProvider ({ children }) {
    const singup = async (request) => {
        console.log(request)
        return await client.Users.create(request);
    }
    
    return <authContext.Provider value={{singup}}>{children}</authContext.Provider>;
}