import React, { createContext, useState } from 'react';

export const DropDown = createContext();

export function MenuDropModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDown.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropDown.Provider>
  );
}
