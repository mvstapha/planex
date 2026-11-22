
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Ouiame
import Accueil from "./pages/Accueil";
import Fonctionnalites from "./pages/Fonctionnalites";

// Marwa
import Tarif from "./pages/Tarif";
import Faq from "./pages/Faq";

// Nouhaila
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";

// Asma Baquadir
import Login from "./pages/Login";
import Register from "./pages/Register";

// Achraf
import Dashboard from "./pages/Dashboard";
import DetailsRDV from "./pages/DetailsRDV";

// Joudia
import PrivacyPage from "./PrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ouiame */}
        <Route path="/" element={<Accueil />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />

        {/* Marwa */}
        <Route path="/tarifs" element={<Tarif />} />
        <Route path="/faq" element={<Faq />} />

        {/* Nouhaila */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/* Asma Baquadir */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Achraf */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detailsRDV" element={<DetailsRDV />} />

        {/* Joudia */}
        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
