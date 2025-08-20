import Caroussel from "../components/caroussel";
import first from "../assets/first_home.avif";
import second from "../assets/second_home.avif";
import book from "../assets/book_home.avif";
import chimi from "../assets/chimi_home.avif";
import team from "../assets/Team work.png";
import exams from "../assets/Exams-rafiki.png";
import { Link } from "react-router-dom";
const imagesList = [first, second, book, chimi];

import { useState } from "react";

const SummerCamps = () => {
  const [activeTab, setActiveTab] = useState("thematic");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Caroussel */}
      <Caroussel images={imagesList} />
      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Camps de Vacances Advisers Agency
          </h1>
          <p className="text-center mt-2 text-sm sm:text-base">
            Découvrez nos programmes éducatifs et ludiques pour enfants et
            adolescents
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap justify-center">
            <button
              className={`px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium ${
                activeTab === "thematic"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("thematic")}
            >
              Camps Thématiques
            </button>
            <button
              className={`px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium ${
                activeTab === "non-thematic"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("non-thematic")}
            >
              Camps Non Thématiques
            </button>
            <button
              className={`px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium ${
                activeTab === "schedule"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("schedule")}
            >
              Périodes et Prix
            </button>
            <button
              className={`px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium ${
                activeTab === "destinations"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("destinations")}
            >
              Destinations
            </button>
            <button
              className={`px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium ${
                activeTab === "accommodation"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("accommodation")}
            >
              Hébergements
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Thematic Camps */}
        {activeTab === "thematic" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              Camps Thématiques
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Dans ces camps, les étudiants sont immergés dans le monde de
              l'entreprise. Si votre enfant souhaite devenir styliste,
              architecte, marketeur, ingénieur, architecte d'intérieur, juriste,
              banquier, médecin, etc, ces camps sont faits pour lui.
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Les étudiants sont immergés dans l'environnement professionnel de
              leur choix et apprennent avec des professionnels. En outre, ils
              doivent rédiger un rapport qu'ils présenteront lors de la
              cérémonie de clôture du camp.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Proposition de Thèmes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-900 mb-2">
                  Langues disponibles:
                </h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Anglais</li>
                  <li>Espagnol</li>
                  <li>Italien</li>
                  <li>Chinois</li>
                  <li>Catalan</li>
                  <li>Arabe</li>
                </ul>

                <h4 className="font-medium text-blue-900 mb-2">
                  Classes de cuisine
                </h4>
                <h4 className="font-medium text-blue-900 mb-2">
                  Préparation aux examens officiels
                </h4>
              </div>

              <div>
                <h4 className="font-medium text-blue-900 mb-2">
                  Combinaisons populaires:
                </h4>
                <ul className="list-disc list-inside">
                  <li>Langue + camp de football</li>
                  <li>Langue + Camp de natation</li>
                  <li>Camp de langue + tennis</li>
                  <li>Langue + Padelle Camp</li>
                  <li>Camp de langue + motocross</li>
                  <li>Camp linguistique + tourisme</li>
                  <li>Thème de l'atelier (journaliste, acteur, etc...)</li>
                </ul>

                <h4 className="font-medium text-blue-900 mt-4 mb-2">
                  Introductions spécialisées:
                </h4>
                <ul className="list-disc list-inside">
                  <li>Introduction au thème de design d'intérieur</li>
                  <li>Introduction au thème du design graphique</li>
                  <li>Introduction au thème de conception du produit</li>
                  <li>Introduction au design de mode</li>
                  <li>Atelier de conception multidisciplinaire</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm sm:text-base">
                Pour certains de ces programmes d'été thématiques, les
                participants ont réalisé un projet et l'ont présenté à la fin du
                programme.
              </p>
            </div>
          </div>
        )}

        {/* Non-Thematic Camps */}
        {activeTab === "non-thematic" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              Camps Non Thématiques
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Ces camps sont essentiellement constitués de tourisme linguistique
              et sportif. C'est idéal pour les jeunes enfants qui seront placés
              dans un environnement interactif avec des enfants de différentes
              cultures et origines.
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Ils acquièrent des compétences en leadership, en communication, en
              présentation et une nouvelle langue tout en s'amusant pendant leur
              séjour dans les camps.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-2">
                Âge des participants
              </h3>
              <p className="mb-2 text-sm sm:text-base">
                La plupart de nos camps sont ouverts aux enfants de 08 à 18 ans.
                Ils sont répartis par catégories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="text-lg font-bold text-blue-900">
                    08 à 12 ans
                  </span>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="text-lg font-bold text-blue-900">
                    13 à 15 ans
                  </span>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="text-lg font-bold text-blue-900">
                    16 à 18 ans
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Schedule and Prices */}
        {activeTab === "schedule" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              À quelle période sont organisés nos camps ?
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              Les camps les plus célèbres se déroulent pendant les Grandes
              Vacances soit durant les mois de{" "}
              <span className="font-semibold">juin, juillet et août</span>. Ils
              durent 01 à 08 semaines. Cependant les Camps de vacances sont
              aussi disponibles pendant les congés de Noël en{" "}
              <span className="font-semibold">Décembre</span> et de pâques en{" "}
              <span className="font-semibold">Avril</span> pour les parents qui
              les sollicitent.
            </p>

            <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-8 overflow-x-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4">
                Prix des Colonies
              </h3>
              <p className="mb-4 text-green-700 text-sm sm:text-base">
                Les prix dépendent du type de camps sollicité ainsi que du pays
                choisi.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden text-xs sm:text-base">
                  <thead className="bg-green-100 text-green-800">
                    <tr>
                      <th className="py-3 px-2 sm:px-4 text-left">Durée</th>
                      <th className="py-3 px-2 sm:px-4 text-left">
                        Prix (F CFA)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">01 semaine</td>
                      <td className="py-3 px-2 sm:px-4">590.000 - 760.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">02 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        1.000.000 - 1.280.000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">03 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        1.500.000 - 1.600.000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">04 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        1.840.000 - 1.950.000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">05 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        2.300.000 - 2.400.000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">06 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        2.790.000 - 2.900.000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">07 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        3.200.000 - 3.300.000
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-2 sm:px-4">08 semaines</td>
                      <td className="py-3 px-2 sm:px-4">
                        3.580.000 - 3.680.000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                  Prix pour Cambridge, Oxford, London pour les camps à thème
                </h4>
                <p className="text-blue-900 text-sm sm:text-base">
                  02 semaines: 3.350.000 - 3.580.320 F CFA
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Destinations */}
        {activeTab === "destinations" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              Nos Destinations
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              Nous avons plusieurs destinations pour nos camps de vacances:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">
                  Barcelone - Espagne
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Camp d'été de la mode</li>
                  <li>Camp de vacances linguistique et thématique</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Toronto - Canada</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Camp d'été linguistique</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">
                  Miami Fort Lauderdale - États-Unis
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Camp d'été</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
                <h3 className="font-semibold text-lg mb-2">
                  Oxford, Cambridge et Londres - Royaume-Uni
                </h3>
                <p className="text-gray-600">
                  Ces camps plongent les enfants dans le monde professionnel
                  qu'il a choisi. Médecins, ingénieurs, avocats, architectes,
                  etc. Ces camps sont axés sur des cours de préparation à la
                  profession afin de donner un aperçu du monde professionnel que
                  les enfants aimeraient embrasser.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">
                Le point sur la sécurité
              </h3>
              <p className="mb-4 text-blue-900 text-sm sm:text-base">
                La sécurité a toujours été l'aspect le plus important d'un camp.
                Chaque groupe de 15 étudiants est géré par deux superviseurs
                adultes. Généralement, un groupe ne dépasse pas 15 étudiants.
              </p>
              <p className="text-blue-900 text-sm sm:text-base">
                Le personnel d'Advisers Agency voyagera également avec des
                enfants et passera tout le camp avec eux.
              </p>
            </div>
          </div>
        )}

        {/* Accommodation */}
        {activeTab === "accommodation" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              Les types d'hébergements
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              Nous proposons deux types d'hébergement:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
                  Les hébergements résidentiels
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  Les logements résidentiels sont composés de dortoirs où les
                  enfants passent la nuit. Ils ont un restaurant pour se nourrir
                  et une salle pour socialiser avec les autres participants du
                  camp.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  Le Wifi est également disponible avec accès à un ordinateur.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    Ce mode d'hébergement est généralement plus coûteux que les
                    hébergements en famille d'accueil.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
                  Les familles d'accueil
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  Le logement en famille d'accueil est pour ceux qui préfèrent
                  partir dans un environnement familial. Le bus viendra les
                  chercher tous les matins et les déposera tous les soirs pour
                  la nuit.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  Toutes les familles recevant des enfants sont examinées et la
                  plupart d'entre elles ont une expérience des enfants
                  internationaux.
                </p>
                <p className="text-sm sm:text-base">
                  L'enfant va manger et interagir avec les membres de la famille
                  et apprendre les bases de son style de vie pendant toute la
                  période qu'il passera là-bas.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-full cursor-pointer shadow-md transition-colors text-sm sm:text-base">
                Demandez votre devis pour un Camp de Vacances
              </button>
            </div>
          </div>
        )}
      </main>
      <div className="p-2 sm:p-4">
        <button className="bg-blue-900 hover:bg-blue-900 w-10 sm:w-12 h-10 sm:h-12 text-white font-bold flex justify-center items-center cursor-pointer active:animate-ping p-4 sm:p-8 rounded-full shadow-md transition-colors">
          <Link to="/services/colonies-de-vacances">
            <i className="fa-solid fa-arrow-left fa-xl sm:fa-2xl"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SummerCamps;
