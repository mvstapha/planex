import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";

// Les passages <span className="ml-todo"> sont à compléter avec les vraies informations de Planex.
const SECTIONS = [
  {
    id: "editeur",
    title: "Éditeur du site",
    body: (
      <>
        <p>Le site <strong>Planex</strong> est édité par :</p>
        <ul>
          <li><strong>Dénomination :</strong> Planex <span className="ml-todo">[forme juridique à compléter]</span></li>
          <li><strong>Siège social :</strong> <span className="ml-todo">[adresse à compléter]</span>, Maroc</li>
          <li><strong>RC / ICE :</strong> <span className="ml-todo">[numéros à compléter]</span></li>
          <li><strong>E-mail :</strong> <a href="mailto:contact@planex.ma">contact@planex.ma</a></li>
          <li><strong>Téléphone :</strong> <span className="ml-todo">[+212 à compléter]</span></li>
        </ul>
      </>
    ),
  },
  {
    id: "publication",
    title: "Directeur de publication",
    body: (
      <p>Le directeur de publication est <span className="ml-todo">[nom et fonction à compléter]</span>.</p>
    ),
  },
  {
    id: "hebergeur",
    title: "Hébergeur",
    body: (
      <>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Société :</strong> <span className="ml-todo">[nom de l'hébergeur à compléter]</span></li>
          <li><strong>Adresse :</strong> <span className="ml-todo">[adresse de l'hébergeur à compléter]</span></li>
          <li><strong>Site web :</strong> <span className="ml-todo">[URL à compléter]</span></li>
        </ul>
      </>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>L'ensemble du contenu du site (textes, logo, graphismes, icônes, images, code) est la propriété de Planex ou de ses partenaires, et est protégé par la législation marocaine sur la propriété intellectuelle.</p>
        <p>Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable de Planex, est interdite.</p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Données personnelles",
    body: (
      <>
        <p>Planex traite les données personnelles conformément à la loi marocaine n° 09-08, sous le contrôle de la CNDP. Les détails (données collectées, durées de conservation, droits d'accès, de rectification et d'opposition) figurent dans notre <Link to="/politique-confidentialite">politique de confidentialité</Link>.</p>
        <p>Pour exercer vos droits : <a href="mailto:privacy@planex.ma">privacy@planex.ma</a>.</p>
      </>
    ),
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    body: (
      <>
        <p>Planex s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'absence totale d'erreurs ou d'interruptions du site.</p>
        <p>L'assistant vocal IA gère les appels et les rendez-vous. Il ne fournit ni diagnostic, ni conseil médical. En cas d'urgence, contactez immédiatement le 15 (SAMU) ou les urgences.</p>
      </>
    ),
  },
  {
    id: "liens",
    title: "Liens externes",
    body: (
      <p>Le site peut contenir des liens vers des sites tiers. Planex n'exerce aucun contrôle sur leur contenu et décline toute responsabilité quant à leur utilisation.</p>
    ),
  },
  {
    id: "droit",
    title: "Droit applicable",
    body: (
      <p>Les présentes mentions légales sont soumises au droit marocain. En cas de litige, et à défaut de solution amiable, les tribunaux marocains compétents seront seuls compétents.</p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>Pour toute question concernant ces mentions légales, écrivez-nous à <a href="mailto:contact@planex.ma">contact@planex.ma</a> ou via la <Link to="/contact">page Contact</Link>.</p>
    ),
  },
];

export default function MentionsLegales() {
  const [active, setActive] = useState(SECTIONS[0].id);

  // Surligne la section active dans le sommaire
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ml-page">
      <NavGlobal />

      <section className="ml-hero">
        <div className="ml-hero-inner">
          <h1>Mentions légales</h1>
          <p>Les informations légales du site Planex : qui l'édite, qui l'héberge et quelles règles s'appliquent à son utilisation.</p>
          <span className="ml-badge">Dernière mise à jour : 22 novembre 2026</span>
        </div>
      </section>

      <main className="ml-layout">
        <aside className="ml-toc" aria-label="Sommaire">
          <h2>Sommaire</h2>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>{s.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article>
          {SECTIONS.map((s, i) => (
            <section id={s.id} key={s.id}>
              <span className="ml-num">{i + 1}</span>
              <h2>{s.title}</h2>
              <div className="ml-body">{s.body}</div>
            </section>
          ))}
        </article>
      </main>

      <FooterGlobal />
    </div>
  );
}
