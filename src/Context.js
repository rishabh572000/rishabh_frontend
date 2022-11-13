import { createContext, useState } from "react";

export const DataC = createContext();

const Context = ({children}) =>{
    const [card, setCard] = useState([])

    return(
        <>
            <DataC.Provider value={{card, setCard}}> {children}</DataC.Provider>
        </>
    )
}
export default Context;