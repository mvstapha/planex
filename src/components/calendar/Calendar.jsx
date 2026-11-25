import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, ArrowRight, CalendarX2 } from "lucide-react";
import StatusRDV from "../statutsrdv/StatusRDV";
import { toISODate, formatDateLongue } from "../../data";
import "./Calendar.css";

const JOURS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];


function Calendar({ rdvs = [], aujourdHui }) {
  const navigate = useNavigate();

  // Date du jour (par dÃ©faut : aujourd'hui)
  const todayISO = aujourdHui || toISODate(new Date());

  // Jour sÃ©lectionnÃ© + mois affichÃ©
  const [jour, setJour] = useState(todayISO);
  const [vue, setVue] = useState(() => {
    const d = new Date(todayISO + "T12:00:00");
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  // Compteurs par jour (pour les pastilles)
  const compteurs = useMemo(() => {
    return rdvs.reduce((acc, r) => {
      acc[r.date] = (acc[r.date] || 0) + 1;
      return acc;
    }, {});
  }, [rdvs]);

  // RDV du jour sÃ©lectionnÃ©, triÃ©s par heure
  const rdvsDuJour = useMemo(() => {
    return rdvs
      .filter((r) => r.date === jour)
      .sort((a, b) => a.heure.localeCompare(b.heure));
  }, [rdvs, jour]);

  const { year, month } = vue;
  const premierJour = new Date(year, month, 1).getDay();
  const nbJours = new Date(year, month + 1, 0).getDate();
  const decalage = (premierJour + 6) % 7; // lundi = premier jour

  const cases = [
    ...Array(decalage).fill(null),
    ...Array.from({ length: nbJours }, (_, i) => i + 1),
  ];

  const titreMois = new Date(year, month, 1).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  // Changer de mois (precedent / suivant)
  function changerMois(delta) {
    const d = new Date(year, month + delta, 1);
    setVue({ year: d.getFullYear(), month: d.getMonth() });
  }

  // Revenir Ã  aujourdhui
  function aujourdHuiClick() {
    setJour(todayISO);
    const d = new Date(todayISO + "T12:00:00");
    setVue({ year: d.getFullYear(), month: d.getMonth() });
  }

  // Ouvrir le detail dun RDV
  function ouvrirRdv(rdv) {
    navigate(`/detailsRDV?id=${rdv.id}`, { state: { rdv } });
  }

  return (
    <div className="cal">
      {/* ===== Carte 1 : Calendrier ===== */}
      <section className="cal-card cal-card--calendar">
        <header className="cal-head">
          <h2 className="cal-mois">{titreMois}</h2>

          <div className="cal-nav">
            <button type="button" className="cal-arrow" onClick={() => changerMois(-1)} aria-label="Mois prÃ©cÃ©dent">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="cal-today" onClick={aujourdHuiClick}>
              Aujourd'hui
            </button>
            <button type="button" className="cal-arrow" onClick={() => changerMois(1)} aria-label="Mois suivant">
              <ChevronRight size={18} />
            </button>
          </div>
        </header>

        {/* Grille du mois */}
        <div className="cal-grid">
          {JOURS.map((j) => (
            <div key={j} className="cal-weekday">{j}</div>
          ))}

          {cases.map((jourNum, index) => {
            if (!jourNum) {
              return <div key={`vide-${index}`} className="cal-empty" />;
            }

            const iso = toISODate(new Date(year, month, jourNum));
            const nb = compteurs[iso] || 0;

            const classes = [
              "cal-day",
              iso === todayISO ? "is-today" : "",
              iso === jour ? "is-selected" : "",
              nb > 0 ? "has-rdv" : "",
            ].filter(Boolean).join(" ");

            return (
              <button
                key={iso}
                type="button"
                className={classes}
                onClick={() => setJour(iso)}
                aria-pressed={iso === jour}
                aria-label={`${formatDateLongue(iso)}, ${nb} rendez-vous`}
              >
                <span className="cal-day-num">{jourNum}</span>
                {nb > 0 && <span className="cal-day-count">{nb}</span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* ===== Carte 2 : Rendez vous ===== */}
      <section className="cal-card cal-card--rdv">
        <div className="cal-list-head">
          <h3>{formatDateLongue(jour)}</h3>
          <span className="cal-list-count">{rdvsDuJour.length} rendez-vous</span>
        </div>

        {rdvsDuJour.length === 0 ? (
          <div className="cal-empty-state">
            <CalendarX2 size={30} />
            <p>Aucun rendez-vous ce jour-lÃ .</p>
            <small>Choisissez une autre date dans le calendrier.</small>
          </div>
        ) : (
          <ul className="cal-rdvs">
            {rdvsDuJour.map((rdv) => (
              <li key={rdv.id}>
                <button type="button" className={`cal-rdv cal-rdv--${rdv.statut.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").toLowerCase()}`} onClick={() => ouvrirRdv(rdv)}>
                  <span className="cal-rdv-heure">{rdv.heure}</span>

                  <span className="cal-rdv-main">
                    <strong>{rdv.patient.nom}</strong>
                    <small>
                      {rdv.type}
                      <span className="cal-sep">Â·</span>
                      <Clock size={12} />
                      {rdv.duree} min
                      <span className="cal-sep">Â·</span>
                      {rdv.source}
                    </small>
                  </span>

                  <StatusRDV statut={rdv.statut} />

                  <span className="cal-rdv-go">
                    DÃ©tails
                    <ArrowRight size={15} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Calendar;
