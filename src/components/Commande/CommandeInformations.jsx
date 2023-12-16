import InputCommande from "./InputCommande";
import { useState } from "react";

const CommandeInformations = ({}) => {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [courriel, setCourriel] = useState("");

    const isPrenomInvalid = prenom.trim() === '';
    const isNomInvalid = nom.trim() === '';
    const isCourrielInvalid = courriel.trim() === '';

    return(
        <div className="my-6">
            <InputCommande change={e => setPrenom(e.target.value)} delay={1} type={"text"} placeholder={"Prénom"}/>
            <InputCommande change={e => setNom(e.target.value)} delay={2} type={"text"} placeholder={"Nom"}/>
            <InputCommande change={e => setCourriel(e.target.value)} delay={3} type={"email"} placeholder={"Courriel"}/>
        </div>
    );
}
export default CommandeInformations;