import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown } from "lucide-react";
import { praticien } from "../../data";
import "./NavbarDashboard.css";


function NavbarDashboard() {
  return (
    <header className="nb">
      {/* Logo Planex */}
      <Link to="/dashboard" className="nb-logo" aria-label="Planex">
        <img src="/logo-planex.png" alt="Planex" />
      </Link>

      {/* Recherche (FINTIDAR API) */}
      <div className="nb-search">
        <Search size={17} className="nb-search-icon" />
        <input
          type="search"
          placeholder="Rechercher un patient, un rendez-vous..."
          aria-label="Rechercher"
        />
      </div>

      {/* Actions (agent IA, notifications, profil) */}
      <div className="nb-actions">
        {/* statut agent IA (3TINAH ACTIF WSF)*/}
        <span className="nb-agent">
          <span className="nb-agent-dot" />
          Agent IA actif
        </span>

        {/* Cloche notifications */}
        <button type="button" className="nb-bell" aria-label="Notifications">
          <Bell size={18} />
          <span className="nb-dot" />
        </button>

        {/* Profil médecin */}
        <div className="nb-user" role="button" tabIndex={0}>
          <span className="nb-avatar">{praticien.initiales}</span>
          <span className="nb-user-txt">
            <strong>{praticien.nom}</strong>
            <small>
              {praticien.specialite} · {praticien.ville}
            </small>
          </span>
          <ChevronDown size={16} className="nb-chevron" />
        </div>
      </div>
    </header>
  );
}

export default NavbarDashboard;
