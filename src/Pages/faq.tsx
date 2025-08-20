import Accordion from "../components/accordion";

export default function Faq() {

    return (
        <div className="w-full">
            <div className="flex flex-wrap items-center justify-center w-full p-4 gap-8 bg-[#d5dcf5]">
                <Accordion />
                <div>{/* Ici tu pourras mettre un autre bloc si besoin */}</div>
            </div>
        </div>
    );
}
