import { Link, Route, Routes } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { ProjectsList, Header } from "./Components";
import { Home, Projects, Project, NotFound } from "./Pages";

function App() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div>
            <Header />
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <Link key={match.pathname} to={match.pathname}>
                    {breadcrumb} {index !== breadcrumbs.length - 1 && " / "}
                </Link>
            ))}
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />}>
                    <Route index element={<ProjectsList />} />
                    <Route path=":id" element={<Project />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
