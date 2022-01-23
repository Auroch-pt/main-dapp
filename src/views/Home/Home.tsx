import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
/* import { Install } from "../Install/Install"; */
import { WalletBalance } from "../../components/WalletBalance/WalletBalance";
import { Projects } from "../Projects/Projects";

export const Home = () => {
  const { isConnected } = useAuth();
  return (
    <div>
      {isConnected && <WalletBalance />}
      <Routes>
        <Route index element={<Projects />} />
      </Routes>
    </div>
  );
};
