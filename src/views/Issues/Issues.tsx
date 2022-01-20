import { Link } from "react-router-dom";

export const Issues = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="issue/1">issue 1</Link>
        </li>
        <li>
          <Link to="issue/2">issue 2</Link>
        </li>
        <li>
          <Link to="issue/3">issue 3</Link>
        </li>
      </ul>
    </div>
  );
};
