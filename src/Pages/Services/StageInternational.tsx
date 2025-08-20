import Caroussel from "../../components/caroussel";

import stage1 from "../../assets/stage_i_1.avif";
import stage3 from "../../assets/stage_i_3.avif";
import stage4 from "../../assets/stage_i_4.avif";
import stage5 from "../../assets/stage_i_5.avif";
import internshipimg from "../../assets/internship-advisers-agency.avif";
import AllianceAbroadimg from "../../assets/AllianceAbroad-3-W-1024x782-copy2.avif";
import { Link } from "react-router-dom";

const imagesList = [stage1, stage3, stage4, stage5];

export function StageInternational() {
  return (
    <>
      <Caroussel images={imagesList} />
      {/* concept et objectif */}
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-40 flex flex-col gap-6 bg-[#D5DCF5]">
        <h1 className="text-2xl text-blue-900 text-shadow-black font-bold">
          Concept et Objectif
        </h1>
        <p>
          Ce programme a pour objectif de permettre aux candidats internationaux
          de participer à un programme de travail structuré ou un stage offert
          par une entreprise d'accueil américaine. Les programmes de stages J-1
          offrent les avantages suivants:{" "}
          <ul className="list-disc ml-6 sm:ml-10">
            <li>des possibilités de perfectionnement professionnel,</li>
            <li>
              une meilleure compréhension des pratiques commerciales américaines
            </li>
            <li>
              une meilleure compréhension de la société américaine, la culture
              et la vie.
            </li>
          </ul>
          Cependant, le visa J-1 ne peut pas être utilisé comme visa de travail
          temporaire.
        </p>

        <p>
          Le programme d’échange de visiteurs J-1 a été créé en 1961 à la suite
          de la Loi sur les échanges éducatifs et culturels mutuels. L’objectif
          est d’accroître la réciprocité compréhension entre les peuples des
          États-Unis et d'autres pays à travers échanges éducatifs et culturels.
        </p>
      </section>

      {/* Différents Programmes et particularités */}
      <section className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 py-10 px-4 sm:px-8 md:px-16 lg:px-40 bg-[#D5DCF5]">
        <div className="lg:w-[60%] w-full">
          <h1 className="text-2xl text-blue-900 text-shadow-black font-bold">
            Différents Programmes et particularités
          </h1>
          <ul className="list-disc ml-6 sm:ml-10">
            <li>Programmes de placement en apprentissage rémunéré</li>
          </ul>
          <p className="text-justify">
            Il existe deux types de programmes d'échanges sous le visa J-1. Les
            programmes J-1 Intern et le J-1 Trainee. J-1 Intern: Vous devez être
            régulièrement inscrit et poursuivre des études dans un établissement
            d’enseignement supérieur agréé situé à l’extérieur des États-Unis ou
            avoir obtenu votre diplôme moins de 12 mois avant le début du
            programme J1 qui vous intéresse. J-1 Trainee: Vous devez être
            titulaire d'un diplôme d'un établissement d'enseignement supérieure
            situé à l'extérieur des États-Unis et compter au moins un an
            d'emploi dans votre domaine d'activité à l'extérieur des États-Unis.
            Ou vous avez plus de cinq ans d'expérience de travail dans votre
            domaine professionnel en dehors des États-Unis.
          </p>
          <ul className="list-disc ml-6 sm:ml-10">
            <li>Programme de placement à la Carte ou Personnalisé</li>
          </ul>
          <p>
            C'est un programme d'assistance aux candidats qualifiés pour la
            recherche d'un poste approprié pour leur domaine d'études ou leur
            profession. Nous organisons un maximum de 03 entretiens
            professionnels sur une période de 02 mois avec 3 entreprises
            Américaine qui répondront aux objectifs de carrière du candidat.
          </p>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col gap-y-8 pt-6">
          <div className="flex flex-col">
            <img
              src={`${internshipimg}`}
              alt=""
              className="w-full h-auto mb-4"
            />
            <img
              src={`${AllianceAbroadimg}`}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="w-full h-auto bg-blue-900 text-white flex flex-col items-start p-6 justify-center">
            <a href="#">
              <i className="fa-solid fa-file text-black mr-2"></i>Exemple
              d'offre de stage ingénieur
            </a>
            <a href="#">
              <i className="fa-solid fa-file text-black mr-2"></i>Exemple
              d'offre de stage Manager MBA
            </a>
          </div>
        </div>
      </section>
      {/* garanties */}
      <section>
        <h1 className="text-2xl text-blue-900 text-shadow-black font-bold text-center py-10">
          Ce que notre TEAM vous garantie
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-40 pt-8 bg-[#D5DCF5]">
          <ul className="list-disc w-full lg:w-[50%] rounded-2xl bg-green-900 text-white p-6 lg:p-10 mb-6 lg:mb-0">
            <li>
              Avec l'appui de ses partenaires, Advisers vous offre un parrainage
              our les programme d'échanges Trainee et Intern J-1 et émet un
              formulaire DS-2019 pour les candidats parrainés.
            </li>
            <li>
              Advisers s’assure que les programmes de formation ou de stage
              exposent les participants aux méthodologies américaines,ainsi
              qu'aux bonnes pratiques et connaissances professionnelles.
            </li>
            <li>
              Advisers présélectionne les entreprises hôtes et veille à ce que
              chaque programme de formation / stage parrainé soit en conformité
              avec les règlements et les directives du département d'État
              américain.
            </li>
            <li>
              Nous contrôlons chaque programme du début à la fin par des
              correspondances périodiques, des visites de sites et des
              évaluations en vue de juger les progrès.
            </li>
            <li>
              Advisers fournit une liste complète des maladies et des accidents
              couverture d’assurance conformément aux directives du des
              dispositions légales du département d’Etat.
            </li>
            <li>
              Advisers aide les participants à trouver un logement convenable.
            </li>
            <li>
              Avant le départ et à l'arrivée Advisers Team vous donne des
              orientation sur les lois, les coutumes et la culture locale.
            </li>
            <li>
              Grâce à ses partenaires, Advisers vous fournit une assistance sans
              frais 24 sur 24 une fois au USA. Numéro Vert disponible
            </li>
          </ul>
          <p className="text-justify w-full lg:w-[50%] rounded-2xl bg-blue-900 text-white p-6 lg:p-10">
            <span className="text-xl font-bold text-red-700">A SAVOIR </span>
            <br /> Demande d'admission : toute l'année Durée du programme
            d'Intern : 1-12 mois Durée du programme de Trainee: 1-18 mois * *Les
            Programmes de Trainee en Hôtellerie, Tourisme, Restauration, Gestion
            et Agriculture, Foresterie et Pêche les catégories sont limitées à
            12 mois. Assurance maladie et accident: obligatoire Aide au
            logement: fournie Salaire à percevoir: négociable entre la société
            hôte et le l"étudiant Heures hebdomadaires de formation en
            entreprise: 32 heures requises le minimum jusqu'à 40 heures Travail
            non qualifié: strictement interdit Emploi hors programme (deuxième
            emploi): strictement interdit Changement de société d'accueil: peu
            commun, considéré au cas par cas, nous en informer. Non autorisé
            pour parrainage: Ce programme ne permet pas de parrainer les
            candidats suivants. soins aux enfants, soins aux aînés, soins
            cliniques / aux patients, positions qui fournissent une thérapie ou
            des médicaments, des sports ou thérapie physique, consultation
            psychologique, soins infirmiers, médecine dentaire, médecine
            vétérinaire, travail social, élocution thérapie, éducation de la
            petite enfance, postes fournis par ou facilité par des agences de
            recrutement ou d'emploi
          </p>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-40 py-10 bg-[#D5DCF5]">
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl text-blue-900 text-shadow-black font-bold ">
            Différentes filières concernées
          </h1>
          <div className="text-justify bg-purple-900 text-white p-6 lg:p-8 rounded-2xl">
            <p>
              Nous offrons des possibilités de Training et de stages dans les
              domaines professionnels suivants :
            </p>
            <ul className="list-disc ml-6 sm:ml-10 text-justify">
              <li>Agriculture, foresterie et pêche</li>
              <li> Arts et culture</li>
              <li>Enseignement, sciences sociales, bibliothéconomie</li>
              <li> Hôtellerie et tourisme</li>
              <li> Médias d'information et communication</li>
              <li> Gestion, affaires, commerce et finances</li>
              <li>Administration publique et droit</li>
              <li>
                Les sciences, l'ingénierie, l'architecture, les mathématiques et
                les professions industrielles
              </li>
            </ul>
            <span className="font-bold">NB </span>: Chaque candidat doit
            soumettre une trousse de demande complète. L'examen de la demande ne
            commencera qu'après la réception du formulaire de demande dûment
            rempli et la vérification du paiement des frais du programme.
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-y-8 pt-6">
          <h1 className="text-2xl text-blue-900 text-shadow-black text-center font-bold">
            Particularité des visas Trainee J-1 et Intern J-1
          </h1>
          <div className="text-justify bg-amber-600 text-white p-6 lg:p-10 rounded-2xl">
            <p>
              J-1 Intern Visa : Ce visa est délivré pour une période maximale de
              12 mois et une période de grâce de 30 jours au cours desquelles
              vous pouvez voyager aux États-Unis mais pas travailler.
            </p>
            <p>
              J-1 Trainee Visa : Ce visa est délivré pour une durée maximale de
              18 mois et une période de grâce de 30 jours au cours de laquelle
              vous pouvez voyager aux États-Unis sans vous entraîner ni
              travailler. Si vous suivez un programme de formation en hôtellerie
              ou en tourisme, le visa est délivré pour une durée maximale de 12
              mois.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-40 py-10 bg-[#D5DCF5]">
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl text-blue-900 text-shadow-black font-bold ">
            Durée des programmes
          </h1>

          <div className="text-justify bg-sky-500 text-white p-6 lg:p-8 rounded-2xl">
            <p>Programmes de placement en apprentissage rémunéré </p>
            <p> 01 - 12 Mois pour le J1 - Intern </p>
            <p>01 - 18 Mois uniquement le J-1 Trainee </p>
            <p>01 - 12 Mois pour le J1 - Trainee en Tourisme et Agriculture</p>
            <p> Programme de placement à la Carte ou Personnalisé</p>
            <p>01 - 06 Mois Intern / Trainee</p>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-y-8 pt-6">
          <h1 className="text-2xl text-blue-900 text-shadow-black text-center font-bold">
            Particularité des visas Trainee J-1 et Intern J-1
          </h1>
          <div className="text-justify bg-[#BCE213] text-white p-6 lg:p-10 rounded-2xl flex flex-col items-center gap-4">
            <p>
              Le prix du programme est fonction de plusieurs facteurs. La
              filière choisie, la ville et de la durée. Recevez un devis
              personnalisé en soumettant ce formulaire pour nous permettre de
              vous donnez le meilleur prix (3 minutes temps de remplissage du
              formulaire)
            </p>
            <button className="w-full sm:w-60 h-10 p-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center cursor-pointer">
              <Link to="/formulaire-stage-international">
                Soumettez le Formulaire
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <h1 className="text-2xl text-blue-900 text-shadow-black font-bold text-center py-10">
          PLUSIEURS OFFRES DE STAGES DISPONIBLES AUX USA
        </h1>
        <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-40 py-10">
          <p>
            1 - Internship and Trainee positions available until January 2024{" "}
          </p>
          <a href="#" className="text-blue-900 underline">
            Download offer here
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-40 py-10">
          <p>
            2 - MBA level Business Strategy Program - ID (10150) Entreprise :
            Cabinet Conseils Nbre de places : 01 Lieu: Los Angeles, CALIFORNIA
            Durée: 12 Mois Salaire: $1200 / Mois Début: May 2020 Fin: dans 12
            Mois
          </p>
          <a href="#" className="text-blue-900 underline">
            Télécharger l'offre
          </a>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-8 md:px-16 lg:px-40 p-10 bg-[#D5DCF5]">
        <p className="text-2xl text-blue-900 text-shadow-black font-bold">
          Plus d'infos ? Contactez nous sur
        </p>
        <i className="fa-brands fa-whatsapp  text-green-700 fa-2xl"></i>
        <button className="text-2xl text-white bg-green-600 p-2 rounded-lg hover:bg-green-500 transition-colors duration-300">
          Nous Contacter
        </button>
      </section>
    </>
  );
}

export default StageInternational;
