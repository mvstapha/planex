import { Link, NavLink } from "react-router-dom";
import "./NavGlobal.css";

const liens = [
  { to: "/", label: "Accueil", end: true },
  { to: "/fonctionnalites", label: "Fonctionnalités" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function NavGlobal() {
  return (
    <header className="ng">
      <Link to="/" className="ng-logo" aria-label="Planex">
        <img src="/logo-planex.png" alt="Planex" />
      </Link>

      <nav className="ng-links" aria-label="Navigation principale">
        {liens.map((lien) => (
          <NavLink
            key={lien.to}
            to={lien.to}
            end={lien.end}
            className={({ isActive }) =>
              isActive ? "ng-link ng-link-active" : "ng-link"
            }
          >
            {lien.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/login" className="ng-login">
        Se connecter
      </Link>
    </header>
  );
}

export default NavGlobal;
