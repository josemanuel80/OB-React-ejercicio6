import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataRegister, setDataRegister] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <DataContext.Provider
      value={{ dataRegister, setDataRegister, loggedIn, setLoggedIn }}
    >
      {children}
    </DataContext.Provider>
  );
};
