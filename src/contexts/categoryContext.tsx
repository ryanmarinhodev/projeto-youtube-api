import React, { createContext, ReactNode, useState } from 'react';

export interface CategoryContextType {
  categoryIds: number[];
  setCategoryIds: (ids: number[]) => void;
}

export const CategoryContext = createContext<CategoryContextType>({
  categoryIds: [],
  setCategoryIds: () => {},
});

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  return (
    <CategoryContext.Provider value={{ categoryIds, setCategoryIds }}>
      {children}
    </CategoryContext.Provider>
  );
};
