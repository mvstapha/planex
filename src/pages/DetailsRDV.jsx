import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Mail,
  CalendarDays,
  Clock,
  FileText,
  Globe,
  Stethoscope,
  User,
  CheckCircle2,
  XCircle,
  CalendarClock,
  AlertTriangle,
  History,
} from "lucide-react";
import NavbarDashboard from "../components/navbar/NavbarDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import StatusRDV from "../components/statutsrdv/StatusRDV";
import { rdvParId, formatDateLongue, rendezVous } from "../data";

/**
 * Page de détail d'un rendez-vous.
 *
 * - Lit l'id depuis l'URL (?id=...) ou le state de navigation.
 * - Affiche la fiche patient, les infos du RDV, l'historique, et des actions.
 * - Les actions sont locales (pas d'API) pour l'instant.
 */
function DetailsRDV() {
  const [params] = useSearchParams();
  const location = useLocation();

  const id = params.get("id");
  // RDV depuis le state (clic) ou depuis l'id (refresh) ou le premier par défaut
  const rdv = location.state?.rdv || rdvParId(id) || rendezVous[0];

  // Statut local (modifiable par les actions)
  const [statut, setStatut] = useState(rdv.statut);
  const [actionMsg, setActionMsg] = useState("");
  const [signale, setSignale] = useState(false);

  // Historique du patient (autres RDV, triés du plus récent au plus ancien)
  const historique = rendezVous
    .filter((r) => r.patient.nom === rdv.patient.nom && r.id !== rdv.id)
    .sort((a, b) => (a.date + a.heure).localeCompare(b.date + b.heure))
    .reverse();

  // Actions locales (confirmer / annuler / reporter)
  function faireAction(type) {
    if (type === "confirmer") {
      setStatut("confirmé");
      setActionMsg("Rendez-vous confirmé.");
    } else if (type === "annuler") {
      setStatut("annulé");
      setActionMsg("Rendez-vous annulé.");
    } else if (type === "reporter") {
      setStatut("en attente");
      setActionMsg("Rendez-vous reporté — à replanifier.");
    }
    // Effacer le message après 3s
    window.setTimeout(() => setActionMsg(""), 3000);
  }

  return (
    <div className="drv">
      <NavbarDashboard />

      <div className="drv-body">
        <Sidebar />

        <main className="drv-main">
          {/* Retour au dashboard */}
          <Link to="/dashboard" className="drv-back">
            <ArrowLeft size={16} />
            Retour au dashboard
          </Link>

          {/* En-tête patient */}
          <header className="drv-head">
            <span className="drv-avatar">{rdv.patient.nom.charAt(0)}</span>
            <div className="drv-id">
              <h1>{rdv.patient.nom}</h1>
              <p>
                {rdv.type} · {rdv.id}
              </p>
            </div>
            <StatusRDV statut={statut} />
          </header>

          {/* Message d'action (toast) */}
          {actionMsg && <div className="drv-toast">{actionMsg}</div>}

          {/* Grille : RDV + Patient */}
          <div className="drv-grid2">
            {/* Carte RDV */}
            <section className="drv-card">
              <h2>Rendez-vous</h2>
              <ul className="drv-list">
                <li>
                  <CalendarDays size={16} />
                  <span>{formatDateLongue(rdv.date)}</span>
                </li>
                <li>
                  <Clock size={16} />
                  <span>
                    {rdv.heure} · {rdv.duree} min
                  </span>
                </li>
                <li>
                  <Stethoscope size={16} />
                  <span>{rdv.type}</span>
                </li>
                <li>
                  <FileText size={16} />
                  <span>{rdv.motif || "—"}</span>
                </li>
                <li>
                  <Globe size={16} />
                  <span>
                    {rdv.langue === "fr" ? "Français" : "Darija"} · {rdv.source}
                  </span>
                </li>
              </ul>

              {rdv.notes && (
                <p className="drv-notes">
                  <strong>Notes :</strong> {rdv.notes}
                </p>
              )}
            </section>

            {/* Carte Patient */}
            <section className="drv-card">
              <h2>Patient</h2>
              <ul className="drv-list">
                <li>
                  <User size={16} />
                  <span>{rdv.patient.nom}</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>{rdv.patient.telephone}</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>{rdv.patient.email || "—"}</span>
                </li>
              </ul>

              {/* Had les boutons sont locaux (pas d'API) :
                  - Confirmer (teal)  : RDV confirmé
                  - Reporter  (ambre) : RDV reporté (à replanifier)
                  - Annuler   (rouge) : RDV annulé
                  Ila jebna API, had les boutons ghadi ycalliw le backend.
                  Pour l'instant, kaybadlo ghir l'affichage. */}
              <div className="drv-actions">
                <button
                  type="button"
                  className="drv-btn drv-btn-ok"
                  onClick={() => faireAction("confirmer")}
                  disabled={statut === "confirmé" || statut === "honoré"}
                >
                  <CheckCircle2 size={16} />
                  Confirmer
                </button>
                <button
                  type="button"
                  className="drv-btn drv-btn-warn"
                  onClick={() => faireAction("reporter")}
                >
                  <CalendarClock size={16} />
                  Reporter
                </button>
                <button
                  type="button"
                  className="drv-btn drv-btn-danger"
                  onClick={() => faireAction("annuler")}
                  disabled={statut === "annulé"}
                >
                  <XCircle size={16} />
                  Annuler
                </button>
              </div>
            </section>
          </div>

          {/* Historique du patient */}
          <section className="drv-card">
            <h2>
              <History size={15} />
              Historique du patient
            </h2>

            {historique.length === 0 ? (
              <p className="drv-empty">Aucun autre rendez-vous pour ce patient.</p>
            ) : (
              <ul className="drv-hist">
                {historique.map((r) => (
                  <li key={r.id}>
                    <span className="drv-hist-date">{formatDateLongue(r.date)}</span>
                    <span className="drv-hist-type">{r.type}</span>
                    <StatusRDV statut={r.statut} />
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Bouton "Signaler une erreur de l'agent" :
              - Sert à signaler une erreur de l'assistant IA.
              - Aide à améliorer la reconnaissance et les réponses.
              - Pour l'instant : juste un état local (pas d'API). */}
          <section className="drv-signal">
            <button
              type="button"
              className={`drv-signal-btn ${signale ? "done" : ""}`}
              onClick={() => setSignale(true)}
              disabled={signale}
            >
              <AlertTriangle size={16} />
              {signale
                ? "Erreur signalée — merci"
                : "Signaler une erreur de l'agent"}
            </button>
            <small>
              Aide à améliorer la reconnaissance et les réponses de l'assistant IA.
            </small>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DetailsRDV;
