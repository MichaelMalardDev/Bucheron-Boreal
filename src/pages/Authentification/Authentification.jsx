import "./Authentification.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BsGoogle } from "react-icons/bs";

const Authentification = () => {
  const location = useLocation();
  return (
    <div className='flex flex-col h-screen items-center gap-10'>
      <Link
        to='/menu'
        className='text-4xl self-start mt-7 ml-7'>
        <FiArrowLeft />
      </Link>
      <div className='flex flex-col justify-around h-4/5 w-4/5'>
        <div className='flex flex-col gap-11'>
          <h1 className='animate__animated animate__fadeInDown text-4xl font-generalsansbold'>
            {location.pathname.includes("inscription")
              ? "Inscription"
              : "Connexion"}
          </h1>
          <Outlet />
        </div>
        <div className='flex flex-col items-center gap-5'>
          <span className='text-3xl'>
            <BsGoogle />
          </span>
          {location.pathname.includes("inscription")
              ? <h2 className='flex gap-2 font-generalsansbold'>
              Déjà un compte?
              <Link
                className='font-generalsans underline text-perso-beige'
                to='/authentification/connexion'>
                Connexion
              </Link>
            </h2>
              : <h2 className='flex gap-2 font-generalsansbold'>
              Besion d'un compte?
              <Link
                className='font-generalsans underline text-perso-beige'
                to='/authentification/inscription'>
                Inscription
              </Link>
            </h2>}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authentification;
