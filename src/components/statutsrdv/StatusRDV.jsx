import "./StatusRDV.css";

/**
 * Pastille de statut d'un rendez-vous.
 * statut : "confirmé" | "en attente" | "honoré" | "annulé" | "absent"
 *
 * Transforme le statut en classe CSS (ex. "en attente" → "sb-en-attente")
 * pour appliquer la couleur correspondante.
 */
function StatusRDV({ statut }) {
  const classe = (statut || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return <span className={`sb-badge sb-${classe}`}>{statut}</span>;
}

export default StatusRDV;
