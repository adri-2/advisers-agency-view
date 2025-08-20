import image1 from "../../assets/Station balnéaire.avif";
function VoyagesDecouvertes() {
  return (
    <div>
      <section>
        <img src={`${image1}`} alt="" />
      </section>

      <section className=" bg-white text-center m-20 px-30">
        <p>
          <span className="italic text-blue-500 text-2xl">
            Vous avez des envies...
          </span>{" "}
          <span className="italic text-yellow-500 text-2xl mr-2">
            {" "}
            Nous avons de bons plans
          </span>
          Vous souhaitez visiter Dubaï en couple, découvrir un pays d'Afrique ou
          le Chili, les caraïbes, apprendre le Chinois, l'espagnol le temps de
          vos Vacances... essayez nos groupes de voyages pour adultes et faites
          des rencontres enrichissantes
        </p>
        <button>Confiez-nous vos projets</button>
      </section>
      {/*  */}
    </div>
  );
}

export default VoyagesDecouvertes;
