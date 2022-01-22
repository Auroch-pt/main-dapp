import { createContext, FC, useContext, useState } from "react";

interface AuthContextData {
  isConnected: boolean;
  handleConnectWallet(): Promise<void>;
  walletAccount: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: FC = ({ children }) => {
  const [walletAccount, setAccount] = useState<string>("");

  const handleConnectWallet = async () => {
    const provider = window.ethereum;

    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const account = accounts[0];

    setAccount(account);
  };

  return (
    <AuthContext.Provider
      value={{
        isConnected: walletAccount ? true : false,
        handleConnectWallet,
        walletAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
