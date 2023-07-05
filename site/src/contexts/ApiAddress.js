import React from "react";
export const ApiAddress = React.createContext();
export const ApiAddressProvider = ({children})=>{
    const api = "http://localhost/akiba.v2/api/?endpoint";
    return(
        <ApiAddress.Provider value={{api}}>
            {children}
        </ApiAddress.Provider>
    );
}