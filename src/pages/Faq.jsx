import React, { useState } from "react";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

const questions = [
  {
    question: "Qu'est-ce que Planex ?",
    answer:
      "Planex est une solution intelligente qui automatise la gestion des appels et la prise de rendez-vous médicaux."
  },
  {
    question: "Comment fonctionne l'assistant téléphonique IA ?",
    answer:
      "L'assistant IA répond automatiquement aux appels des patients et les aide à prendre, modifier ou annuler leurs rendez-vous."
  },
  {
    question: "Quelles langues l'assistant IA prend-il en charge ?",
    answer:
      "L'assistant IA prend en charge le français et la Darija marocaine afin de faciliter la communication avec les patients."
  },
  {
    question: "Est-ce que Planex fonctionne 24h/24 ?",
    answer:
      "Oui, l'assistant intelligent peut répondre aux appels à tout moment, même en dehors des horaires de travail du cabinet."
  },
  {
    question: "L'assistant peut-il envoyer des rappels aux patients ?",
    answer:
      "Oui, Planex permet d'envoyer des rappels aux patients pour les informer de leurs rendez-vous."
  },
  {
    question: "Que se passe-t-il si un patient demande à parler à une personne ?",
    answer:
      "L'appel peut être transféré vers un membre du personnel du cabinet lorsque cela est nécessaire."
  },
  {
    question: "L'assistant IA donne-t-il des conseils médicaux ?",
    answer:
      "Non, l'assistant IA ne réalise pas de diagnostic et ne prescrit aucun médicament. Son rôle est de gérer les appels et les rendez-vous."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Planex accorde une grande importance à la confidentialité et à la protection des données personnelles des patients."
  },
  {
    question: "Comment choisir un abonnement ?",
    answer:
      "Vous pouvez consulter nos offres Starter, Pro et Clinique et choisir la formule adaptée aux besoins de votre cabinet."
  },
  {
    question: "Que se passe-t-il lorsque les minutes incluses sont dépassées ?",
    answer:
      "Les minutes supplémentaires sont facturées selon la consommation."
  }
];

  return (
    <>
      <NavGlobal />
    <div className="faq-page">
      <div className="faq-header">
        <h1>Questions fréquentes</h1>
        <p>
          Retrouvez les réponses aux questions les plus posées sur Planex.
        </p>
      </div>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <FooterGlobal />
    </>
  );
}

export default Faq;