import React, { createContext, useState } from 'react';

export const DropDown = createContext();

export function MenuDropModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
    setIsOpen(prev => !prev);
  };


  return (
    <DropDown.Provider value={{ handleToggle, isOpen, setIsOpen }}>
      {children}
    </DropDown.Provider>
  );
}

