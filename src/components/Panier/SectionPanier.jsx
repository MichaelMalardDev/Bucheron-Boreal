import Item from "../Menu/Item"



const SectionPanier = ({ panier }) => {
    return (

        <section className="flex flex-col w-full gap-5">
            <h2 className="animate__animated animate__fadeInDown font-generalsans text-2xl">{panier.categorie}</h2>
            <div className="flex flex-col gap-5">
                {panier.plats.map(({ nom, prix, nb, image, imageBg }, itemId) => (
                    <Item
                        name={nom}
                        price={prix}
                        nb={nb}
                        image={image}
                        imageBg={imageBg}
                        itemId={itemId}
                        buttonTypes={["supprimer"]}
                    />
                ))}
            </div>
        </section>

    );
}
export default SectionPanier;