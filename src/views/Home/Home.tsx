import { Install } from "./Install/Install";
import { WalletBalance } from "../../components/WalletBalance/WalletBalance";

export const Home = () => {
  return <div>{window.ethereum ? <WalletBalance /> : <Install />}</div>;
};
