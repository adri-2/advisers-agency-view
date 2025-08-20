"use client"

import type React from "react"
import { useState } from "react"
import Caroussel from "../components/caroussel"
import conact from '../assets/second_home.avif'

export default function Contact() {
    const imagesList = [conact]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div>
            <Caroussel images={imagesList} titre="CONTACT"></Caroussel>
            <div className="min-h-screen bg-[#d5dcf5] relative overflow-hidden">
                {/* Main Content */}
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-36">

                        {/* Contact Form */}
                        <div>
                            <header className="mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-white">
                                    Advisers Agency
                                </h1>
                            </header>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 flex flex-col"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md placeholder:text-gray-500 text-gray-800 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    rows={5}
                                />

                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="bg-[#3b58b8] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Bureaux en Afrique Header */}
                        <div className="flex items-start justify-center">
                            <div className="bg-[#3b58b8] rounded-lg p-6 border-4 border-[#b54e59] text-center shadow-md w-full">
                                <h2 className="text-xl font-semibold text-white">
                                    Bureaux en Afrique
                                </h2>
                            </div>
                        </div>

                        {/* Infos */}
                        <div className="space-y-8 text-[#2f2e2e]">
                            {/* Siège - Douala */}
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-[#002E5D]">Siège</h3>
                                <p className="font-semibold text-3xl">Douala - Cameroun</p>
                                <p className="text-xl">Bonamoussadi, Hôtel Serena</p>
                                <p className="text-xl">Sable, 1er étage Imm Terrific Coffee.</p>
                                <p className="text-xl mt-2">home@advisers-agency.com</p>
                                <p className="text-xl">Whatsapp: +237 696 56 0000</p>
                                <p className="text-xl">Bureau : +237 233 47 6620</p>
                            </div>

                            {/* Bureau d'Abidjan */}
                            <div className="space-y-2 border-l-4 border-blue-400 pl-4">
                                <h3 className="text-3xl font-bold">Bureau d'Abidjan</h3>
                                <p className="font-semibold text-3xl">Abidjan - Côte d'Ivoire</p>
                                <p className="text-xl">Riviera Palmeraie</p>
                                <p className="text-xl">Résidence SIPIM les Tuileries</p>
                                <p className="text-xl mt-2 text-blue-600 underline">
                                    overseas@advisers-agency.com
                                </p>
                                <p className="text-xl">Whatsapp: +225 0815 8824</p>
                                <p className="text-xl">Bureau : +225 0815 8824</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Einstein Quote */}
                <div className="px-6 pb-8 text-center">
                    <p className="text-[#2f2e2e] text-sm italic">
                        "Un problème sans solutions est un problème mal posé"
                        <br />
                        <span className="text-[#2f2e2e] font-semibold">
                            - Albert Einstein
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
