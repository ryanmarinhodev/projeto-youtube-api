import { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuUserContext ({children}){
    const [openMenu, setOpenMenu] = useState(true);
    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )


}

export default MenuContext;