import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { makeRequest } from './utils/request';

type AppContextType = {
  isConnected: boolean;
};

const initialState: AppContextType = {
  isConnected: false
};

const AppContext = createContext<AppContextType>(initialState);

export const useAppContext = () => {
  return useContext(AppContext);
};

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    const checkServerStatus = () => {
      makeRequest
        .get('http://localhost:8080/actuator/health')
        .then((response) => {
          if (response.status === 200) {
            setIsConnected(true);
          } else {
            throw Error('Server is not ready yet.');
          }
        })
        .catch((e) => {
          setIsConnected(false);
          console.log(e);
        });
    };

    checkServerStatus();
    if (!isConnected) {
      const interval = setInterval(() => {
        checkServerStatus();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isConnected]);

  const value: AppContextType = {
    isConnected
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
