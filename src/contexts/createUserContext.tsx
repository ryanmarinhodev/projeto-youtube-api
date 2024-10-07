import React, { createContext, useState } from 'react';
import api from '../api';

export const CreateUserContext = createContext({} as any);

export const CreateUserStorage = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('user/sign-up', {
        name,
        email,
        password,
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(null);
    }
  };

  return (
    <CreateUserContext.Provider value={{ createUser, loading, error }}>
      {children}
    </CreateUserContext.Provider>
  );
};
