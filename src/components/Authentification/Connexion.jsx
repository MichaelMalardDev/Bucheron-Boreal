import { motion, useAnimation } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import { useState } from "react";
import InputAuth from "./InputAuth";
import Checkbox from "./Checkbox";
import Bonjour from "./Bonjour";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationEchouee, setVerificationEchouee] = useState(false);
  const [verificationReussie, setVerificationReussie] = useState(false);
  const [couleurBordure, setCouleurBordure] = useState("#3B4222");

  const controls = useAnimation();

  const verifierFormulaire = () => {
    if (email.trim() === "" || password.trim() === "") {
      return false;
    }
    return true;
  };

  function isValidEmail(email) {
    // Modèle d'adresse e-mail couramment utilisé
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Vérifie si l'adresse e-mail correspond au modèle
    return emailPattern.test(email);
  }


  const handleClick = async (e) => {
    const verificationReussie = verifierFormulaire();
    const emailValide = isValidEmail(email);
    e.preventDefault();
    if (emailValide && verificationReussie) {
      // La vérification est réussie, faites ce que vous devez faire ici
      setVerificationReussie(true);
    } else {
      // La vérification a échoué, déclenchez l'animation de secousse
      setVerificationEchouee(true);
      setCouleurBordure("#BA4242");

      // Utilisez Framer Motion pour déclencher l'animation de secousse
      await controls.start({ x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } });

      // Réinitialisez l'état après un certain délai pour arrêter la secousse
      setTimeout(() => {
        setVerificationEchouee(false);
        controls.start({ x: 0 });
        setCouleurBordure("#3B4222");
      }, 500); // Réinitialisation après 0,5 seconde
    }
  };

  return (
    <>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex flex-col gap-10"
            animate={controls}
          >
            <InputAuth
              type={"email"}
              borderColor={couleurBordure}
              change={(e) => setEmail(e.target.value)}
              placeholder={"Courriel"}
              icon={<BsFillPersonFill />}
            />
            <InputAuth
              type={"password"}
              borderColor={couleurBordure}
              change={(e) => setPassword(e.target.value)}
              placeholder={"Mot de passe"}
              icon={<BiSolidLockAlt />}
            />
          </motion.div>
          <Checkbox texte={"Rester connecté"} borderColor={"#606C38"} />
        </div>
        <button
          onClick={handleClick}
          className="animate__animated animate__fadeInUp bg-perso-beige text-white font-generalsansbold rounded-full p-4 text-xl mt-3"
        >
          Connexion
        </button>
      </form>

      <Bonjour icon={<LuPartyPopper />} open={verificationReussie} nom={"Dominique"} />

    </>
  );
};

export default Connexion;
