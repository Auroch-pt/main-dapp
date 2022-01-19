import { Routes, Route, useParams, Link } from "react-router-dom";
import { Issues } from "../Issues/Issues";
import { Issue } from "../Issue/Issue";

export const Project = () => {
  const { projectName } = useParams();

  return (
    <div>
      <Link to={`/${projectName}`}>{projectName}</Link>
      <Routes>
        <Route index element={<Issues />} />
        <Route path="issues" element={<Issues />} />
        <Route path="issues/:issueId" element={<Issue />} />
      </Routes>
    </div>
  );
};
