'use client';

import { createContext, useContext, ReactNode } from 'react';

// Create a context to hold environment variables
type EnvContextType = {
  baseUrl: string;
};

const defaultEnvContext: EnvContextType = {
  baseUrl: '',
};

const EnvContext = createContext<EnvContextType>(defaultEnvContext);

// Export a provider component
export function EnvProvider({ 
  children,
  baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://relay.cptcr.dev',
}: { 
  children: ReactNode;
  baseUrl?: string;
}) {
  // Create the value object to be provided to consumers
  const value = {
    baseUrl,
  };

  return <EnvContext.Provider value={value}>{children}</EnvContext.Provider>;
}

// Export a hook to use the environment variables
export function useEnv() {
  const context = useContext(EnvContext);
  if (context === undefined) {
    throw new Error('useEnv must be used within an EnvProvider');
  }
  return context;
}