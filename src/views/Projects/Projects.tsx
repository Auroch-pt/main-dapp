import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/project1">project 1</Link>
        </li>
        <li>
          <Link to="/project2">project 2</Link>
        </li>
        <li>
          <Link to="/project3">project 3</Link>
        </li>
      </ul>
    </div>
  );
};
