import image1 from "../../assets/work-img1.jpg";
import image2 from "../../assets/work-study1.avif";
import DivNavBar from "../../components/divNavBar";
import WorkAccordionMenu from "../../components/AccordionMenu.jsx";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function WorkStudy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <DivNavBar />
      <div>
        <img src={image1} alt="" className="w-full h-48 md:h-70 object-cover" />
      </div>
      <div
        className="w-full relative flex flex-col md:flex-row p-4 md:pl-30 items-start"
        style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
      >
        <WorkAccordionMenu />
      </div>

      {/* section 1 */}
      <section className="bg-[#D5DCF5] py-10 px-4 md:px-20 flex flex-col md:flex-row gap-10">
        <div className="flex px-4 flex-col w-full md:w-2/3 sm:px-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4 text-blue-950">
              Pour ce projet, notre TEAM vous garantie
            </h1>
            <p className="border-b-2 border-b-blue-900 w-full md:w-140 h-2"></p>
            <ul className="list-disc font-semibold mt-6 text-justify flex flex-col gap-4">
              <li>Une écoute attentive de vos besoins. </li>
              <li>
                Une Orientation gratuite en ce qui concerne vos choix
                académiques, ainsi qu’un accompagnement facilitant d’éventuel
                besoin de reconversion ou de réorientation vers de nouveaux
                horizons.
              </li>
              <li>
                Le conseil quant au choix de votre ville de destination le cas
                échéant (coût de la vie, aspect cosmopolite de la ville,
                opportunités offertes dans la ville etc...)
              </li>
              <li>
                Une ou plusieurs séances de Coaching en fonction du besoin du
                candidat. Nous travaillons avec des Coachs Camerounais certifiés
                par des Associations de Coaching reconnues mondialement. Nous
                apportons au candidat un accompagnement exclusif afin de faire
                ressortir ses forces et lui donner confiance en lui pour
                affronter l’officier consulaire au jour de l’entretiens de visa.
              </li>
              <li>
                Un réseau de contacts qui facilitent la procédure de
                l’inscription à l’hébergement en passant par la certification et
                la traduction documents, le visa, le billet d’avion…
              </li>
              <li>
                Un réseau d’anciens étudiants ayant bénéficié de nos services et
                avec qui nous travaillons, qui vous accueillent à l’aéroport de
                votre pays de destination, vous logent, vous aide à vous
                socialiser (ouverture de compte bancaire, choix d’un abonnement
                téléphonique, premier shopping, la culture du milieu…) vous
                accompagnent à l’école le premier jour, vous conseillent et
                facilitent votre intégration dans votre nouvel environnement.
              </li>
              <li>
                La mise en relation avec le service des Etudiants Internationaux
                de l’université choisie à toutes fins utiles.
              </li>
            </ul>
            <p>
              <span className="font-bold">NB</span>: Pour avoir d’ample
              information sur la légalité du programme de Work & Study,{" "}
              <a
                href="https://www.ice.gov/sevis/practical-training"
                className="text-blue-600 underline hover:text-blue-900"
              >
                cliquez ICI
              </a>{" "}
              pour être redirigé vers le site du gouvernement Américain traitant
              d’immigration et de douane.
            </p>
          </div>
          <div className="bg-blue-900 p-6 mt-10 rounded-lg w-full sm:w-80 md:w-100 shadow-2xl text-white flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-xl font-semibold mt-6 text-center">
              Pourquoi choisir le travail-études ?
            </h3>
            <ul className="list-decimal pl-5 mt-2 border-l-2 border-white">
              <li>Expérience professionnelle précieuse</li>
              <li>Flexibilité pour concilier études et travail</li>
              <li>Opportunités de réseautage</li>
              <li>Amélioration des compétences pratiques</li>
              <li>Flexibilité pour concilier études et travail</li>
              <li>Opportunités de réseautage</li>
              <li>Amélioration des compétences pratiques</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 md:gap-12 justify-center items-center w-full md:w-1/3">
          <div className="bg-blue-700 shadow-md mt-10 w-full max-w-xs h-auto flex rounded-2xl justify-center items-center group">
            <div className="border-b-2 border-t-2 border-red-800 mx-4 px-4 py-4 group-hover:hidden w-full">
              <h1 className="text-xl md:text-3xl font-black text-center">
                03 AVANTAGES DU WORK STUDY MBA
              </h1>
            </div>
            <div className="border-b-2 border-t-2 border-red-800 p-4 hidden group-hover:flex flex-col justify-center items-center bg-white rounded-2xl w-full">
              <h1 className="text-lg md:text-xl font-black text-center">
                03 AVANTAGES
              </h1>
              <ul className="list-disc py-4">
                <li>
                  15 Mois de stages en alternance, 08H de cours par semaine
                </li>
                <li>
                  Scolarité payable mensuellement grâce au salaire de stagiaire
                </li>
                <li>
                  Voyagez avec votre famille et installez vous légalement aux
                  USA après votre diplôme
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-red-700 shadow-md mt-10 w-full max-w-xs p-4 rounded">
            <h1 className="text-amber-400 to-yellow-600 text-lg md:text-2xl font-bold mb-4 text-center">
              Cédric Nguidjol Program Analyst - Wachovia Bank
            </h1>
            <p className="text-center">
              J'étais septique au sujet des informations données par mon
              conseillé client ; Aujourd'hui non seulement je vis à Salt Lake
              City, mais j'y travaille à temps plein pour l'entreprise dans
              laquelle j'ai effectué mon stage en alternance. Thank you so much,
              Advisers{" "}
            </p>
          </div>
        </div>
      </section>
      {/* section contact */}
      <section className="w-full mx-auto p-6 shadow-md mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0">
          Vous voulez en savoir plus ?
        </h2>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          <Link to="/contact">Contactez Nous !</Link>
        </button>
      </section>
    </div>
  );
}

export default WorkStudy;
