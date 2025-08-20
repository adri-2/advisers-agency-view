import Caroussel from "../components/caroussel";

import  blog from "../assets/img_blog.avif";
import CardInfo from "../components/cardInfo";
import entrepreneur from "../assets/entrepreneur.avif";

export default function Information() {
    const imagesList = [blog];

    const cardDataList = [
        {
            id: 1,
            title: "L'ENTREPRENEURIAT",
            description: "C'est le boulot le plus difficile, s'assurer un revenu pour le reste de sa vie...",
            author: "Advisers Team",
            avatar: entrepreneur,
            date: "13 nov. 2019",
            readingTime: "2 min de lecture",
            views: 10,
            comments: 0,
            likes: 1,
        },
        {
            id: 2,
            title: "INNOVATION TECH",
            description: "Découvrir les nouvelles technologies et leur impact sur le marché global...",
            author: "Tech Team",
            avatar: entrepreneur,
            date: "20 janv. 2020",
            readingTime: "3 min de lecture",
            views: 25,
            comments: 2,
            likes: 5,
        },
        {
            id: 3,
            title: "MARKETING STRATEGY",
            description: "Comment construire une stratégie marketing efficace pour booster votre entreprise...",
            author: "Marketing Team",
            avatar: entrepreneur,
            date: "15 févr. 2021",
            readingTime: "4 min de lecture",
            views: 18,
            comments: 1,
            likes: 3,
        },
        {
            id: 4,
            title: "FINANCE POUR STARTUPS",
            description: "Les bases de la finance pour les jeunes entrepreneurs et comment lever des fonds...",
            author: "Finance Team",
            avatar: entrepreneur,
            date: "05 mars 2021",
            readingTime: "5 min de lecture",
            views: 30,
            comments: 3,
            likes: 8,
        },
        {
            id: 5,
            title: "LEADERSHIP ET MANAGEMENT",
            description: "Techniques pour devenir un leader inspirant et motiver vos équipes efficacement...",
            author: "HR Team",
            avatar: entrepreneur,
            date: "22 avr. 2021",
            readingTime: "6 min de lecture",
            views: 12,
            comments: 0,
            likes: 2,
        },
        {
            id: 6,
            title: "DÉVELOPPEMENT PERSONNEL",
            description: "Améliorer ses compétences personnelles pour mieux réussir dans le monde professionnel...",
            author: "Advisers Team",
            avatar: entrepreneur,
            date: "01 mai 2021",
            readingTime: "3 min de lecture",
            views: 15,
            comments: 2,
            likes: 4,
        },
        {
            id: 7,
            title: "STRATÉGIE DIGITALE",
            description: "Comprendre le marketing digital et les réseaux sociaux pour développer son business...",
            author: "Digital Team",
            avatar: entrepreneur,
            date: "18 juin 2021",
            readingTime: "4 min de lecture",
            views: 20,
            comments: 1,
            likes: 6,
        },
        {
            id: 8,
            title: "ECONOMIE ET TENDANCES",
            description: "Analyse des tendances économiques et comment elles influencent les startups...",
            author: "Economy Team",
            avatar: entrepreneur,
            date: "12 juil. 2021",
            readingTime: "5 min de lecture",
            views: 22,
            comments: 2,
            likes: 7,
        },
        {
            id: 9,
            title: "INNOVATION SOCIALE",
            description: "Créer des projets à impact social tout en restant rentable économiquement...",
            author: "Social Team",
            avatar: entrepreneur,
            date: "30 août 2021",
            readingTime: "3 min de lecture",
            views: 14,
            comments: 1,
            likes: 3,
        },
        {
            id: 10,
            title: "PROJETS INTERNATIONAUX",
            description: "Comment développer et exporter son projet à l’international avec succès...",
            author: "Global Team",
            avatar: entrepreneur,
            date: "15 sept. 2021",
            readingTime: "4 min de lecture",
            views: 28,
            comments: 4,
            likes: 10,
        }
    ];


    return (
        <div>
            <Caroussel images={imagesList} titre="INFOS ET ACTUS"></Caroussel>

            <div className="bg-[#dbe1f4] py-8 flex flex-col items-center">
                {/* Conteneur central commun */}
                <div className="px-4">

                    {/* Menu + recherche */}
                    <div className="flex justify-between items-center flex-wrap px-4 py-4 pb-8 bg-[#b3bfe778]">
                        <ul className="flex gap-8 text-lg">
                            <li className="hover:text-[#273b7bff] cursor-pointer">Members</li>
                            <li className="hover:text-[#273b7bff] cursor-pointer">Orientations</li>
                            <li className="hover:text-[#273b7bff] cursor-pointer">Important News</li>
                        </ul>
                        <div>
                            {/* Ici tu mettras ton input de recherche réel */}
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="px-4 py-2 rounded-md border-1 border-gray-300 outline-none ring-2 focus:ring-[#273b7bff]"
                            />
                        </div>
                    </div>

                    {/* Card alignée avec le reste */}

                    <div className="flex justify-center items-center">
                        <div className="bg-white p-6">
                            {cardDataList.map((card) => (
                                <CardInfo key={card?.id} data={card} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
