import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { NotFound } from "./views/NotFound/NotFound";
import { Project } from "./views/Project/Project";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path=":projectName/*" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
