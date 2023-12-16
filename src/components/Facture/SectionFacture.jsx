import ItemFacture from "./ItemFacture";


const SectionPanier = ({ commande }) => {
    const ligneStyle = {
        borderWidth: "1.3px",
    };

    return (

        <section className="flex flex-col gap-5">
            <div className="animate__animated animate__fadeInDown">
                <h2 className="font-generalsans text-2xl">{commande.categorie}</h2>
                <hr style={ligneStyle} className="border-perso-vertFonce w-full my-2" />
            </div>
            <div className="flex flex-col gap-20">
                {commande.plats.map(({ nom, prix, nb,image }, itemId) => (
                <ItemFacture  
                name={nom}
                price={prix}
                nb={nb}
                image={image}
                itemId={itemId}
                />
                    
                ))}
            </div>
        </section>

    );
}
export default SectionPanier;