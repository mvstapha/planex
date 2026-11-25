import { patients } from "./patients";

// ============================================================
//  RENDEZ-VOUS (statique)
// fintidar API
// ============================================================

// Helper : format date "YYYY-MM-DD"
const pad = (n) => String(n).padStart(2, "0");

// Convertir Date → "YYYY-MM-DD"
export function toISODate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// Rje3 date ISO dyal (lyoum + offset jours)
export function addDays(offset) {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return toISODate(d);
}

// Lyoum (date ISO)
export const TODAY = addDays(0);

// Format date longue : "mardi 24 novembre 2026"
export function formatDateLongue(dateISO) {
  if (!dateISO) return "";
  const [y, m, d] = dateISO.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Lista dyal les rendez-vous (5 RDV : 3 aujourd'hui, 1 demain, 1 hier)
export const rendezVous = [
  { id: "RDV-1042", date: addDays(0), heure: "09:00", duree: 30, type: "Consultation générale", statut: "confirmé", langue: "fr", motif: "Suivi tension artérielle", source: "Appel IA", patient: patients.bennani },
  { id: "RDV-1043", date: addDays(0), heure: "10:30", duree: 20, type: "Contrôle", statut: "en attente", langue: "darija", motif: "Résultats analyses", source: "Manuel", patient: patients.idrissi },
  { id: "RDV-1044", date: addDays(0), heure: "14:00", duree: 30, type: "Consultation générale", statut: "confirmé", langue: "fr", motif: "Bilan annuel", source: "Appel IA", patient: patients.alaoui },
  { id: "RDV-1045", date: addDays(1), heure: "09:30", duree: 30, type: "Suivi", statut: "confirmé", langue: "darija", motif: "Suivi grossesse", source: "Appel IA", patient: patients.benkirane },
  { id: "RDV-1041", date: addDays(-1), heure: "11:00", duree: 20, type: "Contrôle", statut: "honoré", langue: "fr", motif: "Contrôle tension", source: "Manuel", patient: patients.naciri },
];

// RDV dyal nhar li mkhtar (triés par heure)
export function rdvDuJour(dateISO) {
  return rendezVous
    .filter((r) => r.date === dateISO)
    .sort((a, b) => a.heure.localeCompare(b.heure));
}

// RDV b id
export function rdvParId(id) {
  return rendezVous.find((r) => r.id === id);
}

// { "2026-11-24": 3, ... } — 3adad RDV f kola nhar (pour le calendrier)
export function nombreRdvParJour() {
  return rendezVous.reduce((acc, r) => {
    acc[r.date] = (acc[r.date] || 0) + 1;
    return acc;
  }, {});
}
