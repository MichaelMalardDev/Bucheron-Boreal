import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LuPartyPopper } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Bonjour = ({ openFn, open, nom, icon, type }) => {
    const navigate = useNavigate();

    if (open && type !== "erreur") {
        setTimeout(() => {
            navigate("/menu")
        }, 1000);
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    onClick={openFn}
                    transition={{ duration: ".2" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed left-0 top-0 w-screen h-screen flex backdrop-blur-md backdrop-brightness-50 z-30 items-center justify-center"
                >
                    <motion.div
                        transition={{ duration: ".5", type: "spring" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-white text-2xl font-generalsans pt-14 relative flex flex-col gap-7 rounded-3xl items-center w-4/5 p-10"
                    >
                        <span className={`${type !== "erreur" ? "bg-perso-beige" : "bg-perso-rouge"} text-4xl p-6 rounded-full absolute -top-11`}>
                            {icon}
                        </span>
                        {type !== "erreur" ? <h1 className="text-2xl">Bienvenue {nom}!</h1> : <h1 className="text-4xl">Oups!</h1>}
                        {type !== "erreur" ? <p className="text-center text-lg">Nous sommes ravis de vous accueillir!</p> : <p className="text-center text-lg">Vos informations ne sont pas valides, veuillez réessayer.</p>}
                    </motion.div>
                </motion.div>
            )}

        </AnimatePresence>
    );
}
export default Bonjour;