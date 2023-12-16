import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav/Nav";

import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname.includes("authentification") ? false : <Nav />}

      {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
