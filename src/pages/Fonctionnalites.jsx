
import { Link } from "react-router-dom";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";
import "./Fonctionnalites.css";

function Fonctionnalites() {
  return (
    <div className="planex-features-page">

      <NavGlobal />

      {/* HERO */}
      <section className="features-hero">
        <span className="features-badge">Découvrez Planex</span>

        <h1>
          Des fonctionnalités
          <span> intelligentes pour vous simplifier la vie</span>
        </h1>

        <p>
          Découvrez les outils qui permettent à Planex de transformer
          la gestion de vos rendez-vous en une expérience simple,
          rapide et automatique.
        </p>

        <Link to="/register" className="features-button">
          Commencer maintenant →
        </Link>
      </section>

      {/* AI CALL CENTER */}
      <section className="service-detail">
        <div className="service-text">
          <span className="service-number">01 — INTELLIGENCE ARTIFICIELLE</span>

          <h2>
            AI Call Center
            <span> Un assistant toujours disponible</span>
          </h2>

          <p>
            Grâce à l'intelligence artificielle, Planex peut répondre
            automatiquement aux appels téléphoniques de vos clients.
            L'assistant comprend leurs demandes et les accompagne
            dans leurs démarches.
          </p>

          <ul>
            <li>✓ Réponse automatique aux appels</li>
            <li>✓ Assistance intelligente des clients</li>
            <li>✓ Disponibilité 24h/24 et 7j/7</li>
            <li>✓ Réduction du temps d'attente</li>
          </ul>
        </div>

        <div className="service-visual">
          <div className="ai-illustration">
            <div className="ai-circle">🤖</div>
            <h3>Assistant IA</h3>
            <p>Bonjour ! Comment puis-je vous aider ?</p>
            <div className="ai-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <small>Assistant en ligne</small>
          </div>
        </div>
      </section>

      {/* AUTOMATIC APPOINTMENT */}
      <section className="service-detail appointment-section">
        <div className="service-visual">
          <div className="appointment-illustration">
            <div className="calendar-header">
              <span>Mon calendrier</span>
              <span>📅</span>
            </div>

            <div className="calendar-month">Novembre 2026</div>

            <div className="calendar-grid">
              {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => (
                <span className="calendar-day" key={index}>{day}</span>
              ))}

              {Array.from({ length: 30 }, (_, index) => (
                <span
                  key={index}
                  className={index + 1 === 24 ? "selected-day" : "calendar-date"}
                >
                  {index + 1}
                </span>
              ))}
            </div>

            <div className="appointment-confirmed">
              <span>✓</span>
              Rendez-vous confirmé
            </div>
          </div>
        </div>

        <div className="service-text">
          <span className="service-number">02 — RÉSERVATION</span>

          <h2>
            Réservation automatique
            <span> Planifiez sans effort</span>
          </h2>

          <p>
            Planex facilite la prise de rendez-vous en permettant aux
            clients de choisir facilement une date et une heure disponibles.
            Toutes les réservations sont organisées dans un calendrier.
          </p>

          <ul>
            <li>✓ Réservation simple et rapide</li>
            <li>✓ Consultation des disponibilités</li>
            <li>✓ Organisation des rendez-vous</li>
            <li>✓ Confirmation des réservations</li>
          </ul>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="features-benefits">
        <span className="features-badge">Pourquoi choisir Planex ?</span>

        <h2>Une solution pensée pour votre quotidien</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div>⏱️</div>
            <h3>Gain de temps</h3>
            <p>Automatisez les tâches répétitives et gagnez du temps.</p>
          </div>

          <div className="benefit-card">
            <div>⚡</div>
            <h3>Rapidité</h3>
            <p>Offrez à vos clients une expérience simple et rapide.</p>
          </div>

          <div className="benefit-card">
            <div>🔒</div>
            <h3>Organisation</h3>
            <p>Gérez vos rendez-vous de manière claire et organisée.</p>
          </div>

          <div className="benefit-card">
            <div>🤝</div>
            <h3>Disponibilité</h3>
            <p>Accompagnez vos clients à tout moment.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta">
        <h2>Prêt à découvrir Planex ?</h2>
        <p>
          Simplifiez la gestion de vos rendez-vous dès aujourd'hui.
        </p>
        <Link to="/register" className="features-button white-button">
          Créer mon compte →
        </Link>
      </section>

      <FooterGlobal />

    </div>
  );
}

export default Fonctionnalites;
