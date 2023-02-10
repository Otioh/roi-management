import {createContext, useState} from 'react';

const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
   const [staff, setstaff] = useState([]);
return (
    <GlobalContext.Provider value={{
        staff, setstaff
        }}>
        {children}
    </GlobalContext.Provider>
    
        )
    }
    
    export default GlobalContext;
 
    