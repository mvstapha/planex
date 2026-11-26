import { PhoneCall, CalendarCheck, PhoneMissed, TrendingUp, Clock } from "lucide-react";
import NavbarDashboard from "../components/navbar/NavbarDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import StatCard from "../components/stats/StatCard";
import Calendar from "../components/calendar/Calendar";
import { kpis, TODAY, formatDateLongue, rdvDuJour, rendezVous } from "../data";

const ICONES = {
  PhoneCall,
  CalendarCheck,
  PhoneMissed,
  TrendingUp,
  Clock,
};

function Dashboard() {
  const nbRdvJour = rdvDuJour(TODAY).length;

  return (
    <div className="dash">
      {/* 1. Navbar en haut (pleine largeur) */}
      <NavbarDashboard />

      {/* 2. Sidebar à gauche + contenu à droite */}
      <div className="dash-body">
        <Sidebar />

        <main className="dash-main">
          {/* 3. Titre "Dashboard" */}
          <header className="dash-head">
            <div>
              <h1>Dashboard</h1>
              <p>{nbRdvJour} rendez-vous aujourd'hui</p>
            </div>
            <span className="dash-date-badge">{formatDateLongue(TODAY)}</span>
          </header>

          {/* 4. KPI (Vue d'ensemble) */}
          <section className="dash-kpis">
            {kpis.map((k) => (
              <StatCard
                key={k.id}
                icon={ICONES[k.icon]}
                label={k.label}
                value={k.value}
                suffix={k.suffix}
                delta={k.delta}
                color={k.color}
              />
            ))}
          </section>

          {/* 5. Calendrier + RDV */}
          <Calendar rdvs={rendezVous} aujourdHui={TODAY} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
