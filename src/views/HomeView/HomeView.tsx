import { Link } from "react-router-dom";
import "./HomeView.css";
function HomeView() {
  return (
    <nav className="nav-container">
      <h1>Home </h1>
      <Link className="logout" to="/login">Login</Link>

    </nav>
  );
}

export default HomeView;
