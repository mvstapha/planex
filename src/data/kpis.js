// ============================================================
//  KPI — Vue d'ensemble (statique)
//  ila jebna API, nbedlou ghir had fichier
// ============================================================

// KPI de la "Vue d'ensemble" (Module F du cahier des charges)
// color : "blue" | "teal" | "red" | "amber"
// icon  : nom d'icône lucide (voir ICONES dans Dashboard.jsx)
export const kpis = [
  { id: "appels", label: "Appels du jour", value: 42, suffix: "", delta: +12, color: "blue", icon: "PhoneCall" },
  { id: "rdv", label: "RDV pris", value: 18, suffix: "", delta: +8, color: "teal", icon: "CalendarCheck" },
  { id: "manques", label: "Appels manqués", value: 3, suffix: "", delta: -2, color: "red", icon: "PhoneMissed" },
  { id: "resolution", label: "Taux de résolution", value: 76, suffix: " %", delta: +4, color: "blue", icon: "TrendingUp" },
  { id: "minutes", label: "Minutes consommées", value: 312, suffix: " min", delta: +24, color: "amber", icon: "Clock" },
];
