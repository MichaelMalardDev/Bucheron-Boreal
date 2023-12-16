import { useNavigate } from "react-router-dom";

const BoutonSuivant = ({ clicFn, etape }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (etape < 3) {
      clicFn();
    } else {
      navigate("/facture");
    }
  }

  return (
    <>
      { }
      <button
        onClick={handleClick}
        className='animate__animated animate__fadeInUp bg-perso-beige text-white font-generalsansbold rounded-2xl py-4 text-xl mt-3'>
        {etape < 3 ? "Suivant" : "Completer la commande"}
      </button>
    </>
  );
};
export default BoutonSuivant;
