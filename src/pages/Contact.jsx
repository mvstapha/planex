import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const SUJETS = [
  "Demande de démo",
  "Tarifs et abonnement",
  "Support technique",
  "Données personnelles",
  "Autre",
];

const INITIAL = {
  nom: "",
  cabinet: "",
  email: "",
  tel: "",
  sujet: "",
  message: "",
  consent: false,
};

function validate(v) {
  const e = {};
  if (!v.nom.trim()) e.nom = "Veuillez saisir votre nom.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Veuillez saisir un e-mail valide.";
  if (!v.sujet) e.sujet = "Veuillez choisir un sujet.";
  if (!v.message.trim()) e.message = "Veuillez écrire votre message.";
  if (!v.consent) e.consent = "Votre accord est nécessaire pour envoyer le message.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      // TODO backend : remplacer par l'appel réel à l'API, par exemple :
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });
      // if (!res.ok) throw new Error("Erreur serveur");
      await new Promise((r) => setTimeout(r, 600)); // simulation temporaire
      setValues(INITIAL);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="ct-page">
      {/* Navbar : remplacer par le composant Navbar commun quand il existera */}
      <header className="ct-navbar">
       <Link to="/" className="ct-logo" aria-label="Planex">
  <img src="/logo-planex.png" alt="Planex" height="38" />
</Link>
        <button
          className="ct-menu-btn"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          aria-controls="ct-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="ct-nav" className={menuOpen ? "open" : ""} aria-label="Navigation principale">
          <Link to="/">Accueil</Link>
          <Link to="/fonctionnalites">Fonctionnalités</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact" aria-current="page">Contact</Link>
        </nav>
        <Link to="/login" className="ct-btn">Connexion</Link>
      </header>

      <section className="ct-hero">
        <div className="ct-hero-inner">
          <h1>Contactez-nous</h1>
          <p>Une question, une démo à planifier ou un besoin d'aide ? Écrivez-nous, notre équipe vous répond rapidement.</p>
        </div>
      </section>

      <main className="ct-main">
        <section className="ct-card" aria-labelledby="ct-form-title">
          <h2 id="ct-form-title">Envoyez-nous un message</h2>
          <p className="ct-sub">Les champs marqués d'un * sont obligatoires.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="ct-row">
              <div className="ct-field">
                <label htmlFor="nom">Nom complet *</label>
                <input id="nom" name="nom" type="text" autoComplete="name"
                  value={values.nom} onChange={handleChange}
                  className={errors.nom ? "invalid" : ""} />
                {errors.nom && <span className="ct-error">{errors.nom}</span>}
              </div>
              <div className="ct-field">
                <label htmlFor="cabinet">Cabinet médical</label>
                <input id="cabinet" name="cabinet" type="text" autoComplete="organization"
                  value={values.cabinet} onChange={handleChange} />
              </div>
            </div>

            <div className="ct-row">
              <div className="ct-field">
                <label htmlFor="email">E-mail *</label>
                <input id="email" name="email" type="email" autoComplete="email"
                  value={values.email} onChange={handleChange}
                  className={errors.email ? "invalid" : ""} />
                {errors.email && <span className="ct-error">{errors.email}</span>}
              </div>
              <div className="ct-field">
                <label htmlFor="tel">Téléphone</label>
                <input id="tel" name="tel" type="tel" autoComplete="tel"
                  value={values.tel} onChange={handleChange} />
              </div>
            </div>

            <div className="ct-field">
              <label htmlFor="sujet">Sujet *</label>
              <select id="sujet" name="sujet" value={values.sujet} onChange={handleChange}
                className={errors.sujet ? "invalid" : ""}>
                <option value="">Choisir un sujet</option>
                {SUJETS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.sujet && <span className="ct-error">{errors.sujet}</span>}
            </div>

            <div className="ct-field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={values.message} onChange={handleChange}
                className={errors.message ? "invalid" : ""} />
              {errors.message && <span className="ct-error">{errors.message}</span>}
            </div>

            <div className="ct-field">
              <label className="ct-check" htmlFor="consent">
                <input id="consent" name="consent" type="checkbox"
                  checked={values.consent} onChange={handleChange} />
                <span>
                  J'accepte que Planex utilise ces informations pour répondre à ma demande,
                  conformément à la <Link to="/politique-confidentialite">politique de confidentialité</Link>. *
                </span>
              </label>
              {errors.consent && <span className="ct-error">{errors.consent}</span>}
            </div>

            <button type="submit" className="ct-btn" disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="ct-status" role="status">
                Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.
              </p>
            )}
            {status === "error" && (
              <p className="ct-status" role="alert">
                Une erreur est survenue. Écrivez-nous directement à <a href="mailto:contact@planex.ma">contact@planex.ma</a>.
              </p>
            )}
          </form>
        </section>

        <aside className="ct-card ct-info" aria-label="Coordonnées">
          <div className="ct-info-item">
            <div className="ct-ic">
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            </div>
            <div>
              <h3>E-mail</h3>
              {/* À vérifier : adresse e-mail de contact */}
              <a href="mailto:contact@planex.ma">contact@planex.ma</a>
            </div>
          </div>
          <div className="ct-info-item">
            <div className="ct-ic">
              <svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
            </div>
            <div>
              <h3>Téléphone</h3>
              <p>+212 [À compléter]</p>
            </div>
          </div>
          <div className="ct-info-item">
            <div className="ct-ic">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </div>
            <div>
              <h3>Horaires</h3>
              <p>Lundi – Vendredi, 9h – 18h<br />Votre assistant IA, lui, répond 24h/24.</p>
            </div>
          </div>
          <div className="ct-info-item">
            <div className="ct-ic">
              <svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </div>
            <div>
              <h3>Adresse</h3>
              <p>[Adresse à compléter], Maroc</p>
            </div>
          </div>
          <p className="ct-note">
            Pour toute demande liée à vos données personnelles :{" "}
            <a href="mailto:privacy@planex.ma">privacy@planex.ma</a>.
          </p>
        </aside>
      </main>

      {/* Footer : remplacer par le composant Footer commun quand il existera */}
      <footer className="ct-footer">
        <div className="ct-f-grid">
          <div className="ct-f-brand">
            <Link to="/" className="ct-logo" aria-label="Planex">
  <img src="/logo-planex-white.png" alt="Planex" height="46" />
</Link>
            <p>La secrétaire IA des cabinets médicaux : appels et rendez-vous gérés 24h/24, en darija et en français.</p>
          </div>
          <div>
            <h4>Produit</h4>
            <ul>
              <li><Link to="/fonctionnalites">Fonctionnalités</Link></li>
              <li><Link to="/tarifs">Tarifs</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Nous écrire</Link></li>
              <li><a href="mailto:privacy@planex.ma">privacy@planex.ma</a></li>
            </ul>
          </div>
        </div>
        <div className="ct-f-bottom">
          <span>© 2026 Planex. Tous droits réservés.</span>
          <span>Fait au Maroc</span>
        </div>
      </footer>
    </div>
  );
}
