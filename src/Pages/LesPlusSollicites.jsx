import img1 from "../assets/best-seller.png";
import img2 from "../assets/image_plus_1.avif";
import img3 from "../assets/img_bestseller.avif";
import DivNavBar from "../components/divNavBar";

function LesPlusSollicites() {
  return (
    <>
      {" "}
      <DivNavBar />
      <div
        className="h-[250px] bg-cover bg-center flex justify-center items-start "
        style={{ backgroundImage: `url(${img2})` }}
      >
        <img src={`${img3}`} alt="" className="h-20 w-56 object-center" />
      </div>
      <section className="flex flex-col md:flex-row px-32 bg-[#222B4A] gap-16 text-white text-xl justify-between py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold py-8 text-[#F0AB43] ">
            Vos Programmes Préférés
          </h1>

          {/* Chaque ligne */}
          <div className="flex justify-between items-center gap-x-4">
            <p>
              Work & Study MBA -{" "}
              <span className="text-red-700 font-bold">USA</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Study & Work MBA -{" "}
              <span className="text-red-700 font-bold">Dubaï</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Expertise Comptable -{" "}
              <span className="text-red-700 font-bold">France</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Diplôme de Nursing -{" "}
              <span className="text-red-700 font-bold">Canada</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              MBA de 12 Mois -{" "}
              <span className="text-red-700 font-bold">France</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Université de Technologie -{" "}
              <span className="text-red-700 font-bold">Lettonie</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Médecine -{" "}
              <span className="text-red-700 font-bold">Belgique</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center">
            <p>
              Master Ingénieurs d'affaires -{" "}
              <span className="text-red-700 font-bold">France</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>

          <div className="flex justify-between items-center  gap-x-8">
            <p>
              Ingénieur Généraliste (3 & 5 ans) -{" "}
              <span className="text-red-700 font-bold">Maroc</span>
            </p>
            <a href="#" className="text-yellow-500">
              Découvrir
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center py-12">
          <img src={img1} alt="" />
          <a href="#" className="text-[#F0AB43] text-2xl font-bold">
            Autres services
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-y-8 bg-[#D5DCF5] px-32 py-16">
        <h1 className="text-3xl text-[#F0AB43] font-bold">Autre Services</h1>
        <p className="font-bold text-justify">
          Outre ses services classiques, Advisers Agency offre d'autres services
          à la carte pour les candidats intéressés. Il s'agit entres autres de :
        </p>
        <ol className="list-decimal list-inside pl-4">
          <li>L'Assistance visa étudiants et Touriste</li>
          <li>Assurance Internationale pour étudiants qui voyagent</li>
          <li>
            Un service de billetterie pour vos billet d'avion toutes
            destinations
          </li>
          <li>
            Des cours par correspondances pour les candidats qui souhaitent
            garder leurs emplois et rester auprès de leurs familles tout en
            faisant évoluer leurs connaissances.
          </li>
          <li>
            Le service Pay to Study de paiement des frais de scolarité des
            étudiants sur demande
          </li>
        </ol>
        <button className="bg-[#F0AB43]/80 hover:bg-[#F0AB43] cursor-pointer w-36 text-white py-2 px-4 rounded">
          En savoir plus
        </button>
      </section>
    </>
  );
}

export default LesPlusSollicites;
