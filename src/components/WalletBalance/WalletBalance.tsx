import { useState } from "react";
import { ethers } from "ethers";

export const WalletBalance = () => {
  const [balance, setBalance] = useState<string>();

  const getBalance = async () => {
    const [account] = await window.ethereum.request<string>({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const balance = await provider.getBalance(account);
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
