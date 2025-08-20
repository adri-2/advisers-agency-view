import image1 from "../../assets/Toronto.avif";
function ImmigrationCanadienne() {
  return (
    <div>
      <img src={`${image1}`} alt="" />
      {/*  */}
      <section className="bg-white p-16 border-2 border-gray-300 flex  justify-end gap-x-10">
        <button className="p-4 cursor-pointer  bg-blue-700 hover:bg-blue-600 text-white rounded-lg">
          Nous contacter
        </button>
      </section>
    </div>
  );
}

export default ImmigrationCanadienne;
