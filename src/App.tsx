import { Link, Route, Routes } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { ProjectsList, Header } from "./Components";
import { Home, Projects, Project } from "./Pages";

function App() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div>
            <Header />
            {breadcrumbs.map(({ breadcrumb, match }) => (
                <span key={match.pathname} style={{ marginLeft: "1em" }}>
                    <Link to={match.pathname}>⁄{breadcrumb}</Link>
                </span>
            ))}
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
