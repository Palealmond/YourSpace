import React, { createContext, useContext, useState } from 'react';

// Create a context for your application
const AuthContext = createContext(null);

// Create a provider to wrap around the components that need access to the context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the context in your components
export const AuthContextProvider = () => useContext(AuthContext);
