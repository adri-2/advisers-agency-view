import { useState } from "react";
import image2 from "../assets/work-study1.avif";

const accordionData = [
  {
    id: 1,
    title: "À propos du Work & Study",
    content: (
      <p>
        Cette offre concerne uniquement les universités américaines accréditées
        pour intégrer le CPT (Curricular Practical Training) dans leurs
        programmes. Les étudiants bénéficient ainsi d'une alternance
        études/travail (Co-op) pendant tout leur cursus. Ce stage est évalué
        comme une unité académique et apparaît sur le relevé de notes du Master.
      </p>
    ),
  },
  {
    id: 2,
    title: "Avantages / Inconvénients",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Les candidats mariés peuvent voyager avec leur famille pendant toute
          la durée du Master.
        </li>
        <li>L’étudiant dispose de peu de temps libre pour les loisirs.</li>
        <li>
          Les stages d’apprentissage sont rémunérés selon la réglementation
          américaine.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Zoom et Process",
    content: (
      <div>
        <h2 className="font-semibold mb-2">Zoom sur le CPT</h2>
        <p>
          La procédure normale aux USA commande que pour solliciter un CPT ou un
          OPT, les étudiants doivent fréquenter au moins durant une année
          académique entière et/ou avoir obtenu leurs diplômes avant d’être
          admis à faire une année de stage d’apprentissage (CPT ou OPT) rémunéré
          afin d’allier théorie et pratique.
        </p>
        <p>
          La singularité de notre programme Work & Study/Co-op c’est qu’il
          permet à tous les étudiants admis de commencer ce stage
          d’apprentissage quelques mois après être arrivé aux USA, donc avant
          obtention de leurs diplômes de Master.
        </p>
        <p>
          Tous les étudiants du programme Work & Study ont l’obligation de faire
          un stage académique pour valider leur diplôme de Master, c’est une
          obligation liée à tous les programmes Work & Study que nous proposons.
          Le CPT est en effet une matière à part entière des programmes de
          Master.
        </p>
        <p>
          Ce stage est facilité par un service dédié de l’école qui a pour
          mission de :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Créer des partenariats entreprises/universités</li>
          <li>
            Proposer aux étudiants une liste d’entreprises adaptées à leurs
            profils
          </li>
          <li>
            Préparer et coacher les étudiants pour les entretiens d’embauche
          </li>
          <li>Recommander chaque étudiant dans l’entreprise choisie</li>
        </ul>
        <p>
          Les étudiants doivent activement participer et collaborer avec
          l’université pour la recherche de ce stage afin que la procédure se
          déroule dans les délais les plus brefs.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Filières et Rentrées académiques",
    content: (
      <div>
        <h2 className="font-semibold mb-2">Filières disponibles :</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Master of Business Administration (MBA)</li>
          <li>Master of Health Care Administration (MHA)</li>
          <li>Master of Information System (MIS)</li>
        </ul>
        <p>
          Nous offrons 5 rentrées pour ce programme :{" "}
          <span className="font-medium">
            Janvier, Mars, Juin, Septembre, Novembre
          </span>
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Niveau de langue requis",
    content: (
      <p>
        Le niveau d’anglais exigé pour ce programme est le niveau intermédiaire.
        Il correspond au Cameroun au niveau qu’un étudiant moyen acquiert à sa
        sortie de l’école secondaire. Tous les candidats titulaires d’une
        licence Camerounaise devraient en principe être éligibles.
        <br />
        L’université dispose d’un centre de langue pour mettre à niveau tous les
        étudiants inscrits avant qu’ils ne commencent leur programme académique
        de Master. Nous recommandons de vous mettre au cours de langue dès que
        vous vous engagez pour ce projet ou avant, afin de réduire
        substantiellement les coûts d’apprentissage de l’anglais une fois aux
        USA.
        <br />
        La maîtrise d’une langue étant un facteur majeur d’intégration, les
        candidats titulaires d’un TOEFL, IELTS, iTEP ou tout autre examen de
        langue anglaise, ainsi que les étudiants qui parlent couramment anglais
        sans attestation ont un avantage comparatif.
      </p>
    ),
  },
  {
    id: 6,
    title: "Qui trouve les stages académiques ?",
    content: (
      <div>
        <p>
          Tous les étudiants du programme Work & Study ont l’obligation de faire
          un stage académique pour valider leur diplôme de Master. Le CPT est
          une matière à part entière des programmes de Master.
        </p>
        <p>
          Ce stage est facilité par un service dédié de l’école qui a pour
          mission de :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Créer des partenariats entreprises/universités</li>
          <li>
            Proposer aux étudiants une liste d’entreprises adaptées à leurs
            profils
          </li>
          <li>
            Préparer et coacher les étudiants pour les entretiens d’embauche
          </li>
          <li>Recommander chaque étudiant dans l’entreprise choisie</li>
        </ul>
        <p>
          Les étudiants doivent activement participer et collaborer avec
          l’université pour la recherche de ce stage afin que la procédure se
          déroule dans les délais les plus brefs.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Comment se déroule le stage?",
    content: (
      <p>
        Les étudiants ont le choix entre travailler à plein temps ou à temps
        partiel pendant toute la durée de leur formation. A la fin du CPT
        (Curricular Practical Training), les étudiants qui souhaitent continuer
        en stage ont la possibilité de continuer en OPT (Optional Practical
        Training) pour 12 ou 17 mois en fonction de leurs programmes de Master
        commercial ou Scientifique. Les CPT et OPT sont certes des stages
        d’apprentissage, mais ils sont rémunérés par l’entreprise qui embauche
        l’étudiant.
      </p>
    ),
  },
  {
    id: 8,
    title: "Comment se déroule cette formation en alternance (Stage/études)?",
    content: (
      <p>
        Toutes les fins de semaine, les étudiants consignent dans un rapport de
        stage hebdomadaire à remettre à l’université les similitudes entre
        l’apprentissage théorique reçu pendant les 08 heures de cours
        hebdomadaire en présentielle obligatoires et l’apprentissage pratique
        acquis en entreprise au courant de la semaine. Ceci pendant toute la
        durée du programme académique (15 Mois). En dehors des 08 heures
        obligatoires de cours que les étudiants reçoivent en classe en
        présentiel, ils reçoivent chaque semaine des devoirs à soumettre en
        ligne, et ont aussi un accès illimité et protégé à une documentation
        (cours et livres) sur une plateforme en ligne, à laquelle ils peuvent
        accéder à tout moment.
      </p>
    ),
  },
  {
    id: 9,
    title:
      "Que ce passe t’il après le stage, y’a-t-il une Possibilité d’embauche et changement de statut d’immigrant des étudiants ?",
    content: (
      <p>
        L’un des gros avantages de ce programme c’est qu’il expose les étudiants
        au milieu professionnel dès leur arrivée aux USA. Ayant travaillé plus
        de 15 mois dans une entreprise et après avoir obtenu son diplôme de
        Master, l’étudiant peut être recruté sur la base de ses performances en
        stage par l’entreprise dans laquelle il a passé son stage académique.
        L’étudiant détenteur de son diplôme peut aussi postuler pour des emplois
        externes (en dehors de l’entreprise aux USA ou en dehors), rentrer dans
        son pays, ou enfin continuer en OPT. Il va s’en dire que les étudiants
        qui ont eu une expérience professionnelle dans le passé ont de bonne
        chances de se faire remarquer par les recruteurs. Lorsque l’entreprise
        recrute un étudiant stagiaire, elle fait pour son compte une demande de
        changement de statut d’immigration, passant du Visa étudiant F-1 au visa
        travailleur H-1. Avec le visa H-1, l’étudiant obtient ainsi la
        possibilité de demander sa carte verte Américaine (Green Card) comme
        prévu par la loi.
      </p>
    ),
  },
  {
    id: 10,
    title: "  Notre Cible",
    content: (
      <div>
        <p>Nous privilegions les profils suivants pour le Work & Study MBA:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Ingénieurs de travaux (03 ans)</li>
          <li>Ingénieurs de Conception (05 ans)</li>
          <li>
            Titulaires d’un diplôme de Licence quelque soit la spécialité avec
            expérience professionnelle ou non.
          </li>
          <li>
            Titulaire d’un diplôme de Master I ou II quelque soit la spécialité
            avec expérience professionnelle ou non.
          </li>
          <li>
            Professionnels et cadres d’entreprises commerciales et/ou
            industrielles titulaire d’une Licence au Minimum.
          </li>
          <li>
            Professionnels du domaine de la santé titulaire d’une Licence
            minimum.
          </li>
        </ul>
        <p className="mt-2">
          NB : Tous Candidats Francophones et Anglophones accompagnés de leurs
          épouses et/ou enfants respectant un des profils sus-cités
        </p>
      </div>
    ),
  },
];

function AccordionItem({ id, title, content, isExpanded, onToggle }) {
  return (
    <div className="bg-white  shadow transition-all duration-300 overflow-hidden border-b-2 border-gray-200">
      <button
        onClick={() => onToggle(id)}
        className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer"
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${id}`}
        role="button"
      >
        <span className="text-xl font-semibold text-indigo-700">{title}</span>
        <i
          className={`fa-solid ${
            isExpanded ? "fa-minus" : "fa-plus"
          } text-indigo-600 text-xl transition-all duration-300`}
        ></i>
      </button>
      <div
        id={`accordion-content-${id}`}
        className={`px-6 pb-4 text-gray-600 transition-all duration-300 ${
          isExpanded ? "opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {content}
      </div>
    </div>
  );
}

export function WorkAccordionMenu() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-end px-4 bg-white p-4"
      //   style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
    >
      <h1 className="text-4xl font-extrabold">100 % d'alternance</h1>
      <div className="w-full max-w-xl overflow-y-scroll max-h-[80vh] scrollbar-hide-arrows ">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isExpanded={expandedIds.includes(item.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkAccordionMenu;
