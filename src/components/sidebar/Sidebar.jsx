import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  PhoneCall,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import "./Sidebar.css";



function Sidebar() {
  // Lista dyal les items dyal menu
  const items = [
    { label: "Tableau de bord", icon: LayoutDashboard, to: "/dashboard" },
    { label: "Rendez-vous", icon: CalendarDays, soon: true },
    { label: "Appels", icon: PhoneCall, soon: true },
    { label: "Patients", icon: Users, soon: true },
    { label: "Paramètres", icon: Settings, soon: true },
  ];

  return (
    <aside className="sb">
      {/* Navigation */}
      <nav className="sb-nav">
        {items.map(({ label, icon: Icon, to, soon }) =>
          to ? (
            // Lien actif (NavLink = active automatique)
            <NavLink
              key={label}
              to={to}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) =>
                isActive ? "sb-link active" : "sb-link"
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ) : (
            // Bouton désactivé (module pas encore prêt)
            <button key={label} type="button" className="sb-link soon" disabled title="Module pas encore disponible">
              <Icon size={20} />
              <span>{label}</span>
              {soon && <em className="sb-soon">bientôt</em>}
            </button>
          )
        )}
      </nav>


      <div className="sb-bottom">
        <button type="button" className="sb-logout" aria-label="Déconnexion">
          <LogOut size={19} />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
