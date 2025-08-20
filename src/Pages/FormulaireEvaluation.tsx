import { useState } from "react";
import DivNavBar from "../components/divNavBar";

const FormulaireEvaluation = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    diplome: "",
    moyenne: "",
    age: "",
    experience: "",
    pays: "",
    voyage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Formulaire soumis !");
  };

  return (
    <>
      <DivNavBar />
      <div className="flex justify-center items-center min-h-screen bg-[#D5DCF5] py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
            Vérifiez votre éligibilité pour nos Bourses/Stages
          </h2>
          <p className="mb-6 text-blue-800 text-center">
            en répondant à 06 questions à choix multiples
          </p>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Nom de famille
            </label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Quel est votre dernier diplôme ? *
            </label>
            <select
              name="diplome"
              value={form.diplome}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>Baccalauréat</option>
              <option>BTS, DUT, DEUG, BACC + 2</option>
              <option>Licence</option>
              <option>Master</option>
              <option>GCE A Level</option>
              <option>Baccalauréat International</option>
              <option>
                Au secondaire (Terminale / Upper Sixth ou équivalent)
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Quelle est la moyenne de votre dernier diplôme ou du dernier
              bulletin? *
            </label>
            <select
              name="moyenne"
              value={form.moyenne}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>10 / 20 à 12 / 20</option>
              <option>12 / 20 à 14 / 20</option>
              <option>14 / 20 à 16 / 20</option>
              <option>16 / 20 à 18 / 20</option>
              <option>18 / 20 à 20 / 20</option>
              <option>GPA 2.0 to 2.5</option>
              <option>GPA 2.5 to 3.0</option>
              <option>GPA 3.0 to 3.5</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Quel âge avez vous ? *
            </label>
            <select
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>15 à 17</option>
              <option>17 à 19</option>
              <option>19 à 21</option>
              <option>21 à 23</option>
              <option>25 à 27</option>
              <option>27 à 30</option>
              <option>30 +</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Êtes vous employé ou avez vous de l'expérience professionnelle
              (pour Niveau Master)?
            </label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>0 à 2 ans</option>
              <option>2 à 5 ans</option>
              <option>5 ans et plus</option>
              <option>Non</option>
              <option>Oui des stages académiques et /ou de vacances</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Quel pays vous intéresse si vous n'avez pas de bourse? *
            </label>
            <select
              name="pays"
              value={form.pays}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>Allemagne</option>
              <option>Angleterre</option>
              <option>Belgique</option>
              <option>Canada</option>
              <option>Chine</option>
              <option>Etats-Unis</option>
              <option>Finlande</option>
              <option>France</option>
              <option>Inde</option>
              <option>Lettonie</option>
              <option>Maroc</option>
              <option>Dubaï</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">
              Quand souhaitez vous voyager ?
            </label>
            <select
              name="voyage"
              value={form.voyage}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Sélectionnez</option>
              <option>01 à 03 Mois</option>
              <option>Moins de 06 mois</option>
              <option>06 à 12 mois</option>
              <option>01 à 02 Ans</option>
              <option>02 ans et +</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-950 transition"
          >
            Soumettre
          </button>
        </form>
      </div>
      {/* <Accordions /> */}
    </>
  );
};

export default FormulaireEvaluation;

// import { useState } from "react";
// import bgImg from "./belgique.jpg"; // ton image de fond

// const Accordions = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sections = [
//     {
//       title: "Généralités sur le pays",
//       content: "Infos générales sur la Belgique...",
//     },
//     {
//       title: "Système éducatif du pays",
//       content: "Description du système éducatif...",
//     },
//     {
//       title: "Pièces requises pour une admission",
//       content: "Liste des documents nécessaires...",
//     },
//     {
//       title: "Filières et Rentrées académiques",
//       content: "Les différentes filières et périodes d'admission...",
//     },
//     {
//       title: "Niveau de langue requis",
//       content: "Exemple : B2 en français ou anglais...",
//     },
//     {
//       title: "Procédures de Visa et durée procédures",
//       content: "Infos sur la demande de visa...",
//     },
//     {
//       title: "Quelques raisons d’étudier en Belgique",
//       content: "Arguments et avantages...",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
//       <div className="bg-white/80 rounded-lg shadow-lg w-[400px] p-6">
//         <h2 className="text-xl font-bold text-center mb-6 text-blue-900">
//           Qualité à petit prix
//         </h2>

//         {sections.map((section, index) => (
//           <div key={index} className="border-b border-gray-300">
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="w-full flex justify-between items-center py-3 text-gray-700 font-medium hover:text-blue-700"
//             >
//               {section.title}
//               <span>{openIndex === index ? "▲" : "▼"}</span>
//             </button>
//             {openIndex === index && (
//               <div className="p-3 text-gray-600">{section.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordions;
