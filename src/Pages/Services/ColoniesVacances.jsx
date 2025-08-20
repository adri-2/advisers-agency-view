import Caroussel from "../../components/caroussel";
import image1 from "../../assets/colonie1.avif";
import image2 from "../../assets/colonie2.avif";
import image3 from "../../assets/colonie3.avif";
import grid1 from "../../assets/grid1.avif";
import grid2 from "../../assets/grid2.avif";
import grid3 from "../../assets/grid3.avif";
import grid4 from "../../assets/grid4.avif";
import { Link } from "react-router-dom";

const images = [image1, image2, image3];

export function ColoniesVacances() {
  return (
    <div className="bg-gray-50">
      {/* --- CAROUSEL --- */}
      <Caroussel images={images} />

      {/* --- INTRO SECTION --- */}
      <section className="flex flex-col items-center px-5 sm:px-10 md:px-20 py-8 md:py-16 gap-y-6">
        <p className="text-justify text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
          Les échanges interculturels et les expériences internationales sont
          des atouts inestimables pour l’éducation de nos enfants. Nous le
          savons, par conséquent, nous proposons plusieurs camps d’été aux
          parents pour le développement harmonieux de leurs enfants.
        </p>
        <p className="text-justify text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
          <span className="font-bold">Advisers Agency</span> et ses partenaires
          vous proposent des camps d’été thématiques et non thématiques avec à
          la clé la création d'un réseau d'amis venant du monde entier, qu'ils
          sauront valoriser dans le futur proche. De plus, les participants
          interagissent avec d'autres pairs de différents pays et apprennent les
          bases d'une langue seconde de leur choix pendant les camps.
          <br />
          <br />
          Le leadership, le réseautage, le divertissement, l’athlétisme et
          l'apprentissage sont les piliers qui sous-tendent les camps de
          vacances que nous vous proposons.
        </p>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="w-full bg-blue-600 flex flex-col items-center py-12 px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl text-white">
          {/* CARTE 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-red-700 rounded-2xl shadow-lg p-6 flex flex-col gap-4 justify-between text-center w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold">
                Colonies à Thèmes
              </h1>
              <p>
                Se plonger dans l'univers d'un métier et découvrir les aptitudes
                requises pour l'effectuer.
              </p>
              <Link
                to="/colonies-de-vacances-1"
                className="border-2 border-amber-500 hover:bg-amber-500 transition-all rounded-lg py-2 px-4"
              >
                En savoir plus
              </Link>
            </div>
            <img
              src={grid1}
              alt="Colonies à thèmes"
              className="rounded-2xl shadow-md object-cover w-full md:w-1/2 h-52 md:h-64"
            />
          </div>

          {/* CARTE 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-700 rounded-2xl shadow-lg p-6 flex flex-col gap-4 justify-between text-center w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold">
                Colonies Sportives
              </h1>
              <p>
                Apprenez les bases de votre sport préféré avec des coachs
                qualifiés, le tout dans le FUN.
              </p>
              <Link
                to="/colonies-de-vacances-1"
                className="border-2 border-green-500 hover:bg-green-500 transition-all rounded-lg py-2 px-4"
              >
                En savoir plus
              </Link>
            </div>
            <img
              src={grid2}
              alt="Colonies sportives"
              className="rounded-2xl shadow-md object-cover w-full md:w-1/2 h-52 md:h-64"
            />
          </div>

          {/* CARTE 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={grid3}
              alt="Destinations et prix"
              className="rounded-2xl shadow-md object-cover w-full md:w-1/2 h-52 md:h-64"
            />
            <div className="bg-amber-400 rounded-2xl shadow-lg p-6 flex flex-col gap-4 justify-between text-center w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold">
                Destinations & Prix
              </h1>
              <p>
                Choisissez le moment idéal pour vous amuser, nous vous assistons
                avec nos conseils.
              </p>
              <Link
                to="/colonies-de-vacances-1"
                className="border-2 border-blue-500 hover:bg-blue-500 transition-all rounded-lg py-2 px-4"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          {/* CARTE 4 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={grid4}
              alt="Âges et délais"
              className="rounded-2xl shadow-md object-cover w-full md:w-1/2 h-52 md:h-64"
            />
            <div className="bg-green-700 rounded-2xl shadow-lg p-6 flex flex-col gap-4 justify-between text-center w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold">Âges et Délais</h1>
              <p>
                Suis-je éligible aux colonies de vacances ? Découvrez toutes les
                informations nécessaires.
              </p>
              <Link
                to="/colonies-de-vacances-1"
                className="border-2 border-red-500 hover:bg-red-500 transition-all rounded-lg py-2 px-4"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="bg-white px-6 md:px-16 border-t-2 border-gray-300 flex flex-col items-center md:flex-row justify-center md:justify-end gap-4 py-10">
        <Link
          to="/contact"
          className="bg-blue-700 hover:bg-blue-600 transition-all text-white rounded-lg px-6 py-3 w-full md:w-auto text-center font-semibold shadow-lg"
        >
          Nous contacter
        </Link>
      </section>
    </div>
  );
}

export default ColoniesVacances;
