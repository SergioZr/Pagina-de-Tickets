import {createContex} from 'react';

const contex = createContex();

export function AuthProvider ({ children }) {
    const user = {
        login: true,
    };
    
    return <contex.Provider value={{user}}>{children}</contex.Provider>;
}