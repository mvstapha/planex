import "./StatCard.css";



function StatCard({ icon: Icon, label, value, suffix = "", delta, color = "blue" }) {
  // delta positif = hausse (▲), négatif = baisse (▼)
  const positif = delta >= 0;

  return (
    <article className={`sc sc-${color}`}>
      {/* Label centré en haut */}
      <p className="sc-label">{label}</p>

      {/* Ligne du bas : delta | valeur | icône */}
      <div className="sc-row">
        {typeof delta === "number" && (
          <span className={`sc-delta ${positif ? "up" : "down"}`}>
            {positif ? "▲" : "▼"} {Math.abs(delta)}
          </span>
        )}

        <span className="sc-value">
          {value}
          {suffix && <span className="sc-suffix">{suffix}</span>}
        </span>

        <span className="sc-icon">
          <Icon size={24} />
        </span>
      </div>
    </article>
  );
}

export default StatCard;
