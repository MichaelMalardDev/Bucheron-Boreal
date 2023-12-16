import OverBouton from "./OverBouton";
import { FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Confirmation = ({ open }) => {
    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000; // génère un nombre aléatoire de 7 chiffres

    const styleNb = {
        letterSpacing: "0.8rem"
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div transition={{duration: ".5"}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 w-screen h-screen flex backdrop-blur-md backdrop-brightness-50 z-30 items-center justify-center">

                    <motion.div transition={{ delay: 0.5, duration: ".5", type: "spring" }} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="bg-white text-xl font-generalsans pt-14 relative flex flex-col gap-7 rounded-3xl items-center w-4/6 p-10">
                        <span className="bg-perso-beige p-6 rounded-full absolute -top-11">
                            <FaCheck className=" text-4xl" />
                        </span>
                        <h2>Numéro de confirmation</h2>
                        <h1 style={styleNb} className="font-generalsansbold text-4xl">{randomNumber}</h1>
                        <h2>Présenter au camion</h2>
                        <div className="flex flex-col gap-4 text-base w-full">
                            <OverBouton destination={"/"} bg={'beige'} texte={"Accueil"} />
                            <OverBouton destination={"/menu"} bg={'beige'} texte={"Menu"} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
export default Confirmation;