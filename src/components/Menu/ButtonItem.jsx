import { Link } from "react-router-dom";

const ButtonItem = ({ buttontype, categorie, itemId }) => {

  const lien = buttontype === "detail" ? true : false;

  let couleur;
  let image;
  let alt;

  if (buttontype === "detail") {
    couleur = "bg-perso-beige";
    image = "/src/assets/img/SVG/fleche.svg";
    alt = "plus-detail";
  }
  else if (buttontype === "supprimer") {
    couleur = "bg-perso-rouge";
    image = "/src/assets/img/SVG/remove.svg";
    alt = "remove-panier";
  }
  else {
    couleur = "bg-perso-vert";
    image = "/src/assets/img/SVG/plus.svg";
    alt = "ajout-panier";
  }

  return (
    <>
      {lien && (
        <Link
          to={`/menu/${categorie}/${itemId}`}
          className={
            couleur + " flex items-center justify-center w-full h-8 rounded-full"
          }>
          <img
            src={image}
            alt={alt}
          />
        </Link>
      )}
      {!lien && (
        <div className={couleur + " flex items-center justify-center w-full h-8 rounded-full"}>
          <img
            src={image}
            alt={alt}
          />
        </div>

      )}
    </>
  );
};
export default ButtonItem;
