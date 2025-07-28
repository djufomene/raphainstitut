import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Accueil from "./Pages/Accueil.jsx";
import MotsPresident from "./Pages/MotsPresident.jsx";
import NosEtablissement from "./Pages/NosEtablissement.jsx";
import NosFormations from "./Pages/NosFormations.jsx";
import Bibliotheque from "./Pages/Bibliotheque.jsx";
import VieCampus from "./Pages/VieCampus.jsx";
import FormationDetail from "./Pages/FormationDetail.jsx";
import Contact from "./Pages/Contact.jsx";
import EcoleDedail from "./Pages/EcoleDedail.jsx";
import Logement from "./Pages/Logement.jsx";
import Localisation from "./Pages/Localisation.jsx";
import Admission from "./Pages/Admission.jsx";
import SalleInfo from "./Pages/SalleInfo.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ActualiteDetail from "./Pages/ActualiteDetail.jsx";
import NosLaboratoires from "./Pages/NosLaboratoires.jsx"; 
import InstrumentsMedicaux from "./Pages/DetailLabo.jsx";
import Inscription from "./Pages/Inscription.jsx";
import InscriptionDetail from "./Pages/InscriptionDetail.jsx";
import FormPersonal from "./Pages/FormPersonal";
import FormPrecedenteEducation from "./Pages/FormPrecedenteEducation";
import Confirmation from "./Pages/Confirmation.jsx";

import "@fortawesome/fontawesome-free/css/all.min.css";

// Layout avec header et footer
const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

// Layout minimal (sans header/footer)
const MinimalLayout = () => (
  <>
   
    <main>
      <Outlet />
    </main>
   
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes avec layout complet */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/MotsPresident" element={<MotsPresident />} />
          <Route path="/NosEtablissement" element={<NosEtablissement />} />
          <Route path="/NosFormations" element={<NosFormations />} />
          <Route path="/VieCampus" element={<VieCampus />} />
          <Route path="/Bibliotheque" element={<Bibliotheque />} />
          <Route path="/formations/:id" element={<FormationDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/school-info/:schoolId" element={<EcoleDedail />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Logement" element={<Logement />} />
          <Route path="/actualite/:id" element={<ActualiteDetail />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/SalleInfo" element={<SalleInfo />} />
          <Route path="/laboratoires" element={<NosLaboratoires />} />
          <Route path="/instruments-medicaux/:type" element={<InstrumentsMedicaux />} />
          
        </Route>

        {/* Routes avec layout minimal */}
        <Route element={<MinimalLayout />}>
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/InscriptionDetail/:type" element={<InscriptionDetail />} />
          <Route path="/form-personal" element={<FormPersonal />} />
          <Route path="/FormPrecedenteEducation" element={<FormPrecedenteEducation />} />
          <Route path="/confirmation" element={<Confirmation />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

