import { motion, useAnimation } from "framer-motion";
import InputAuth from "./InputAuth";
import Checkbox from "./Checkbox";
import Bonjour from "./Bonjour";
import { useState } from "react";
import "./InputExeption.css";
import { AiOutlineClose } from "react-icons/ai";
import { LuPartyPopper } from "react-icons/lu";
import { BiError } from "react-icons/bi";

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  const [check, setCheck] = useState(false);

  function isValidEmail(email) {
    // Modèle d'adresse e-mail couramment utilisé
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Vérifie si l'adresse e-mail correspond au modèle
    return emailPattern.test(email);
  }
  const [verificationEchouee, setVerificationEchouee] = useState(false);
  const [verificationReussie, setVerificationReussie] = useState(false);
  const [couleurBordure, setCouleurBordure] = useState("#3B4222");
  const [couleurBordureCheck, setCouleurBordureCheck] = useState("#606C38");

  const controls = useAnimation();

  const verifierFormulaire = () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmation.trim() === "" ||
      prenom.trim() === "" ||
      nom.trim() === "" ||
      password !== confirmation ||
      !check
    ) {
      return false;
    }
    return true;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const verificationReussie = verifierFormulaire();
    const emailValide = isValidEmail(email);
    if (emailValide && verificationReussie) {
      // La vérification est réussie, faites ce que vous devez faire ici
      setVerificationReussie(true);
    } else {
      // La vérification a échoué, déclenchez l'animation de secousse
      setVerificationEchouee(true);
      setCouleurBordure("#BA4242");
      setCouleurBordureCheck("#BA4242");

      // Utilisez Framer Motion pour déclencher l'animation de secousse
      await controls.start({ x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } });

      // Réinitialisez l'état après un certain délai pour arrêter la secousse
      setTimeout(() => {
        // setVerificationEchouee(false);
        controls.start({ x: 0 });
        setCouleurBordure("#606C38");
        setCouleurBordureCheck("#606C38");
      }, 500); // Réinitialisation après 0,5 seconde
    }
  };

  return (
    <>
      <form className='flex flex-col gap-3'>
        <motion.div className="flex flex-col gap-3" animate={controls}>
          <div className='flex gap-2'>
            <span className="exeption flex flex-col gap-3">
              <InputAuth
                borderColor={couleurBordure}
                placeholder={"Prénom"}
                change={(e) => setPrenom(e.target.value)}
                type={"text"}
              />
            </span>
            <span className="exeption flex flex-col gap-3">
              <InputAuth
                borderColor={couleurBordure}
                placeholder={"Nom"}
                change={(e) => setNom(e.target.value)}
                type={"text"}
              />
            </span>
          </div>
          <span className="exeption flex flex-col gap-3">
            <InputAuth
              borderColor={couleurBordure}
              placeholder={"Courriel"}
              change={(e) => setEmail(e.target.value)}
              type={"email"}
            />
          </span>
          <span className="exeption flex flex-col gap-3">
            <InputAuth
              borderColor={couleurBordure}
              placeholder={"Mot de passe"}
              change={(e) => setPassword(e.target.value)}
              type={"password"}
            />
            <InputAuth
              borderColor={couleurBordure}
              placeholder={"Confirmation"}
              change={(e) => setConfirmation(e.target.value)}
              type={"password"}
            />
          </span>
          <span>
            <Checkbox
              borderColor={couleurBordureCheck}
              clicFn={() => setCheck(!check)}
              texte={
                <span>
                  J'accepte les{" "}
                  <span className='text-perso-vert underline'>termes</span> et{" "}
                  <span className='text-perso-vert underline'>conditions</span>
                </span>
              }
            />
          </span>
        </motion.div>
        <button onClick={handleClick} className='animate__animated animate__fadeInUp bg-perso-beige text-white font-generalsansbold rounded-full p-4 text-xl mt-3'>
          Inscription
        </button>
        <button onClick={handleClick} className="fixed top-2 right-2 bg-red-500 rounded-full p-3 text-2xl">
          <BiError onClick={() => setAdmin(!admin)} />
        </button>
        
        <Bonjour icon={<AiOutlineClose/>} openFn={() => setVerificationEchouee(!verificationEchouee)} open={verificationEchouee} type={"erreur"} />
      </form>
      <Bonjour icon={<LuPartyPopper />} open={verificationReussie} nom={prenom} />
    </>
  );
};

export default Inscription;
