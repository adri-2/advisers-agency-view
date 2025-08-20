import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/home";
import Apropos from "./Pages/Propos";
import EtudesEtranger from "./Pages/Services/EtudesEtranger";
import WorkStudy from "./Pages/Services/WorkStudy";
import ColoniesVacances from "./Pages/Services/ColoniesVacances";
import StageInternational from "./Pages/Services/StageInternational";
import ImmigrationCanadienne from "./Pages/Services/ImmigrationCanadienne";
import VoyagesDecouvertes from "./Pages/Services/VoyagesDecouvertes";
import StudentCompetitions from "./Pages/Services/StudentCompetitions";
import Header from "./components/header";
import Footer from "./components/footer";
import WorkAccordionMenu from "./components/AccordionMenu";
import Faq from "./Pages/faq";
import Information from "./Pages/information";
import DetailsInformation from "./Pages/detailsBlog/detailsInformation";
import Contact from "./Pages/contact";

import LesPlusSollicites from "./Pages/LesPlusSollicites";
import FormulaireEvaluation from "./Pages/FormulaireEvaluation";
import CentreTelechargement from "./Pages/CentreTelechargement";
import FormulaireStageInternational from "./Pages/FormulaireStageInternational";
import CampsThematiques from "./Pages/ColoniesVacances1";
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
