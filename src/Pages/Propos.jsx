import apropos from "../assets/img_apropos.avif";
import patrick from "../assets/patrick-advisers-bureau-douala.avif";
import Amira from "../assets/Amira-bureau-advisers-lome.avif";
import DivNavBar from "../components/divNavBar";
import { Link } from "react-router-dom";

export function Apropos() {
  return (
    <div>
      <DivNavBar />
      {/* <section>
        <img
          src={`${apropos}`}
          className="w-full z-0 relative bg-fixed"
          alt=""
        />
      </section> */}
      <div
        className="bg-fixed top-0 left-0 w-full h-8   z-0"
        style={{
          backgroundImage: `url(${apropos})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          minHeight: "50vh",
        }}
      ></div>

      <section className="px-5 md:px-30 py-5 z-10 flex flex-col gap-y-20 justify-center items-center mt-6 ">
        <div className="bg-fixed flex flex-col gap-y-6  w-[80%] sm:w-[70%] md:w-[70%] lg:w-[90%] z-20">
          <h1 className="text-2xl font-bold">Advisers Agency</h1>
          <p className="text-justify text-lg">
            Spécialiste des études à l’étranger depuis décembre 2006, Advisers
            Agency vous propose une expertise unique et éprouvée qui vous
            accompagne tout au long de votre projet d’étude secondaire et
            supérieure en Afrique, Amérique, Europe et Asie.{" "}
          </p>
          <p className="text-justify text-lg">
            Advisers Agency est fier d’avoir accompagné en 2023 plus de 1000
            Jeunes dans la réalisation de leurs projets d’études à l’étranger
            (USA, CANADA, France, Angleterre, Lettonie, Belgique, Allemagne,
            Dubai, Chine ...) dans la convivialité, la confidentialité et avec
            un accent particulier dans la recherche de l'équilibre qualité et
            coût.
          </p>
          <p className="text-justify text-lg">
            Depuis peu, à la demande de nos clients, nous avons ouvert une
            branche spécialisée dans la recherche des stages en entreprises aux
            USA en Asie et à Dubaï. Nos conseils accompagnent aussi ceux qui
            désirent s’installer au CANADA en qualité d’immigrants qualifiés.
          </p>
          <p className="text-justify text-lg">
            Advisers Agency à conscience qu’une vie professionnelle réussie est
            très souvent la conséquence d’une enfance riche et épanouie. Pour
            les plus jeunes et les adolescents, nous proposons des colonies de
            vacances dans plusieurs pays tels que Canada, Etats-Unis,
            Angleterre, Espagne, Afrique du Sud, Kenya, Rwanda et bien d’autres
            pays sur demande. En outre, tout au long de l’année académique, nous
            organisons des compétitions entre établissements scolaire du
            secondaire et du supérieur afin de développer le leadership, le Team
            spirit et la sociabilité de chaque participant.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 w-[80%] sm:w-[70%] md:w-[70%] lg:w-[90%] ">
          {" "}
          <h1 className="text-2xl font-bold">Nos Valeurs</h1>
          <ul className="list-disc pl-5">
            <li className="text-justify text-lg">
              <span className="text-justify font-bold text-lg">Célérité</span>{" "}
              :​ En général, le temps de traitement des dossiers n’excède pas 04
              mois, de l'inscription à la demande de visa.
            </li>
            <li className="text-justify text-lg">
              <span className="text-justify font-bold text-lg">
                ​Efficacité
              </span>{" "}
              : L’expérience acquise depuis 2006, nous permet de vous conseiller
              efficacement sur les chances de réussite de votre projet.
            </li>
            <li className="text-justify text-lg">
              <span className="text-justify font-bold text-lg">Empathie</span> :
              Chaque membre de notre équipe fait preuve d’une écoute attentive.
              Les conseils que nous vous prodiguerons, prendrons toujours en
              considération votre particularité afin de vous procurer un service
              à votre mesure.
            </li>
          </ul>
        </div>
      </section>
      {/* section equipe */}
      {/* <section> */}
      <section className="bg-blue-900  text-black py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white p-6 relative -mt-6">
          <h2 className="text-3xl font-bold mb-1">Rencontrez l'équipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-center mt-10">
            {/* <!-- CARD 1 --> */}
            <div className="text-center">
              <img
                src={`${patrick}`}
                alt="Marie Brun"
                className="mx-auto mb-4 w-30"
              />
              <h3 className="font-bold uppercase">Patrick Ngounou, CEO</h3>

              <a
                className="text-blue-900  font-medium mb-2"
                href="mailto:patrick@advisers-agency.com "
              >
                patrick@advisers-agency.com{" "}
              </a>
              <p className="text-sm text-gray-600 mb-4">
                Passionné d'éducation et d'orientation Académique, Patrick est
                le promoteur de la plateforme web d'orientation baptisée
                Student's MAG. Il est aussi promoteur de plusieurs projets
                éducatifs parmi lesquels le Student's Compétitions qui est une
                compétition inter-institutions locales à visée Africaine. Son
                rêve c'est de faire jaillir l'étincelle cachée en chaque jeune
                Africain.
              </p>
              <div className="flex justify-center space-x-4 text-black">
                <i className="fab fa-facebook-f "></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>

            {/* <!-- CARD 2 --> */}
            <div className="text-center">
              <img
                src={`${Amira}`}
                alt="Anne Richmond"
                className="mx-auto mb-4 w-30"
              />
              <h3 className="font-bold uppercase ">Amira Sangban, GM-Lome</h3>
              <a
                className="text-blue-900  font-medium mb-2"
                href="mailto:overseas@advisers-agency.com"
              >
                patrick@advisers-agency.com{" "}
              </a>
              <p className="text-sm text-gray-600 mb-4">
                Dynamique et passionnée de tourisme et de découverte, elle
                incarne la réussite de la femme Togolaise. Son engagement dans
                les organismes bénévole depuis bientôt 10 ans lui a permis de
                visiter plusieurs pays dans le monde. Elle est propriétaire
                d'une agence de biellette pour le bénéfice de nos candidats.
              </p>
              <div className="flex justify-center space-x-4 text-black">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </section> */}
      {/* section contact */}
      {/* section contact */}
      <section className="w-full mx-auto p-8  shadow-md mt-10 flex flex-row justify-center gap-24 font-black items-center">
        <div className="flex flex-col ">
          <h2 className="text-4xl font-semibold mb-4 text-blue-900">
            N'hésitez pas à nous contacter
          </h2>

          <p className="text-blue-700">
            En cas d'urgence sur nos adresses directes mentionnées ci dessus
          </p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer ">
          <Link to="/contact">Nous Contacter</Link>
        </button>
      </section>
    </div>
  );
}

export default Apropos;
