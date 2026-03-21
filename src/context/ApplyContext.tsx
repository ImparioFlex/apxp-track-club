import { createContext, useContext, useState, type ReactNode } from 'react';

const ApplyContext = createContext<{
  applyOpen: boolean;
  openApply: () => void;
  closeApply: () => void;
}>({ applyOpen: false, openApply: () => {}, closeApply: () => {} });

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [applyOpen, setApplyOpen] = useState(false);
  return (
    <ApplyContext.Provider value={{ applyOpen, openApply: () => setApplyOpen(true), closeApply: () => setApplyOpen(false) }}>
      {children}
    </ApplyContext.Provider>
  );
}

export function useApply() {
  return useContext(ApplyContext);
}
