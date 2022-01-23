import { useState } from "react";
import { ethers } from "ethers";
import { useAuth } from "../../contexts/auth";

export const WalletBalance = () => {
  const { walletAccount } = useAuth();
  const [balance, setBalance] = useState<string>();

  const getBalance = async () => {
    const balance = await window.ethereum.request<string>({
      method: "eth_getBalance",
      params: [walletAccount, "latest"],
    });
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div>
      <div>
        <h5>Your Balance: {balance}</h5>
        <button onClick={getBalance}>Show my balance</button>
      </div>
    </div>
  );
};
