"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/advisers.avif";
import type { Menu } from "../models/index.model";

const navigation: Menu[] = [
  { name: "Accueil", href: "/home" },
  { name: "A propos", href: "/a-propos" },
  {
    name: "Service",
    href: "/services",
    children: [
      { name: "Etudier à l'étranger", href: "/services/etudes-a-l-etranger" },
      { name: "Work & Study", href: "/services/work-study" },
      {
        name: " Stage à l'international - USA",
        href: "/services/stage-a-l-international-usa",
      },
      { name: "08 - 18 Ans", href: "/services/colonies-de-vacances" },
      {
        name: "Immigration Canadienne",
        href: "/services/immigration-canadienne",
      },
      { name: "Pour les Touristes", href: "/services/voyages-decouvertes" },
      { name: "Student Competitions", href: "/services/student-competitions" },
    ],
  },
  { name: "FAQS", href: "/faq" },
  { name: "Info & Actu", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white/70 backdrop-invert backdrop-opacity-10 z-100 fixed top-0 w-full">
      <header className="flex items-center justify-between px-6 lg:px-12 py-2">
        {/* Logo */}
        <div>
          <Link to="/" className="-m-1.5 p-1.5 object-none">
            <img
              alt="logo de Advisers Agency"
              src={logo}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav aria-label="Global" className="flex-1 flex justify-center">
          {/* Menu burger visible uniquement en mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>☰
            </button>
          </div>

          {/* Menu principal desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="group relative">
                  <Link
                    to={item.href}
                    className="text-lg font-semibold text-[#273b7bff]
                      border-t-2 border-[#273b7bff]
                      hover:text-[#f16876] focus:text-[#f16876]
                      hover:border-[#f16876] focus:border-[#f16876]
                      hover:border-t-4 focus:border-t-4
                      transition-all duration-300"
                  >
                    {item.name}
                  </Link>

                  {/* Sous-menu (inchangé) */}
                  <div className="absolute left-0 top-full mt-[2px] hidden min-w-[16rem] rounded-md bg-white shadow-lg group-hover:block z-50">
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child?.name}>
                          <Link
                            to={child?.href}
                            className="text-base block font-semibold text-[#273b7bff]
                              border-t-2 border-[#273b7bff]
                              hover:text-[#f16876] focus:text-[#f16876]
                              hover:border-[#f16876] focus:border-[#f16876]
                              hover:border-t-4 focus:border-t-4
                              transition-all duration-300 px-4 py-2 "
                          >
                            {child?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item?.name}
                  to={item?.href}
                  className="text-lg font-semibold text-[#273b7bff]
                    border-t-2 border-[#273b7bff]
                    hover:text-[#f16876] focus:text-[#f16876]
                    hover:border-[#f16876] focus:border-[#f16876]
                    hover:border-t-4 focus:border-t-4
                    transition-all duration-300"
                >
                  {item?.name}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Barre de recherche */}
        <div className="hidden md:block max-w-xs">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
