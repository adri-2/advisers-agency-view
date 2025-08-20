import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/home.tsx";
import Apropos from "./Pages/Propos.tsx";
import EtudesEtranger from "./pages/Services/EtudesEtranger.jsx";
import WorkStudy from "./pages/Services/WorkStudy.jsx";
import ColoniesVacances from "./pages/Services/ColoniesVacances.jsx";
import StageInternational from "./pages/Services/StageInternational.jsx";
import ImmigrationCanadienne from "./pages/Services/ImmigrationCanadienne.jsx";
import VoyagesDecouvertes from "./pages/Services/VoyagesDecouvertes.jsx";
import StudentCompetitions from "./pages/Services/StudentCompetitions.jsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import WorkAccordionMenu from "./components/AccordionMenu.jsx";
import Faq from "./Pages/faq.tsx";
import Information from "./Pages/information.tsx";
import DetailsInformation from "./Pages/detailsBlog/detailsInformation.tsx";
import Contact from "./Pages/contact.tsx";

import LesPlusSollicites from "./Pages/LesPlusSollicites.tsx";
import FormulaireEvaluation from "./Pages/FormulaireEvaluation.tsx";
import CentreTelechargement from "./Pages/CentreTelechargement.tsx";
import FormulaireStageInternational from "./Pages/FormulaireStageInternational.tsx";
import CampsThematiques from "./Pages/ColoniesVacances1.tsx";
// Composant layout contenant Header, Footer et Outlet (zone de contenu dynamique)
function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "home",
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "a-propos",
        element: <Apropos />,
      },
      { path: "les-plus-sollicites", element: <LesPlusSollicites /> },
      {
        path: "services",
        children: [
          {
            path: "/services/etudes-a-l-etranger",
            element: <EtudesEtranger />,
          },
          { path: "/services/work-study", element: <WorkStudy /> },
          {
            path: "/services/stage-a-l-international-usa",
            element: <StageInternational />,
          },
          {
            path: "/services/colonies-de-vacances",
            element: <ColoniesVacances />,
          },
          {
            path: "/services/immigration-canadienne",
            element: <ImmigrationCanadienne />,
          },
          {
            path: "/services/voyages-decouvertes",
            element: <VoyagesDecouvertes />,
          },
          {
            path: "/services/student-competitions",
            element: <StudentCompetitions />,
          },
        ],
      },

      { element: <Faq></Faq>, path: "faq" },
      {
        element: <Information></Information>,
        path: "news",
        children: [
          {
            path: "details/:id",
            element: <DetailsInformation></DetailsInformation>,
          },
        ],
      },
      { element: <Contact></Contact>, path: "contact" },
      { element: <WorkAccordionMenu />, path: "accordion-menu" },
      { element: <FormulaireEvaluation />, path: "formulaire-evaluation" },
      { element: <CentreTelechargement />, path: "centre-de-telechargement" },
      {
        element: <FormulaireStageInternational />,
        path: "formulaire-stage-international",
      },
      {
        element: <CampsThematiques />,
        path: "colonies-de-vacances-1",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
