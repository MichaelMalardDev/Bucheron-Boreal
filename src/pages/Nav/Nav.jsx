import "./Nav.css";
import NavHeader from "../../components/Nav/NavHeader";
import NavFull from "../../components/Nav/NavFull";
import { useState } from "react";


const navLinks = [
  { title: "Accueil", path: "/" },
  { title: "Menu", path: "/menu" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <NavHeader clicFn={toggleMenu} open={open} />

      <NavFull
        clickFn={toggleMenu}
        open={open}
        navLinks={navLinks}
      />
    </>
  );
};
export default Nav;
