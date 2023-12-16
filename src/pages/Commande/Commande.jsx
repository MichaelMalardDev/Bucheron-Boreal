import { Link, Outlet, Navigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import SuiviCommande from "../../components/Commande/SuiviCommande";
import BoutonSuivant from "../../components/Commande/BoutonSuivant";
import { useState } from "react";

const Commande = () => {
    const ligneStyle = {
        borderWidth: "1.3px",
    };

    const [etape, setEtape] = useState(1);
    const maxEtape = 3;

    const handleClick = () => {
        if (etape < maxEtape) {
            setEtape(etape + 1);
        }
    };

    const handlePointClick = (clickedEtape) => {
        setEtape(clickedEtape);
    };

    let route;
    switch (etape) {
        case 1:
            route = <Navigate to={"informations"}/> 
            break;
        case 2:
            route = <Navigate to={"choix-paiement"}/> 
            break;
        case 3:
            route = <Navigate to={"paiement"}/> 
            break;
        default:
            route = <Navigate to={"informations"}/> 
    }

    return (
        <>
            <main className="flex flex-col h-screen items-center gap-10">
                <Link to="/menu/panier" className="text-4xl self-start mt-7 ml-7">
                    <FiArrowLeft />
                </Link>
                <div className="flex flex-col w-4/5">
                    <div className="animate__animated animate__fadeInDown">
                        <h1 className="text-4xl font-generalsansbold self-start">
                            Commander
                        </h1>
                        <hr style={ligneStyle} className="border-black w-full my-4" />
                    </div>
                    <span className="flex justify-center">
                        <SuiviCommande etape={etape} cl={handlePointClick} />
                    </span>
                    {route}
                    <Outlet />
                    <BoutonSuivant etape={etape} clicFn={handleClick} />
                </div>
            </main>
        </>
    );
};

export default Commande;
