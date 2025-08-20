import React from "react";
import DivNavBar from "../components/divNavBar";
import { Link } from "react-router-dom";
const downloads = {
  etudes: [
    { name: "USA", file: "/pdfs/usa.pdf" },
    { name: "Canada", file: "/pdfs/canada.pdf" },
    { name: "France", file: "/pdfs/france.pdf" },
    { name: "Dubai", file: "/pdfs/dubai.pdf" },
    { name: "Finlande", file: "/pdfs/finlande.pdf" },
    { name: "Maroc", file: "/pdfs/maroc.pdf" },
  ],
  workStudy: [
    { name: "Prospectus", file: "/pdfs/prospectus.pdf" },
    { name: "Explication du projet", file: "/pdfs/projet.pdf" },
    { name: "06 Avantages de l’alternance", file: "/pdfs/avantages.pdf" },
    { name: "Présentation du Work Study", file: "/pdfs/workstudy.pdf" },
  ],
  stages: [
    { name: "Prospectus", file: "/pdfs/stage-prospectus.pdf" },
    { name: "Présentation du concept", file: "/pdfs/stage-concept.pdf" },
    { name: "Avantages", file: "/pdfs/stage-avantages.pdf" },
  ],
  colonies: [
    { name: "Prospectus", file: "/pdfs/colonies-prospectus.pdf" },
    {
      name: "Présentation des colonies",
      file: "/pdfs/colonies-presentation.pdf",
    },
    { name: "Programme", file: "/pdfs/colonies-programme.pdf" },
  ],
};

function CentreTelechargement() {
  return (
    <>
      {" "}
      <DivNavBar />
      <div className="min-h-screen bg-gray-800 text-white p-10">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-8">
          Centre de Téléchargements
        </h1>

        {/* Ressources Études */}
        <section className="bg-blue-600 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">
            Ressources Études à l'étranger
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {downloads.etudes.map((item, idx) => (
              <a
                key={idx}
                href={item.file}
                download
                className="flex flex-col items-center bg-white text-black p-4 rounded-lg shadow hover:bg-gray-200"
              >
                <img src="/pdf-icon.png" alt="PDF" className="w-12 h-12 mb-2" />
                {item.name}
              </a>
            ))}
          </div>
        </section>

        {/* Work & Study */}
        <section className="bg-red-700 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">
            Ressources Work & Study MBA
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {downloads.workStudy.map((item, idx) => (
              <a
                key={idx}
                href={item.file}
                download
                className="flex flex-col items-center bg-white text-black p-4 rounded-lg shadow hover:bg-gray-200"
              >
                <img src="/pdf-icon.png" alt="PDF" className="w-12 h-12 mb-2" />
                {item.name}
              </a>
            ))}
          </div>
        </section>

        {/* Stages */}
        <section className="bg-black p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">
            Ressources Stages à l’international
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {downloads.stages.map((item, idx) => (
              <a
                key={idx}
                href={item.file}
                download
                className="flex flex-col items-center bg-white text-black p-4 rounded-lg shadow hover:bg-gray-200"
              >
                <img src="/pdf-icon.png" alt="PDF" className="w-12 h-12 mb-2" />
                {item.name}
              </a>
            ))}
          </div>
        </section>

        {/* Colonies Vacances */}
        <section className="bg-yellow-500 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-black">
            Ressources Colonies Vacances
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {downloads.colonies.map((item, idx) => (
              <a
                key={idx}
                href={item.file}
                download
                className="flex flex-col items-center bg-white text-black p-4 rounded-lg shadow hover:bg-gray-200"
              >
                <img src="/pdf-icon.png" alt="PDF" className="w-12 h-12 mb-2" />
                {item.name}
              </a>
            ))}
          </div>
        </section>
      </div>
      <div></div>
      <section className="w-full mx-auto p-6  shadow-md mt-10 flex flex-row justify-between items-center">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ">
          <Link to="/contact">Besoin d'un fichier ? Ecrivez nous</Link>
        </button>
      </section>
    </>
  );
}

export default CentreTelechargement;
