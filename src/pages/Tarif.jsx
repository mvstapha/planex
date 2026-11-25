import React from "react";
import "./Tarif.css";

function Tarif() {
  return (
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
          <h2>Simple</h2>
          <p className="tarif-description">Pour commencer</p>
          <h3>Gratuit</h3>

          <ul>
            <li>Gestion des appels</li>
            <li>Prise de rendez-vous simple</li>
            <li>Accès aux fonctionnalités de base</li>
          </ul>

          <button>Commencer</button>
        </div>

        <div className="tarif-card tarif-populaire">
          <span className="tarif-badge">Populaire</span>
          <h2>Pro</h2>
          <p className="tarif-description">Pour les professionnels</p>
          <h3>199 DH <span>/ mois</span></h3>

          <ul>
            <li>Gestion intelligente des appels</li>
            <li>Prise de rendez-vous automatique</li>
            <li>Gestion des patients</li>
            <li>Support prioritaire</li>
          </ul>

          <button>Choisir Pro</button>
        </div>

        <div className="tarif-card">
          <h2>Business</h2>
          <p className="tarif-description">Pour les grandes structures</p>
          <h3>499 DH <span>/ mois</span></h3>

          <ul>
            <li>Toutes les fonctionnalités Pro</li>
            <li>Gestion de plusieurs médecins</li>
            <li>Statistiques avancées</li>
            <li>Assistance personnalisée</li>
          </ul>

          <button>Choisir Business</button>
        </div>

      </div>
    </div>
  );
}

export default Tarif;