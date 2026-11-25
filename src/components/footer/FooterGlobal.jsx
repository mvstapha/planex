import { Link } from "react-router-dom";
import "./FooterGlobal.css";

function FooterGlobal() {
  return (
    <footer className="fg">
      <div className="fg-grid">
        <div className="fg-brand">
          <Link to="/" className="fg-logo" aria-label="Planex">
            <img src="/logo-planex-white.png" alt="Planex" height="46" />
          </Link>
          <p>
            La secrétaire IA des cabinets médicaux : appels et rendez-vous
            gérés 24h/24, en darija et en français.
          </p>
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

      <div className="fg-bottom">
        <span>© 2026 Planex. Tous droits réservés.</span>
        <span>Fait au Maroc</span>
      </div>
    </footer>
  );
}

export default FooterGlobal;
