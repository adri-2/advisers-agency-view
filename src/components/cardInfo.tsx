import { useEffect, useRef, useState } from "react";
import type { CardInfoProps } from "../models/index.model";

export default function CardInfo({ data }: CardInfoProps) {
    const {
        title,
        description,
        author,
        avatar,
        date,
        readingTime,
        views,
        comments,
        likes,
    } = data;

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    // Fermer le popover si on clique à l'extérieur
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsPopoverOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-[#2f2e2e4a] border-2 mb-8 rounded-lg shadow-sm hover:shadow-md transition">

            {/* Image principale */}
            <div className="flex-shrink-0 w-full md:w-auto">
                <img
                    src={avatar}
                    alt={title}
                    className="w-full h-full object-cover rounded-md cursor-pointer"
                />
            </div>

            {/* Contenu texte */}
            <div className="flex flex-col justify-between flex-1 w-full p-8 min-h-[200px] md:min-h-[300px]">

                {/* En-tête auteur et date */}
                <div>
                    <div className="flex justify-between items-start flex-wrap">
                        <div className="flex items-start mb-2 md:mb-0">
                            <img
                                src={avatar}
                                alt={author}
                                className="h-8 w-8 rounded-full mr-4"
                            />
                            <div>
                                <span className="hover:text-[#273b7bff] cursor-pointer">{author}</span>
                                <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                                    <span>{date}</span>
                                    <span className="hidden sm:inline">·</span>
                                    <span>{readingTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Popover partage */}
                        <div className="relative" ref={popoverRef}>
                            <span
                                className="text-black cursor-pointer self-start text-2xl px-2"
                                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                            >
                                ⋮
                            </span>

                            {isPopoverOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg shadow-gray-300 z-50">
                                    <button
                                        onClick={() => { setIsModalOpen(true); setIsPopoverOpen(false); }}
                                        className="flex items-center gap-2 w-full text-left text-sm p-3 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            viewBox="0 0 19 19"
                                            role="img"
                                            className="w-5 h-5 fill-current"
                                        >
                                            <path d="M16.941 8.391 ... Z"></path>
                                        </svg>
                                        Partager le post
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Titre et description */}
                    <div className="mt-3 hover:text-[#273b7bff] cursor-pointer">
                        <h1 className="text-2xl md:text-4xl">{title}</h1>
                        <p className="text-base md:text-lg mt-1 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Statistiques */}
                <div className="pt-4 flex justify-between text-sm text-gray-500 flex-wrap gap-2 border-[#2f2e2e4a] border-t-2 mt-auto">
                    <div className="flex gap-4">
                        <span>{views} vues</span>
                        <span>{comments} commentaires</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{likes}</span>
                        <span>❤️</span>
                    </div>
                </div>
            </div>

            {/* Modal overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000004d]">
                    <div className="bg-white rounded-xl p-6 shadow-lg w-[30rem] h-[16rem] text-center relative flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold mb-4">Partager le post</h2>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="text-gray-500 hover:text-gray-700 absolute top-2 right-2"
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>

                        </button>
                        <div className="flex justify-center gap-6">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com/sharer/sharer.php?u=https://tonlien.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-[#4464a3] text-white rounded-full hover:opacity-80"
                            >
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                </svg>

                            </a>

                            {/* Twitter */}
                            <a
                                href="https://twitter.com/intent/tweet?url=https://tonlien.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-[#55acee] text-white rounded-full hover:opacity-80"
                            >
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                                </svg>

                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/sharing/share-offsite/?url=https://tonlien.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-[#333] text-white rounded-full hover:opacity-80"
                            >
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                </svg>

                            </a>

                            {/* Copier le lien */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("https://tonlien.com");
                                    alert("Lien copié !");
                                }}
                                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:opacity-80"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 2a2 2 0 00-2 2v2h2V4h8v12h-8v-2H6v2a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H8z" />
                                    <path d="M3 8a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
