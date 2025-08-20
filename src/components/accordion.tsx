import { useState } from "react";

type AccordionProps = {
    title?: string;
    content?: React.ReactNode;
};

export default function Accordion() {
    const faqList: AccordionProps[] = [
        {
            title: "Combien de temps dure une procédure de visa?",
            content: "Une procédure de visa dépend du pays sollicité ainsi que de l'université choisie. Nous vous conseillons de vous rapprocher de nos services par email, par téléphone ou en vous en nous rencontrant sans rendez-vous dans nos bureaux en fonction du pays ou vous vous trouvez. "
        },
        {
            title: "Garantissez vous les visas ?",
            content: "Depuis 2006, nous orientons et conseillons les parents et leurs enfants dans le choix de leurs carrieres futures pour plusieurs destinations. Fort de cela, nous pouvons sans l'ombre d'un doute apprecier chaque dossiers soumis à notre études. De manière générale, les profils qui ne conviennent pas à une destination choisie sont réorientés avec l'accord de la famille vers un choix plus judicieux en prenant en compte plusieurs critères, entres autres l'age, les finances, les notes du candidat ainsi que son projet d'étude.  "
        },
        {
            title: "Je n’ai pas un bon niveau d’anglais dois je me former dans mon pays avant de faire une demande d’admission dans une de vos",
            content: "Les admissions dans nos universités ne sont nullement conditionnées par votre niveau d’anglais. La majorité de nos partenaires offrent des formations de langue anglaise sur le campus universitaire. Cependant, certaines exigent un bon niveau au TOEFL ou IELTS. Nous encourageons néanmoins nos étudiants à faire une formation durant le temps de sa procédure."
        },
        {
            title: "Quel est le coût total pour partir de mon pays au Canada ?",
            content: "Pour le Canada ou une autre destination, le coût total ne peut être évaluer qu’en fonction de l’école de votre choix, du cycle de formation, de la filière etc... Cependant en vous rendant sur la page du pays qui vous intéresse, ou en cliquant ici, vous pourrez télécharger un prospectus chiffré et avoir une idée du coût total dans quelques universités précises. Les prospectus disponibles en téléchargement ne représentent que quelques partenaires. Nous vous prions de vous rapprochez de nos bureaux ou nous écrire pour avoir une offre personnalisée."
        },
        {
            title: "Combien coute la scolarité dans vos Universités partenaires?",
            content: "Le cout de la scolarité n’est pas fixe, il varie en fonction de l’université ou de l’école choisie. Cependant en vous rendant sur la page du pays qui vous intéresse, ou en cliquant ici, vous pourrez télécharger un prospectus chiffré et avoir une idée du coût total dans quelques universités précises. Les prospectus disponibles en téléchargement ne représentent que quelques partenaires. Nous vous prions de vous rapprochez de nos bureaux ou nous écrire pour avoir une offre personnalisée. "
        }, {
            title: "Dois-je payer la pension avant le départ de mon pays?",
            content: "En fonction du pays et de l'université sollicitées. Cependant, nous recommandons fortement d'avoir à disposition les fonds correspondants pour présenter un bon dossier de visa."
        },
        {
            title: "Dois-je déposer l’argent de pension dans vos bureaux ?",
            content: "Dans nos procédures nous ne collectons pas les frais de scolarité dans nos locaux. Nous assistons les parents à faire un paiement direct dans le compte de l’université / Collège choisi. Si vous avez une doléance particuliere, nous vous prions de vous rapprocher de notre bureau dans votre pays."
        },
        {
            title: "Ne pas payer l’école n’est-il pas un motif suffisant de refus de visa ?",
            content: "Oui c’est un motif de refus de visa pour certains pays et pas pour d'autres."
        },
        {
            title: "Dois - je nécessairement avoir un compte bloqué pour me rendre à l’ambassade ?",
            content: "Les comptes bloqués dépendent du pays. Pour l'angleterre et la France c'est obligatoire tandis que pour les USA et la Belgique et bien d'autre ca ne l'est pas.N'hésitez pas à nous contacter pour une assistance personnalisée."
        },
        {
            title: "Que dois-je fournir pour commencer une procédure d’admission dans une de vos universités partenaires ?",
            content: "Chaque université est singulière, et de ce fait les besoin en piece peuvent varier. Néanmoins les pièces généralement exigibles pour une demande d'admission sont les suivantes: les releves de notes baccalauréat ou GCE A Level les releves de notes universitaires (1ere, 2eme et 3ieme années) acte de naissance passeport attestation de stage document justificatif d'un niveau linguistique etc... En fonction de l'université sollicitée, que vous pourrez trouver en cliquant ici vous pourrez avoir une liste précise des documents à fournir. N'hésitez pas à nous Contacternous pour une assistance personnalisée."
        },
        {
            title: "Quelle est la durée de ma demande de visa ?",
            content: "es délais de réponses aux demandes de visa dépendent du pays sollicité. Pour les états Unis, vous obtiendrez en générale votre réponse le même jour, sauf s'il y' a un besoin d'études / enquêtes complémentaire. Quant au Canada, le délais est de 06 à 08 semaines après dépôt de la demande de visa. Pour la lettonie, c'est 2 à 3 jours en fonction de l'ambassade choisie. Les délais sont donc variables. Et vous, quel pays vous tente? Contactez-nous, nous pouvons vous y mener."
        }
    ]
    const [value, setValue] = useState("");

    const clearInput = () => {
        setValue(""); // Efface le contenu
    };

    return (
        <div >
            <div
                className="relative w-full bg-[#d5daeb] px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 top-10">
                <div className="mx-auto px-5">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-5 text-center text-3xl font-bold tracking-tight md:text-5xl">Foire aux questions</h2>
                        <span>
                            <div className="relative">
                                <input
                                    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <div className="absolute right-0 inset-y-0 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>

                                <div className="absolute left-0 inset-y-0 flex items-center">
                                    <svg onClick={clearInput}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        {faqList.map((item, index) => (
                            <div className="py-5" key={index}>
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className="text-[#0b62a1] text-2xl"> {item?.title}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidthdth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-[#545252] text-xl">
                                        {item?.content}
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span>
                                            <svg className="w-6 h-6 text-[#0b62a1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span>
                                            <svg className="w-6 h-6 text-[#0b62a1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}