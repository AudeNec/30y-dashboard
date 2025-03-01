import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <Link to="/">Today</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/content">Content</Link>
    </nav>
  );
}

export default Nav;
