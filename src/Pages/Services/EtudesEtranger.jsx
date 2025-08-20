import Caroussel from "../../components/caroussel";
import image1 from "../../assets/apprendre-langue-etrangerewebp.webp";
import image2 from "../../assets/portrait-personnes-arc-ciel-avif.avif";
import image3 from "../../assets/img_services2.avif";
import image4 from "../../assets/img_service.avif";
import image5 from "../../assets/culture.jpg";
import { Link } from "react-router-dom";

import allemagne from "../../assets/ville/Allemagne-2.avif";
import usa from "../../assets/ville/1044194-la-statue-de-la-liberte-a-new-yo.avif";
import tunisie from "../../assets/ville/Amphithéâtre-dEl-Jem-Tunisie_-7.avif";
import belgique from "../../assets/ville/belgique.avif";
import dubai from "../../assets/ville/dubai-tour.avif";
import london from "../../assets/ville/Les-bus-a-deux-etages-de-Londres-.avif";
import france from "../../assets/ville/tour-eifel.avif";
import Lettonie from "../../assets/ville/statut-liberte-riga.avif";
import chine from "../../assets/ville/statue-histoire-chinoise-700x467.avif";
import inde from "../../assets/ville/taj-mahal-inde.avif";
import toronto from "../../assets/ville/toronto_1.avif";
import finlande from "../../assets/ville/finlande.avif";

const destinations = [
  { name: "Allemagne", image: allemagne },
  { name: "USA", image: usa },
  { name: "Tunisie", image: tunisie },
  { name: "Belgique", image: belgique },
  { name: "Dubai", image: dubai },
  { name: "Londres", image: london },
  { name: "France", image: france },
  { name: "Lettonie", image: Lettonie },
  { name: "Chine", image: chine },
  { name: "Inde", image: inde },
  { name: "Toronto", image: toronto },
  { name: "Finlande", image: finlande },
];

const imagesList = [image1, image2, image3, image4, image5];
export function EtudesEtranger() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Caroussel images={imagesList} />

      {/* section header */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Études à l'Étranger</h1>
        <p className="text-lg">
          Explorez les opportunités d'études à l'étranger avec nos services
          personnalisés.
        </p>
      </section>

      {/* section content */}
      <section className="pt-10 bg-[#353D58]">
        <h2 className="text-3xl md:text-5xl text-center font-black text-yellow-500 mb-4 bg-[#353D58]">
          Sélectionnez votre destination
        </h2>
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-16 p-4 md:p-10 lg:p-20 bg-[#353D58]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-4 gap-4 justify-center px-2 md:px-10 lg:px-20">
            {destinations.map((destination, index) => (
              <div key={index} className="flex flex-col items-center gap-y-2">
                <div className="w-32 h-20 md:w-40 md:h-28 cursor-pointer bg-white rounded-lg shadow-md border-amber-500 border-4 ">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <p className="text-base md:text-xl text-white font-black text-center">
                  {destination.name}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-8 md:gap-y-14 items-center lg:items-start mt-8 lg:mt-0">
            <button className="w-full md:w-80 h-14 bg-blue-900 rounded hover:bg-blue-700 cursor-pointer text-xl p-2 ">
              <Link
                to="/centre-de-telechargement"
                className="flex items-center gap-x-2 justify-center w-full h-full"
              >
                <i className="fa-solid fa-briefcase fa-xl"></i> Téléchargez
                toutes nos offres
              </Link>
            </button>
            <div className="bg-amber-400 h-24 md:h-100 w-full md:w-80"></div>
          </div>
        </div>
      </section>

      {/* section contact */}
      <section className="max-w-6xl mx-auto p-4 md:p-6 bg-white shadow-md mt-10 flex flex-col md:flex-row justify-between items-center gap-y-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-center md:text-left">
          Vous voulez en savoir plus ?
        </h2>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full md:w-auto">
          <Link to="/contact">Prenez un rendez-vous !</Link>
        </button>
      </section>
    </div>
  );
}
export default EtudesEtranger;
