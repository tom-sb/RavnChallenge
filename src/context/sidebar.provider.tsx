import React, { FC, useState, createContext, useMemo, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../utils/constants-routes';
import useStableCallback from '../hooks/use-stable-callback';

type SidebarContext = {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  nameHeader: string;
  toggleHeader: (name: string) => void;
};

export const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

interface Props {
  children?: React.ReactNode;
}

export const SidebarProvider: FC<Props> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [nameHeader, setNameHeader] = useState('');

  const location = useLocation();

  useEffect(() => {
    const routes = Object.entries(ROUTES).map(([key, value]) => ({ key, value }));
    const route = routes.find((r) => r.value === location.pathname);
    if (route) {
      setNameHeader(route.key.toLowerCase() );
    }
  }, [location.pathname]);

  const toggleSidebar = useStableCallback(() => {
    setSidebarToggle(!sidebarToggle);
  });

  const closeSidebar = useStableCallback(() => {
    setSidebarToggle(false);
  });

  const toggleHeader = useStableCallback((name: string) => {
    setNameHeader(name);
  });

  const value = useMemo(
    () => ({
      sidebarToggle,
      toggleSidebar,
      closeSidebar,
      nameHeader,
      toggleHeader,
    }),
    [sidebarToggle, nameHeader, toggleHeader, closeSidebar, toggleSidebar],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
