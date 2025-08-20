import React, { useState } from "react";
import imgbg from "../assets/intership_usa_advisers_agency.avif";
import DivNavBar from "../components/divNavBar";

export default function FormulaireStageInternational() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    service: "",
    offreId: "",
    parcours: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire ici
    alert("Formulaire envoyé !");
  };

  return (
    <div className="bg-[#D5DCF5] ">
      <DivNavBar />
      <section className="h-screen">
        <img
          src={imgbg}
          alt="Background"
          className="w-full h-10/12 object-center"
        />
      </section>
      {/*  */}
      <section className="max-w-lg mx-auto bg-white  py-16 px-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-4 text-[#1F2663]">
          Obtenir un devis
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block mb-1 font-medium">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Nom de famille</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Sélectionnez un service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Choisir...</option>
              <option value="stage">Trainee</option>
              <option value="emploi">Internship</option>
              <option value="autre">Trainee non rémunéré</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Identifiant ID de l'offre
            </label>
            <input
              type="text"
              name="offreId"
              value={form.offreId}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            {/* <label className="block mb-1 font-medium">
            
            </label> */}
            <textarea
              name="parcours"
              value={form.parcours}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="  Dites-nous un peu plus sur votre parcours académique, avez-vous de l'expérience professionnelle ?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Ouvrir
          </button>
        </form>
      </section>
      <section className="pt-8"></section>
    </div>
  );
}
