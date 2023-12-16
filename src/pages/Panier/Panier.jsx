import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import "./Panier.css";
import ButtonCommander from "../../components/Menu/ButtonCommander";
import SectionPanier from "../../components/Panier/SectionPanier"


const Panier = ({ panier }) => {
  return (
    <div className="flex flex-col items-center gap-12 m-7">
      <Link to={"/menu"} className="text-3xl w-8 self-start">
        <IoArrowBackSharp />
      </Link>
      <div className="flex flex-col gap-10 mx-8 mb-24">

        <div className="animate__animated animate__fadeInDown flex flex-row items-center gap-4 ">
          <h1 className="text-4xl font-generalsansbold">Panier</h1>
          <img
            className='h-7'
            src='/src/assets/img/SVG/panier.svg'
            alt='panier-icon'
          />
        </div>
        <div className="flex flex-col gap-10">
          {panier.map((index) => (
            <div className="flex flex-col items-center gap-14" key={index}>
              <SectionPanier panier={index} />
              {index.id < panier.length && <span className="animate__animated animate__fadeInDown ligne-separation"></span>}

            </div>

          ))}

        </div>
      </div>
      <ButtonCommander bg={"beige"} prix={"0,00"} destination={"/commande"} />
    </div>
  );
};
export default Panier;
