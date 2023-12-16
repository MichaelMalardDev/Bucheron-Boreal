import { useState } from "react";
import CarteOption from "./CarteOption";
import { ImPaypal } from "react-icons/im";
import { ImCreditCard } from "react-icons/im";

const CommandeChoixPaiement = ({}) => {
  const [optionSelectionnee, setOptionSelectionnee] = useState(null);

  return (
    <div className="flex flex-col items-center gap-5 my-6 h-42">
      <CarteOption
        delay={0.1}
        icon={<ImPaypal />}
        type={"Paypal"}
        selected={optionSelectionnee === "Paypal"}
        onSelect={() => setOptionSelectionnee("Paypal")}
      />
      <CarteOption
        delay={0.2}
        icon={<ImCreditCard />}
        type={"Crédit"}
        selected={optionSelectionnee === "Crédit"}
        onSelect={() => setOptionSelectionnee("Crédit")}
      />
    </div>
  );
};

export default CommandeChoixPaiement;
