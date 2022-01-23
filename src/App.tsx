import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { NotFound } from "./views/NotFound/NotFound";
import { Project } from "./views/Project/Project";
import { Header } from "./components/Header/Header";
import { Projects } from "./views/Projects/Projects";
import { AuthProvider } from "./contexts/auth";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Profile } from "./views/Profile/Profile";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path=":projectName/*" element={<Project />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
