import { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router";
import { LoginContext } from "../store/LoginContext";

function Navbar() {
  let logCtx = useContext(LoginContext);

  if (logCtx.isLogged) {
    if (logCtx.role == "user")
      return (
        <div className={styles.header}>
          <div className={styles.logo}>Book Shop</div>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="all">All-Books</Link>
            </li>

            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      );
    else
      return (
        <div className={styles.header}>
          <div className={styles.logo}>Book Shop</div>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/users">Users </Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      );
  } else
    return (
      <div className={styles.header}>
        <div className={styles.logo}>Book Shop</div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;
