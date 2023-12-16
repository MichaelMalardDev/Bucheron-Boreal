import React from "react";
import { Link, useLocation } from "react-router-dom";
import ItemNav from "./ItemNav";
import { LuSoup, LuDonut, LuCupSoda } from 'react-icons/lu';
import { FaHamburger } from 'react-icons/fa';

const NavCategorie = () => {
  const location = useLocation();
  
  return (
    <>
      <nav className='w-screen xl:w-auto xl:self-start xl:pl-28 sticky top-0 z-30 xl:h-28'>
        <ul className='scrollable flex justify-around xl:justify-start content-center xl:p-0 px-5 py-3 xl:gap-2 gap-4 bg-white overflow-x-scroll overflow-y-visible xl:overflow-visible w-full pl-36 xl:h-full'>
          <ItemNav icon={<LuSoup className="hidden xl:block text-3xl" />} lien="entrees" delay={1} />
          <ItemNav icon={<FaHamburger className="hidden xl:block text-3xl" />} lien="repas" delay={2} />
          <ItemNav icon={<LuDonut className="hidden xl:block text-3xl" />} lien="desserts" delay={3} />
          <ItemNav icon={<LuCupSoda className="hidden xl:block text-3xl"/>} lien="boissons" delay={4} />
        </ul>
      </nav>
    </>
  );
};
export default NavCategorie;
