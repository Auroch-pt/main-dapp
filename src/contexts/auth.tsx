import { createContext, FC, useContext, useEffect, useState } from "react";
import { useCreateUserMutation } from "../graphql/graphql";
interface AuthContextData {
  isConnected: boolean;
  handleConnectWallet(): Promise<void>;
  handleDisconnect(): Promise<void>;
  walletAccount: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: FC = ({ children }) => {
  const [isConnected, setIsconected] = useState<boolean>(false);
  const [walletAccount, setWalletAccount] = useState<string>("");
  const [createUserMutation] = useCreateUserMutation();

  const handleConnectWallet = async () => {
    const provider = window.ethereum;

    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const account = accounts[0];

    createUser(account);
  };

  const handleDisconnect = async () => {
    setIsconected(false);
    setWalletAccount("");
  };

  const createUser = async (address: string) => {
    await createUserMutation({
      variables: {
        address,
      },
    })
      .then((res) => {
        setWalletAccount(res.data.insertUser.address);
        localStorage.setItem("address", res.data.insertUser.address);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const storagedAddress = localStorage.getItem("address");
    if (storagedAddress) {
      setWalletAccount(storagedAddress);
    }
  }, []);

  useEffect(() => {
    setIsconected(walletAccount ? true : false);
  }, [walletAccount]);

  return (
    <AuthContext.Provider
      value={{
        isConnected,
        handleConnectWallet,
        handleDisconnect,
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
