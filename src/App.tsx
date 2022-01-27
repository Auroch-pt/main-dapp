import { Route, Routes } from "react-router-dom";
import { ProjectsList, Header } from "./Components";
import { Home, Projects } from "./Pages";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />}>
                    <Route index element={<ProjectsList />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
