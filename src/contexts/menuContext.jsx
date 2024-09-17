import { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuUserContext ({children}){
    const [openMenu, setOpenMenu] = useState(true); // useState retorna uma matriz
    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )


}

export default MenuContext;