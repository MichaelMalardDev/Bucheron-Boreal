import "./Menu.css";
import NavCategorie from "../../components/Menu/NavCategorie";
import ButtonCommander from "../../components/Menu/ButtonCommander";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Menu = ({ }) => {
  const [prix, setPrix] = useState("0,00");
  

  return (
    <div className="flex flex-col items-center">
      <NavCategorie />
      <Outlet />
      <ButtonCommander prix={prix} destination={"/menu/panier"} bg={"beige"} />
    </div>
  );
};
export default Menu;
