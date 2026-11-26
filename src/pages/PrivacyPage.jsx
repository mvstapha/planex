import { useEffect, useState } from "react";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";

const SECTIONS = [
  {
    id: "qui",
    title: "Responsable des données",
    body: (
      <>
        <p>Planex fournit aux cabinets médicaux un assistant vocal IA qui gère les appels et les rendez-vous.</p>
        <p>Pour les données des patients, <strong>le cabinet médical est le responsable de traitement</strong> et Planex est <strong>sous-traitant</strong> : nous traitons les données uniquement pour le compte du cabinet. Pour les données de votre compte, Planex est responsable de traitement.</p>
        {/* À compléter avec le numéro de déclaration/autorisation CNDP */}
        <p>Nous respectons la loi marocaine n° 09-08 sur la protection des données personnelles, sous le contrôle de la CNDP. Les données de santé étant des données sensibles, leur traitement fait l'objet d'une déclaration ou d'une autorisation préalable auprès de la CNDP.</p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Données collectées",
    body: (
      <>
        <ul>
          <li><strong>Compte du cabinet :</strong> nom, e-mail, téléphone, informations du cabinet, facturation.</li>
          <li><strong>Patients :</strong> nom, numéro de téléphone et historique des rendez-vous.</li>
          <li><strong>Appels :</strong> enregistrement audio, transcription, résumé, date, durée et langue.</li>
          <li><strong>Rendez-vous :</strong> date, heure, type de consultation et statut.</li>
          <li><strong>Données techniques :</strong> journaux de connexion nécessaires au service.</li>
        </ul>
        <p className="pc-note">Planex ne gère aucun dossier médical. L'assistant ne donne ni diagnostic, ni conseil médical, ni information médicale.</p>
      </>
    ),
  },
  {
    id: "secret",
    title: "Secret médical",
    body: (
      <>
        <p>L'assistant IA ne communique <strong>aucune information médicale</strong>. Pour un patient reconnu par son numéro, il ne donne que des informations de rendez-vous (date et heure du prochain rendez-vous, par exemple).</p>
        <p>Si le cabinet l'exige, l'assistant demande une vérification simple avant de donner ces informations, comme le nom et la date de naissance. En cas de doute, ou pour toute question médicale, l'assistant transfère l'appel au cabinet ou prend un message pour le médecin.</p>
        <p className="pc-note">En cas d'urgence (douleur thoracique, difficulté à respirer, saignement abondant...), l'assistant invite le patient à contacter immédiatement le 15 (SAMU) ou les urgences, et alerte le médecin.</p>
      </>
    ),
  },
  {
    id: "usage",
    title: "Utilisation des données",
    body: (
      <ul>
        <li>Répondre aux appels et gérer les rendez-vous (prise, report, annulation).</li>
        <li>Envoyer confirmations et rappels par SMS, WhatsApp ou e-mail.</li>
        <li>Afficher appels, transcriptions et statistiques dans le tableau de bord.</li>
        <li>Gérer l'abonnement, les paiements et le support.</li>
        <li>Améliorer la qualité de l'assistant et la sécurité du service.</li>
      </ul>
    ),
  },
  {
    id: "enregistrement",
    title: "Enregistrement des appels",
    body: (
      <>
        <p>Chaque appel commence par un message qui prévient que l'appel peut être enregistré. La personne peut refuser : l'appel continue alors normalement, sans enregistrement.</p>
        <p>Si le patient le demande, l'assistant se présente comme un assistant virtuel. Pour les rappels sortants, il s'identifie comme automatisé, respecte les horaires autorisés et la liste d'opposition.</p>
      </>
    ),
  },
  {
    id: "partage",
    title: "Partage avec des tiers",
    body: (
      <>
        <p>Nous partageons uniquement les données nécessaires avec les prestataires qui font fonctionner le service :</p>
        <ul>
          <li>reconnaissance vocale, synthèse vocale et intelligence artificielle ;</li>
          <li>opérateurs de téléphonie ;</li>
          <li>envoi de SMS, WhatsApp et e-mail ;</li>
          <li>paiement et hébergement.</li>
        </ul>
        <p>Chaque prestataire est lié par un contrat de protection des données. Les données d'un cabinet ne sont jamais visibles par un autre cabinet.</p>
      </>
    ),
  },
  {
    id: "transfert",
    title: "Transfert hors du Maroc",
    body: (
      <>
        <p>Pour traiter les appels, certains prestataires d'intelligence artificielle ou d'hébergement peuvent se trouver hors du Maroc. Les enregistrements et transcriptions peuvent donc être transmis à l'étranger.</p>
        <p>Dans ce cas, nous limitons les données transmises au strict nécessaire, nous choisissons des prestataires offrant un niveau de protection adapté, et nous les engageons par contrat à protéger ces données, conformément à la loi 09-08 et aux règles de la CNDP.</p>
      </>
    ),
  },
  {
    id: "conservation",
    title: "Durée de conservation",
    body: (
      <p>Les enregistrements audio sont conservés pendant une durée choisie par le cabinet (90 jours par défaut), puis supprimés. Les autres données sont conservées tant que le compte est actif, puis supprimées après sa clôture, sauf obligation légale (facturation, par exemple).</p>
    ),
  },
  {
    id: "securite",
    title: "Sécurité",
    body: (
      <ul>
        <li>Chiffrement des échanges (TLS, SRTP) et des données stockées.</li>
        <li>Authentification à deux facteurs pour les médecins.</li>
        <li>Séparation stricte des données entre les cabinets.</li>
        <li>Accès internes limités et enregistrés dans un journal.</li>
      </ul>
    ),
  },
  {
    id: "droits",
    title: "Vos droits",
    body: (
      <>
        <p>Conformément à la loi 09-08, vous pouvez à tout moment :</p>
        <ul>
          <li>accéder à vos données et en obtenir une copie ;</li>
          <li>les faire rectifier ou supprimer ;</li>
          <li>vous opposer à leur traitement, notamment aux appels de rappel.</li>
        </ul>
        <p>Un patient peut adresser sa demande à son cabinet ou à Planex, qui la transmettra au cabinet concerné. Vous pouvez aussi saisir la CNDP.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>Le site utilise des cookies nécessaires à son fonctionnement (connexion, langue, sécurité). Tout cookie de mesure d'audience n'est déposé qu'avec votre accord, que vous pouvez retirer depuis les paramètres de votre navigateur.</p>
    ),
  },
  {
    id: "contact",
    title: "Nous contacter",
    body: (
      <>
        <div className="pc-contact-card">
          <p>Une question ou une demande liée à vos données ? Écrivez-nous à <a href="mailto:privacy@planex.ma">privacy@planex.ma</a> ou passez par la <a href="/contact">page Contact</a>.</p>
        </div>
        <p style={{ marginTop: 14 }}>Cette politique peut évoluer. La date en haut de la page indique la dernière version.</p>
      </>
    ),
  },
];

const PLEDGES = [
  {
    title: "Données chiffrées",
    text: "Vos échanges et vos données stockées sont protégés par chiffrement.",
    icon: (<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  },
  {
    title: "Jamais vendues",
    text: "Nous ne vendons pas vos données et ne les utilisons pas pour la publicité.",
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></>),
  },
  {
    title: "Vous gardez le contrôle",
    text: "Accès, rectification, suppression : vos droits restent toujours ouverts.",
    icon: (<><path d="M4 12h6M4 6h16M4 18h10" /><circle cx="18" cy="15" r="3" /></>),
  },
];

export default function PrivacyPage() {
  const [active, setActive] = useState(SECTIONS[0].id);

  // Surligne la section active dans le sommaire
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="privacy-page">
      <NavGlobal />

      <section className="pc-hero">
        <div className="pc-hero-inner">
          <div>
            <h1>Politique de confidentialité</h1>
            <p>Les données de santé sont sensibles. Voici, en termes simples, ce que Planex collecte, pourquoi, et comment vous gardez le contrôle.</p>
            <span className="pc-badge">Dernière mise à jour : 22 novembre 2026</span>
          </div>
          <svg className="pc-shield" viewBox="0 0 120 140" aria-hidden="true">
            <path d="M60 6 L108 24 V68 C108 100 86 124 60 134 C34 124 12 100 12 68 V24 Z" fill="#fff" />
            <path d="M60 6 L108 24 V68 C108 100 86 124 60 134 Z" fill="#14bbae" opacity=".28" />
            <path d="M38 70 L54 86 L84 52" fill="none" stroke="#1658f4" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <div className="pc-pledges">
        {PLEDGES.map((p) => (
          <div className="pc-pledge" key={p.title}>
            <div className="pc-ic"><svg viewBox="0 0 24 24">{p.icon}</svg></div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      <main className="pc-layout">
        <aside className="pc-toc" aria-label="Sommaire">
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
            <section className="pc-section" id={s.id} key={s.id}>
              <span className="pc-num">{i + 1}</span>
              <h2>{s.title}</h2>
              <div className="pc-body">{s.body}</div>
            </section>
          ))}
        </article>
      </main>

      <FooterGlobal />
    </div>
  );
}
