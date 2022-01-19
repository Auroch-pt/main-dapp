import { Routes, Route } from "react-router-dom";
import { Install } from "../Install/Install";
import { WalletBalance } from "../../components/WalletBalance/WalletBalance";
import { Projects } from "../Projects/Projects";

export const Home = () => {
  return (
    <div>
      {window.ethereum ? <WalletBalance /> : <Install />}
      <Routes>
        <Route index element={<Projects />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
