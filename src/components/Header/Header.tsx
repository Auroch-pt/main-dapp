import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const Header = () => {
  const { isConnected, handleConnectWallet } = useAuth();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          {isConnected ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <button onClick={handleConnectWallet}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};
