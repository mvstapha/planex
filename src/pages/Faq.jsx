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
        "L'assistant IA répond automatiquement aux appels des patients et les aide à prendre leurs rendez-vous."
    },
    {
      question: "Est-ce que Planex fonctionne 24h/24 ?",
      answer:
        "Oui, l'assistant intelligent peut gérer les appels à tout moment, même en dehors des horaires de travail."
    },
    {
      question: "Comment choisir un abonnement ?",
      answer:
        "Vous pouvez consulter nos offres et choisir la formule qui correspond aux besoins de votre cabinet."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Planex accorde une grande importance à la confidentialité et à la protection des données."
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