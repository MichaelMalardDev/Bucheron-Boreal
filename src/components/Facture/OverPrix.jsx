import RangeeOver from "./RangeeOver";
import OverBouton from "./OverBouton";
import { MdAttachMoney } from "react-icons/md";
import { AnimatePresence, easeIn, motion } from "framer-motion";

const OverPrix = ({ prix, clicFn, clicFn2, open }) => {
    const taxe = Number(prix) * 0.15;
    const total = (Number(prix) + taxe).toFixed(2);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="overprix"
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    initial={{ translateY: 500 }}
                    exit={{ translateY: 500 }}
                    animate={{ translateY: 0 }}
                    className="bg-orange-200 h-2/6 rounded-t-3xl w-11/12 flex flex-col items-center fixed bottom-0 z-20 pt-12"
                >
                    <span className="absolute -top-10 text-5xl bg-perso-beige rounded-full flex justify-center items-center p-4">
                        <MdAttachMoney className="ml-0.5" />
                    </span>
                    <div className="flex flex-col gap-3 w-4/5">
                        <RangeeOver titre={"Total"} argent={prix} />
                        <RangeeOver titre={"Taxe"} argent={taxe} />
                        <span className="mt-3">
                            <RangeeOver titre={"Grand total"} argent={total} />
                        </span>
                    </div>
                    <div className="flex justify-between w-4/5 gap-5 mt-6">
                        <OverBouton clicFn={clicFn2} texte={"Confirmer"} bg={"vert"} />
                        <OverBouton clicFn={clicFn} texte={"Annuler"} bg={"rouge"} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default OverPrix;