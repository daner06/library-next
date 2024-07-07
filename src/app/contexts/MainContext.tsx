import { createContext, ReactNode, useContext, useState } from "react";

export type MainContextObject = {
  readonly showAssetModal: boolean;
  setShowAssetModal: (show: boolean) => void;
};

type MainContextProviderProps = {
  children: ReactNode;
};

export const MainContext = createContext<MainContextObject>({
  showAssetModal: false,
  setShowAssetModal: () => {},
});

export function MainContextProvider({ children }: MainContextProviderProps) {
  const [showAssetModal, setShowAssetModal] = useState(false);

  const contextValue = {
    showAssetModal,
    setShowAssetModal,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
}

export const usePHMContext = () => useContext(MainContext);

export default MainContext;
