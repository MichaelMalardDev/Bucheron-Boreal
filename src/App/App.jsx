import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import 'animate.css';

import Layout from "./Layout";
import Authentification from "../pages/Authentification/Authentification";
import Connexion from "../components/Authentification/Connexion";
import Inscription from "../components/Authentification/Inscription";
import Panier from "../pages/Panier/Panier";
import Commande from "../pages/Commande/Commande";
import Menu from "../pages/Menu/Menu";
import Entrees from "../pages/Menu/Plats/Entrees";
import Repas from "../pages/Menu/Plats/Repas";
import Desserts from "../pages/Menu/Plats/Desserts";
import Boissons from "../pages/Menu/Plats/Boissons";
import DetailItem from "../pages/Menu/DetailItem";
import CommandeInformations from "../components/Commande/CommandeInformations";
import CommandeChoixPaiement from "../components/Commande/CommandeChoixPaiement";
import CommandePaiement from "../components/Commande/CommandePaiement";
import Facture from "../pages/Facture/Facture";
import items from "../data/items.json";
import panier from "../data/panier.json";

import "./App.css";

const App = () => {
  const routes = [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Navigate
              to='authentification'
            />
          ),
        },
        {
          path: "authentification",
          element: <Authentification />,
          children: [
            {
              index: true,
              element: <Navigate to='connexion' />,
            },
            {
              path: "connexion",
              element: <Connexion />,
            },
            {
              path: "inscription",
              element: <Inscription />,
            },
          ],
        },
        {
          path: "menu",
          element: <Menu />,
          children: [
            {
              index: true,
              element: <Navigate to='entrees' />,
            },
            {
              path: "entrees",
              element: <Entrees entrees={items[0]} />,
            },
            {
              path: "repas",
              element: <Repas repas={items[1]} />,
            },
            {
              path: "desserts",
              element: <Desserts desserts={items[2]} />,
            },
            {
              path: "boissons",
              element: <Boissons boissons={items[3]} />,
            },
          ],
        },
      ],
    },
    {
      path: "menu/:categorie/:itemId",
      element: <DetailItem />,
    },
    {
      path: "menu/panier",
      element: <Panier panier={panier} />,
    },
    {
      path: "commande",
      element: <Commande />,
      children: [
        {
          index: true,
          element: <Navigate to='informations' />,
        },
        {
          path: "informations",
          element: <CommandeInformations />,
        },
        {
          path: "choix-paiement",
          element: <CommandeChoixPaiement />,
        },
        {
          path: "paiement",
          element: <CommandePaiement />,
        },
      ],
    },
    {
      path: "facture",
      element: <Facture commande={panier} />,
      children: [
        {
          
        }
      ]
    },
    {
      path: "*",
      element: (
        <Navigate
          to='/menu'
          replace
        />
      ),
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
