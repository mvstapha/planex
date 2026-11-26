
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const fermerMenu = () => setMenuOpen(false);

  return (
    <header className={`ng ${menuOpen ? "ng-menu-open" : ""}`}>
      <Link to="/" className="ng-logo" aria-label="Planex" onClick={fermerMenu}>
        <img src="/logo-planex.png" alt="Planex" />
      </Link>

      <button
        className="ng-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="ng-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="ng-navigation"
        className="ng-links"
        aria-label="Navigation principale"
      >
        {liens.map((lien) => (
          <NavLink
            key={lien.to}
            to={lien.to}
            end={lien.end}
            onClick={fermerMenu}
            className={({ isActive }) =>
              isActive ? "ng-link ng-link-active" : "ng-link"
            }
          >
            {lien.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/login" className="ng-login" onClick={fermerMenu}>
        Se connecter
      </Link>
    </header>
  );
}

export default NavGlobal;
