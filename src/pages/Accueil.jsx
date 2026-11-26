
import { Link } from "react-router-dom";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";
// import "../css/Accueil.css";

function Accueil() {
  return (
    <div className="planex-home">

      <NavGlobal />

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          
          <h1>
            Gérez vos rendez-vous
            <span> simplement et intelligemment</span>
          </h1>

          <p>
            Avec Planex, automatisez vos appels, simplifiez vos réservations
            et gagnez du temps grâce à une solution intelligente.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              Commencer maintenant →
            </Link>

            <Link to="/fonctionnalites" className="btn-secondary">
              Découvrir nos fonctionnalités
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-top">
              <span className="online-dot"></span>
              <span>Assistant Planex</span>
              <span className="ai-label">AI</span>
            </div>

            <div className="chat-message">
              Bonjour ! Bienvenue chez Planex 👋
            </div>

            <div className="chat-message user-message">
              Je souhaite prendre un rendez-vous.
            </div>

            <div className="chat-message">
              Bien sûr ! Quel jour vous convient ?
            </div>

            <div className="chat-status">
              <span></span> Assistant disponible
            </div>
          </div>

          <div className="floating-element floating-one">
            📅 Rendez-vous confirmé
          </div>

          <div className="floating-element floating-two">
            ✓ Automatisation
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="home-about">
        <div className="section-tag">À propos de Planex</div>

        <h2>
          Une nouvelle façon de gérer
          <span> vos rendez-vous</span>
        </h2>

        <p>
          Planex est une solution moderne qui facilite la gestion des
          rendez-vous grâce à l'intelligence artificielle. Notre objectif
          est de simplifier le travail des professionnels et d'améliorer
          l'expérience de leurs clients.
        </p>
      </section>

      {/* FEATURES */}
      <section className="home-features">
        <div className="section-tag">Nos solutions</div>

        <h2>Découvrez ce que Planex peut faire</h2>

        <div className="home-feature-cards">
          <div className="home-feature-card">
            <div className="feature-icon blue-icon">🤖</div>
            <h3>AI Call Center</h3>
            <p>
              Un assistant intelligent qui répond automatiquement aux appels
              et accompagne vos clients.
            </p>
            <Link to="/fonctionnalites">En savoir plus →</Link>
          </div>

          <div className="home-feature-card">
            <div className="feature-icon green-icon">📅</div>
            <h3>Réservation automatique</h3>
            <p>
              Permettez à vos clients de réserver leurs rendez-vous
              facilement et rapidement.
            </p>
            <Link to="/fonctionnalites">En savoir plus →</Link>
          </div>

          <div className="home-feature-card">
            <div className="feature-icon blue-icon">⏱️</div>
            <h3>Gain de temps</h3>
            <p>
              Réduisez les tâches répétitives et concentrez-vous sur
              l'essentiel de votre activité.
            </p>
            <Link to="/fonctionnalites">En savoir plus →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Prêt à simplifier votre gestion ?</h2>
        <p>
          Rejoignez Planex et découvrez une gestion des rendez-vous plus
          intelligente.
        </p>
        <Link to="/register" className="btn-cta">
          Créer mon compte →
        </Link>
      </section>

      <FooterGlobal />

    </div>
  );
}

export default Accueil;
