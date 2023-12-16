import { useState } from "react";

import InputCommande from "./InputCommande";
const CommandePaiement = ({ }) => {

  const [numeroCarte, setNumeroCarte] = useState("");
  const [nomCarte, setNomCarte] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCvvChange = (e) => {
    const inputValue = e.target.value.slice(0, 3); // Limiter à 3 caractères
    setCvv(inputValue);
  };

  const handleNumCardChange = (e) => {
    const inputValue = e.target.value.slice(0, 16); // Limiter à 16 caractères
    setNumeroCarte(inputValue);
  };

  const handleExpirationChange = (e) => {
    const inputValue = e.target.value.slice(0, 4); // Limiter à 16 caractères
    setExpiration(inputValue);
  };
 


  return (
    <div className="my-6">
      <InputCommande
        change={handleNumCardChange}
        placeholder={"Numéro de carte"}
        value={numeroCarte}
        type={"number"}
      />
      <InputCommande
        change={e => setNomCarte(e.target.value)}
        delay={1}
        placeholder={"Nom sur la carte"}
        type={"text"}
      />
      <div className='flex gap-2'>
        <InputCommande
          change={handleExpirationChange}
          delay={2}
          value={expiration}
          placeholder={"Expiration"}
          type={"number"}
        />
        <InputCommande
          change={handleCvvChange}
          delay={2}
          placeholder={"CVV"}
          type={"number"}
          value={cvv}
        />
      </div>
    </div>
  );
};
export default CommandePaiement;
