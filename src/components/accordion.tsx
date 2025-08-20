import { useState } from "react";

type AccordionProps = {
  title: string;
  content: React.ReactNode;
};

export default function Accordion() {
  const faqList: AccordionProps[] = [
    {
      title: "Combien de temps dure une procédure de visa?",
      content:
        "Une procédure de visa dépend du pays sollicité ainsi que de l'université choisie. Nous vous conseillons de vous rapprocher de nos services par email, par téléphone ou en nous rencontrant sans rendez-vous dans nos bureaux.",
    },
    {
      title: "Garantissez-vous les visas ?",
      content:
        "Depuis 2006, nous orientons et conseillons les parents et leurs enfants dans le choix de leurs carrières futures. Nous évaluons chaque dossier attentivement et réorientons, si nécessaire, les candidats vers des choix plus adaptés.",
    },
    {
      title:
        "Je n’ai pas un bon niveau d’anglais, dois-je me former avant de faire une demande ?",
      content:
        "La majorité de nos universités partenaires proposent des formations d'anglais sur place. Certaines demandent un bon score TOEFL/IELTS, mais nous vous accompagnons dans votre préparation.",
    },
    {
      title: "Quel est le coût total pour partir au Canada ?",
      content:
        "Le coût dépend de l'école, du cycle, de la filière... Vous pouvez télécharger un prospectus détaillé ou nous contacter pour une estimation personnalisée.",
    },
    {
      title: "Combien coûte la scolarité dans vos universités partenaires ?",
      content:
        "Les frais varient selon l'établissement. Téléchargez le prospectus correspondant ou contactez-nous pour une offre adaptée.",
    },
    {
      title: "Dois-je payer la pension avant mon départ ?",
      content:
        "Cela dépend du pays et de l'université. Toutefois, nous conseillons d’avoir les fonds disponibles pour constituer un dossier solide.",
    },
    {
      title: "Dois-je déposer l’argent de pension dans vos bureaux ?",
      content:
        "Non, nous ne collectons pas les frais. Les paiements se font directement sur le compte de l’université choisie.",
    },
    {
      title: "Ne pas payer l’école peut-il entraîner un refus de visa ?",
      content:
        "Oui, dans certains pays, cela peut être un motif de refus. Contactez-nous pour des précisions selon votre destination.",
    },
    {
      title: "Dois-je avoir un compte bloqué pour me rendre à l’ambassade ?",
      content:
        "Cela dépend du pays. Pour la France et l'Angleterre, c'est obligatoire. Pour les USA ou la Belgique, ce n’est pas nécessaire.",
    },
    {
      title: "Quels documents fournir pour une procédure d’admission ?",
      content:
        "En général : relevés de notes, acte de naissance, passeport, attestation de langue... La liste varie selon l’université. Contactez-nous pour un guide complet.",
    },
    {
      title: "Quelle est la durée de ma demande de visa ?",
      content:
        "Les délais varient selon le pays : USA → réponse rapide, Canada → environ 6 à 8 semaines, Lettonie → 2 à 3 jours. Contactez-nous pour des détails précis.",
    },
  ];

  const [search, setSearch] = useState("");

  // Filtrage dynamique des questions
  const filteredFaqs = faqList.filter((faq) =>
    faq.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[#d5daeb] py-10 px-4 sm:px-6 lg:px-10 mt-10 rounded-lg shadow-xl">
      <div className="max-w-3xl mx-auto">
        {/* Titre */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b62a1] mb-6">
          Foire aux questions
        </h2>

        {/* Barre de recherche */}
        <div className="relative w-full mb-6">
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border-2 border-gray-300 py-2 pl-10 pr-10 text-gray-800 focus:outline-none focus:border-[#0b62a1] transition"
          />

          {/* Icône loupe */}
          <svg
            className="absolute left-3 top-2.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>

          {/* Bouton Clear */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Liste FAQ */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <details
                key={index}
                className="group bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium">
                  <span className="text-[#0b62a1] text-lg sm:text-xl">
                    {item.title}
                  </span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm sm:text-base">
                  {item.content}
                </p>
              </details>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg bg-white p-4 rounded-lg shadow-md">
              ❌ Aucune question trouvée.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
