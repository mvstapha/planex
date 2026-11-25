
import React from "react";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";
import "./Tarif.css";

function Tarif() {
  return (
    <>
      <NavGlobal />
    <div className="tarif-page">
      <div className="tarif-header">
        <h1>Nos offres et tarifs</h1>
        <p>
          Choisissez la formule qui correspond le mieux aux besoins
          de votre cabinet médical.
        </p>
      </div>

      <div className="tarif-container">

        <div className="tarif-card">
          <h2>Starter</h2>
          <p className="tarif-description">Pour commencer</p>
          <h3>Tarif à définir</h3>

          <ul>
            <li>1 agent IA</li>
            <li>1 numéro de téléphone</li>
            <li>300 minutes par mois</li>
            <li>Gestion des appels entrants</li>
            <li>Prise de rendez-vous</li>
          </ul>

          <button>Choisir Starter</button>
        </div>

        <div className="tarif-card tarif-populaire">
          <span className="tarif-badge">Populaire</span>
          <h2>Pro</h2>
          <p className="tarif-description">Pour les professionnels</p>
          <h3>Tarif à définir</h3>

          <ul>
            <li>2 agents IA</li>
            <li>1 000 minutes par mois</li>
            <li>Rappels sortants</li>
            <li>Gestion des rendez-vous</li>
            <li>Intégration agenda externe</li>
          </ul>

          <button>Choisir Pro</button>
        </div>

        <div className="tarif-card">
          <h2>Clinique</h2>
          <p className="tarif-description">Pour les grandes structures</p>
          <h3>Tarif à définir</h3>

          <ul>
            <li>Agents IA multiples</li>
            <li>Gestion de plusieurs médecins</li>
            <li>API</li>
            <li>Minutes sur mesure</li>
            <li>Solution adaptée aux cliniques</li>
          </ul>

          <button>Choisir Clinique</button>
        </div>

      </div>

      <p className="tarif-note">
        Les minutes supplémentaires sont facturées à l'utilisation.
        Essai gratuit ou démo limitée disponible.
      </p>
    </div>
    <FooterGlobal />
    </>
  );
}

export default Tarif;
