import { Route, Routes } from "react-router-dom";
import { ProjectsList, Header } from "./Components";
import { Home, Projects, Project } from "./Pages";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />}>
                    <Route index element={<ProjectsList />} />
                    <Route path=":id" element={<Project />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
