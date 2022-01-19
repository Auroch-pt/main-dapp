import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { NotFound } from "./views/NotFound/NotFound";
import { Project } from "./views/Project/Project";
import { Header } from "./components/Header/Header";
import { Projects } from "./views/Projects/Projects";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path=":projectName/*" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
