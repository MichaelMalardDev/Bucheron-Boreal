import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const CarteOption = ({ icon, type, delay, selected, onSelect }) => {
  return (
    <>
      <motion.span
        onClick={onSelect} // Appeler la fonction onSelect lorsque l'option est cliquée
        transition={{ delay: delay, duration: ".5", type: "spring" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={"relative text-4xl rounded-3xl border-2 py-10 px-28 mt-5 border-black"}
      >
        {selected && (
          <AnimatePresence>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-3 left-3 bg-perso-vert p-1 rounded-full"
            >
              <FaCheck className="text-sm" />
            </motion.span>
          </AnimatePresence>
        )}
        <p className="absolute -top-8 left-5 text-xl">{type}</p>
        {icon}
      </motion.span>
    </>
  );
};

export default CarteOption;
