import { Routes, Route, useParams, Link } from "react-router-dom";
import { Issues } from "../Issues/Issues";
import { Issue } from "../Issue/Issue";
import { NotFound } from "../NotFound/NotFound";

export const Project = () => {
  const { projectName } = useParams();

  return (
    <div>
      <Link to={`/${projectName}`}>{projectName}</Link>
      <Routes>
        <Route index element={<Issues />} />
        <Route path="issue/:issueId" element={<Issue />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
