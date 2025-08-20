import { Link } from "react-router-dom";
import Caroussel from "../components/caroussel";
import first from "../assets/first_home.avif";
import second from "../assets/second_home.avif";
import book from "../assets/book_home.avif";
import chimi from "../assets/chimi_home.avif";
import team from "../assets/Team work.png";
// import exams from "../assets/Exams-rafiki.png";
import { useEffect, useRef } from "react";

const imagesList = [first, second, book, chimi];

export function Home() {
  // const { id } = useParams();
  return (
    <div className="z-10 w-full">
      <Caroussel images={imagesList} />

      {/* SECTION SERVICES */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-x-12 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-300">
        {/* Colonne gauche */}
        <div className="lg:w-4/12 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            NOS SERVICES
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Depuis 2006, Advisers Agency offre aux Africains une gamme de
            services variés visant l'amélioration de l'élite du continent.
          </p>
          <p className="text-gray-700">
            Après le Cameroun, nous sommes présents au <span>Togo</span> et en{" "}
            <span>Côte d'Ivoire</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/les-plus-sollicites">
              <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-md px-4 py-2 text-white transition-colors duration-300">
                Plus
              </button>
            </Link>
            <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-md px-3 py-2 flex items-center justify-center">
              <i className="fa-brands fa-facebook-f text-white"></i>
            </button>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-8/12">
          {[
            { title: "Les Plus Sollicités", link: "/les-plus-sollicites" },
            { title: "Work & Study", link: "/services/work-study" },
            {
              title: "Étudier à l'étranger",
              link: "/services/etudes-a-l-etranger",
            },
            {
              title: "Immigration Canadienne",
              link: "/services/immigration-canadienne",
            },
            {
              title: "Les Juniors 08-18 ans",
              link: "/services/colonies-de-vacances",
            },
            {
              title: "Stages à l'international",
              link: "/services/stage-a-l-international-usa",
            },
            {
              title: "Voyages Découvertes",
              link: "/services/voyages-decouvertes",
            },
            {
              title: "Concours Étudiants",
              link: "/services/student-competitions",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="h-40 bg-red-700 cursor-pointer rounded-xl flex justify-center items-center p-4 text-lg sm:text-xl font-semibold text-white hover:text-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link className="text-center" to={service.link}>
                {service.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION ÉQUIPE */}
      <section className="flex flex-col justify-center items-center gap-y-6 py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-t-2 border-b-2 border-blue-900 my-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Notre équipe
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-12 gap-8">
          <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Une équipe cosmopolite constituée de professionnels dotés d'une
              expertise avérée.
            </p>
            <Link to="/a-propos">
              <button className="bg-blue-900 hover:bg-blue-700 rounded-md px-4 py-2 text-white transition-colors duration-300">
                Plus
              </button>
            </Link>
          </div>
          <img
            src={team}
            className="w-full max-w-md object-contain rounded-xl"
            alt="Notre équipe"
          />
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section className="flex flex-col items-center gap-6 py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-b-2 border-blue-900">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Nos Partenaires
        </h1>
        <p className="text-gray-700 text-center max-w-2xl">
          Nous collaborons avec des partenaires de confiance pour vous offrir
          les meilleurs services.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          <div className="h-80 w-full md:w-96 lg:w-96 lg:h-96 bg-amber-800 rounded-md"></div>
          <div className="h-auto w-full md:w-96 lg:w-80 bg-amber-100 rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-6 bg-white border-4 border-blue-500 hover:border-blue-700 rounded-xl items-center p-6 shadow-lg transition-all duration-300">
              <p className="text-center text-gray-700">
                Quelles sont mes chances d'obtenir un visa étudiant ? Faites
                votre évaluation gratuite !
              </p>
              <Link to="/formulaire-evaluation">
                <button className="bg-blue-800 hover:bg-blue-600 text-white rounded-md px-6 py-2 transition-colors duration-300">
                  Évaluation Gratuite
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-b-2 bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 border-blue-900">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Témoignages
        </h1>
        <div className="w-full flex flex-col items-center gap-8">
          <div className="w-full">
            <HorizontalList />
          </div>
          {/* Formulaire */}
          <div className="w-full max-w-lg bg-blue-800 rounded-2xl shadow-lg p-6">
            <form className="flex flex-col gap-6 bg-white rounded-xl p-6 shadow-md">
              <h1 className="text-lg sm:text-xl font-bold text-center bg-blue-800 text-white rounded-md py-3">
                Recevez nos offres de bourses et stages{" "}
                <span className="block text-sm">
                  Afrique, Europe, Amérique, Asie
                </span>
              </h1>
              <input
                type="text"
                placeholder="Nom"
                className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <select className="border border-gray-300 h-10 rounded-md bg-white px-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+237">+237</option>
                  <option value="+228">+228</option>
                  <option value="+225">+225</option>
                  <option value="+33">+33</option>
                </select>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="rounded-md px-3 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 rounded-md px-4 py-2 w-full text-white font-semibold transition-colors duration-300"
              >
                S'abonner maintenant
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION ARTICLES */}
      <section className="flex flex-col items-center gap-8 bg-[#808CB2] py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-b-2 border-blue-900">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Derniers Articles du Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-items-center">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center w-[270px]"
            >
              <img
                src="https://via.placeholder.com/270x370"
                alt={`Article ${id}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <p className="text-xl font-semibold py-4">Titre</p>
              <div className="flex justify-between w-full border-t p-4 text-gray-700 text-sm">
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-eye"></i>
                  <p>2</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-comment"></i>
                  <p>5</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <p>58</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

/* HORIZONTAL LIST */
export function HorizontalList() {
  const items = [
    {
      id: 1,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 2,
      post: "Advisers Agency m'a permis de trouver la meilleure université ! Merci !",
      author: "Jane Smith",
      date: "20-Feb-2023",
    },
    {
      id: 3,
      post: "Un service rapide et fiable. Je recommande vivement !",
      author: "Ali Koné",
      date: "10-Mar-2023",
    },
    {
      id: 4,
      post: "Une agence professionnelle et efficace, j'ai adoré !",
      author: "Sarah Williams",
      date: "18-Mar-2023",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-hidden flex space-x-4 scrollbar-hide"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="min-w-[250px] max-w-[300px] h-[250px] bg-white rounded-2xl p-4 shadow-md flex-shrink-0"
        >
          <p className="font-bold">{item.author}</p>
          <p className="text-gray-500 text-sm">{item.date}</p>
          <p className="mt-2 text-gray-700">{item.post}</p>
        </div>
      ))}
    </div>
  );
}

// import { Link, useParams } from "react-router-dom";
// import Caroussel from "../components/caroussel";
// import first from "../assets/first_home.avif";
// import second from "../assets/second_home.avif";
// import book from "../assets/book_home.avif";
// import chimi from "../assets/chimi_home.avif";
// import team from "../assets/Team work.png";
// import exams from "../assets/Exams-rafiki.png";
// import { useEffect, useRef } from "react";

// const imagesList = [first, second, book, chimi];

// export function Home() {
//   const { id } = useParams();
//   return (
//     <div className="z-10">
//       <Caroussel images={imagesList} />

//       {/* section services */}
//       <section className="flex flex-col md:flex-row  gap-x-4 py-20 px-20   bg-gray-300  ">
//         <div className="lg:w-4/12 md:w-10/12 flex flex-col  justify-start items-start md:items-center gap-y-8 pb-20">
//           <h1 className="text-3xl font-bold">NOS SERVICES</h1>
//           <p>
//             Depuis 2006, Advisers Agency offre aux Africains une gamme de
//             services variés Visant l'amélioration de l'élite du continent.
//           </p>
//           <p>
//             Après le Cameroun, nous sommes présent au <span>Togo</span> et en{" "}
//             <span>Côte d'Ivoire</span>.{" "}
//           </p>
//           <div className="flex flex-row  gap-x-4 ">
//             <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-md px-2 h-8 w-20">
//               <Link to="/les-plus-sollicites">Plus</Link>
//             </button>
//             <button className="bg-blue-900  hover:bg-blue-700 cursor-pointer rounded-md px-2 h-8">
//               <i className="fa-brands fa-facebook-f text-white"></i>
//             </button>
//           </div>
//         </div>
//         {/*  */}
//         <div className="grid grid-cols-1 items-center sm:grid-cols-3 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-4  grid-rows-4 md:grid-rows-2 gap-x-12 gap-y-4 w-full  lg:w-8/12">
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/les-plus-sollicites">
//               {" "}
//               Les Plus Sollicités
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/work-study">
//               Work & Study
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/etudes-a-l-etranger">
//               Etudier à L'étranger
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/immigration-canadienne">
//               Immigration Canadienne
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/colonies-de-vacances">
//               Les Juniors 08-18 ans
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link
//               className="text-center"
//               to="/services/stage-a-l-international-usa"
//             >
//               Stages à L'international
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/voyages-decouvertes">
//               Voyages Découvertes
//             </Link>
//           </div>
//           <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
//             <Link className="text-center" to="/services/student-competitions">
//               Concours Étudiants
//             </Link>
//           </div>
//         </div>
//       </section>
//       {/* section equipes */}
//       <section className="flex flex-col justify-center items-center gap-y-4 py-10 px-12 border-b-2 border-t-2 border-blue-900 my-10 ">
//         <h1 className="text-3xl font-bold">Notre équipe</h1>
//         {/* <p>
//           Une équipe cosmopolite constituée de professionnels dotés d'une
//           expertise avérée.
//         </p> */}
//         <div className="flex flex-col sm:flex-row justify-start sm:gap-x-38  gap-x-8  gap-y-4">
//           <div className=" w-100 flex flex-col gap-y-10 p-5">
//             <p className="text-xl text-center">
//               Une équipe cosmopolite constituée de professionnels dotés d'une
//               expertise avérée.{" "}
//             </p>
//             <button className="bg-blue-900 rounded-md px-2 h-8 w-20  hover:bg-blue-700 cursor-pointer">
//               <Link to="/a-propos">Plus</Link>
//             </button>
//           </div>
//           {/* <div className="h-140 w-100"> */}
//           <img
//             src={`${team}`}
//             className="md:h-90 h-full md:w-90  bg-top "
//             alt=""
//           />
//           {/* </div> */}
//         </div>
//       </section>
//       {/* section NOS PARTENAIRES */}
//       <section className="flex flex-col justify-center items-center gap-y-16 sm:gap-y-4  py-10 px-20 sm:px-28 border-b-2 border-blue-900 ">
//         <h1 className="text-3xl ">Nos Partenaires</h1>
//         <p className="text-justify">
//           Nous collaborons avec des partenaires de confiance pour vous offrir
//           les meilleurs services.
//         </p>
//         <div className="flex flex-col md:flex-row px-20 items-center  justify-center gap-x-15 gap-y-4">
//           <div className="h-90 w-80 md:w-96 lg:w-100 bg-amber-800"></div>
//           <div className="h-90 w-90 bg-amber-100 lg:w-100 rounded-md flex flex-col justify-center items-center">
//             <div className="flex flex-col rounded-xl gap-7 justify-center bg-white  border-blue-500 hover:border-blue-700 border-4 items-center h-70 w-80 shadow-2xl hover:shadow-2xl/30">
//               {/* <img src={`${exams}`} alt="" className="w-20 h-20" /> */}
//               <p className="text-center text-lg p-10 ">
//                 {" "}
//                 Quelles sont mes chances d'obtenir un visa étudiant ? Faites
//                 votre
//               </p>
//               <button className="hover:bg-blue-600 h-10 rounded px-2 cursor-pointer bg-[url()]  bg-blue-800">
//                 <Link
//                   className="text-center text-lg p-10 "
//                   to="/formulaire-evaluation"
//                 >
//                   {" "}
//                   Évaluation Gratuite
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* /* section TÉMOIGNAGES */}
//       <section className="flex flex-col justify-center items-center gap-y-8 p-16 border-b-2 bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 border-blue-900 ">
//         <h1 className="text-3xl font-bold">Témoignages</h1>
//         <div className="flex  gap-x-10  gap-y-4 w-full flex-col items-center">
//           <div className="h-[400px] w-full  ">
//             <HorizontalList />
//           </div>
//           <div className="h-96 w-full md:w-7/12  bg-blue-800 rounded-2xl flex flex-col justify-center">
//             <form className="flex flex-col justify-center items-center gap-y-6 py-8 px-4 w-full border-2 border-gray-950 rounded-md bg-white shadow-lg">
//               <h1 className="text-xl text-white bg-blue-800 font-bold text-center rounded-md py-2 px-4 mb-2">
//                 Recevez nos offres de bourses et stage{" "}
//                 <span className="text-base">
//                   Afrique, Europe, Amérique, Asie
//                 </span>
//               </h1>
//               <div className="flex flex-col w-full gap-y-3">
//                 <input
//                   type="text"
//                   placeholder="Nom"
//                   className="bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div className="flex flex-row w-full gap-x-2">
//                 <select className="w-20 border border-gray-300 h-10 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="+237">+237</option>
//                   <option value="+228">+228</option>
//                   <option value="+225">+225</option>
//                   <option value="+33">+33</option>
//                 </select>
//                 <input
//                   type="tel"
//                   placeholder="Téléphone"
//                   className="bg-white rounded-md px-3 py-2 border w-32 sm:w-full border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-700 hover:bg-blue-600 rounded-md px-4 py-2 w-full mt-4 cursor-pointer text-white font-semibold transition-colors duration-200"
//               >
//                 S'abonner maintenant
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//       {/* section DERNIERS ARTICLES DU BLOG */}
//       <section className="flex flex-col justify-center items-center bg-[#808CB2] gap-y-8 p-20 border-b-2 border-blue-900 my-10">
//         <h1 className="text-5xl">Derniers Articles du Blog</h1>
//         {/* <p>
//           Restez informé avec nos derniers articles et actualités sur nos
//           services et l'actualité.
//         </p> */}
//         <div className="lg:flex  lg:justify-between  lg:flex-row  gap-x-8 gap-y-4">
//           <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
//             <img
//               src="https://via.placeholder.com/270x370"
//               alt="Article 1"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="text-4xl py-8 font-semibold">Titre</p>
//             <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-eye"></i>
//                 <p>2</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-comment"></i>
//                 <p>5</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-thumbs-up"></i>
//                 <p>58</p>
//               </div>
//             </div>
//           </div>
//           <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
//             <img
//               src="https://via.placeholder.com/270x370"
//               alt="Article 1"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="text-4xl py-8 font-semibold">Titre</p>
//             <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-eye"></i>
//                 <p>2</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-comment"></i>
//                 <p>5</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-thumbs-up"></i>
//                 <p>58</p>
//               </div>
//             </div>
//           </div>
//           <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
//             <img
//               src="https://via.placeholder.com/270x370"
//               alt="Article 1"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="text-4xl py-8 font-semibold">Titre</p>
//             <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-eye"></i>
//                 <p>2</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-comment"></i>
//                 <p>5</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-thumbs-up"></i>
//                 <p>58</p>
//               </div>
//             </div>
//           </div>
//           <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
//             <img
//               src="https://via.placeholder.com/270x370"
//               alt="Article 1"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="text-4xl py-8 font-semibold">Titre</p>
//             <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-eye"></i>
//                 <p>2</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-comment"></i>
//                 <p>5</p>
//               </div>
//               <div className="flex flex-row gap-x-2 items-center">
//                 <i class="fa-solid fa-thumbs-up"></i>
//                 <p>58</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

// // import { useRef, useEffect } from "react";

// export function HorizontalList() {
//   const items = [
//     {
//       id: 1,
//       post: "Advisers Agency has  a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//     {
//       id: 2,
//       post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//     {
//       id: 3,
//       post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//     {
//       id: 4,
//       post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//     {
//       id: 5,
//       post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//     {
//       id: 6,
//       post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
//       author: "John Doe",
//       date: "15-Feb-2023",
//     },
//   ];

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (containerRef.current) {
//         containerRef.current.scrollLeft += 1;
//         if (
//           containerRef.current.scrollLeft >=
//           containerRef.current.scrollWidth - containerRef.current.clientWidth
//         ) {
//           containerRef.current.scrollLeft = 0;
//         }
//       }
//     };

//     const interval = setInterval(scroll, 20); // vitesse
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full overflow-x-hidden flex space-x-4">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="min-w-[250px] max-w-[300px] h-[300px] bg-white rounded-2xl p-4 shadow-xl/30 m-4 flex-shrink-0"
//         >
//           <p className="font-bold">{item.author}</p>
//           <p className="text-gray-500 text-sm">{item.date}</p>
//           <p className="mt-2 text-gray-700">{item.post}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
