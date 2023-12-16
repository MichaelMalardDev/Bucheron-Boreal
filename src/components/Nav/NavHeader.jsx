import HamburgerIcon from "./HamburgerIcon";
import { Link, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const NavHeader = ({ clicFn, open }) => {
  const location = useLocation();
  return (
    <div className='nav-conteneur flex justify-around xl:justify-start items-center w-screen py-5 xl:pl-6'>
      <button
        onClick={clicFn}
        className='animate__animated animate__fadeInDown z-50'>
        <HamburgerIcon isChecked={open} />
      </button>
      <img
        className='animate__animated animate__fadeInDown h-10 pr-3 xl:hidden'
        src='/src/assets/img/SVG/boreal.svg'
        alt='boreal'
      />
      <Link className="animate__animated animate__fadeInDown xl:hidden" to="menu/panier">
        {location.pathname.includes("menu") ? (
          <img
            className='h-6'
            src='/src/assets/img/SVG/panier.svg'
            alt='panier-icon'
          />
        ) : (
          <BsFillPersonFill className='h-6' />
        )}
      </Link>
    </div>
  );
};
export default NavHeader;
