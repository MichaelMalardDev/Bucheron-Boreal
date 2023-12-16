import Item from "../../../components/Menu/Item";
import ItemPc from "../../../components/Menu/ItemPc";
const Repas = ({ repas }) => {
  return (
    <>
      <section className='w-full gap-5 flex flex-col justify-center items-center'>
        <h2 className='animate__animated animate__fadeInDown font-generalsansbold text-3xl self-start ml-10 mt-6 mb-3 xl:ml-32 xl:text-4xl'>
          {repas.categorie}
        </h2>
        <section className='justify-start mt-10 w-3/4 items-center flex-row gap-7 hidden xl:flex'>
          {repas.plats.map(
            ({ nom, prix, image, imageBg }, itemId) => (
              <ItemPc
                name={nom}
                price={prix}
                image={image}
                imageBg={imageBg}
                itemId={itemId}
                key={itemId}
                categorie={repas.id}
                buttonTypes={["detail", "panier"]}
              />
            )
          )}
        </section>
        <section className='flex justify-center w-3/4 items-center flex-col gap-5 xl:hidden'>
          {repas.plats.map(({ nom, prix, image, imageBg }, itemId) => (
            <Item
              name={nom}
              price={prix}
              image={image}
              imageBg={imageBg}
              itemId={itemId}
              key={itemId}
              categorie={repas.id}
              buttonTypes={["detail", "panier"]}
            />
          ))}
        </section>
      </section>
    </>
  );
};
export default Repas;
