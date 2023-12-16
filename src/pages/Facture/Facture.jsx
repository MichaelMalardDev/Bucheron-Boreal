import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import SectionFacture from "../../components/Facture/SectionFacture";
import ButtonCommander from "../../components/Menu/ButtonCommander";
import OverPrix from "../../components/Facture/OverPrix";
import Confirmation from "../../components/Facture/Confirmation";

import { useState } from "react";

const Facture = ({ commande }) => {
    const [factureOuverte, setFactureOuverte] = useState(false);
    const [confirmationOuverte, setConfirmationOuverte] = useState(false);
    const handleClickCommander = () => {
        setFactureOuverte(!factureOuverte);
    };
    const handleClickConfirmation = () => {
        setConfirmationOuverte(!confirmationOuverte);
    }

    return (
        <div className="flex relative flex-col items-center gap-12 m-7">
            <Link to={"/commande"} className="text-3xl w-8 self-start">
                <IoArrowBackSharp />
            </Link>
            <div className="flex flex-col gap-10 w-4/5 mx-8 mb-24">
                <h1 className="animate__animated animate__fadeInUp text-4xl font-generalsansbold">Facture</h1>
                <div className="flex flex-col gap-10">
                    {commande.map((index) => (
                        <div>
                            <SectionFacture commande={index} key={index.id} />
                        </div>
                    ))}
                </div>
            </div>

            <ButtonCommander prix={"39,00"} bg={"vert"} clicFn={handleClickCommander} />

            <OverPrix prix={"39.00"} clicFn2={handleClickConfirmation} clicFn={handleClickCommander} open={factureOuverte} />
            <Confirmation open={confirmationOuverte} />
        </div>
    );
};
export default Facture;