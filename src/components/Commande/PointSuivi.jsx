import { motion } from "framer-motion";

const PointSuivi = ({nb, bgColor, clicFn, delay}) => {
    return(
        <>
            <motion.button transition={{ delay: delay, duration: ".5", type: "spring" }} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={clicFn} className={`flex justify-center items-center border-2 w-9 h-9 rounded-full bg-perso-${bgColor}`}>
                {nb}
            </motion.button>
        </>
    );
}
export default PointSuivi;