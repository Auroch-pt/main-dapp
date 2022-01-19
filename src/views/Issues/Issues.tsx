import { Link } from "react-router-dom";

export const Issues = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="issues/1">issue 1</Link>
        </li>
        <li>
          <Link to="issues/2">issue 2</Link>
        </li>
        <li>
          <Link to="issues/3">issue 3</Link>
        </li>
      </ul>
    </div>
  );
};
