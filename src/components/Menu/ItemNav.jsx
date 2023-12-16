import { Link } from "react-router-dom";


const ItemNav = ({ lien, delay, icon }) => {
    const capitalizedLien = lien.charAt(0).toUpperCase() + lien.slice(1);
    return (

        <li className={`animate__animated animate__fadeInDown animate__delay-${delay}s xl:h-full`}>
            <Link
                to={`/menu/${lien}`}
                className={`sous-menu ${location.pathname.includes(lien) ? "sous-menu-selected" : ""} xl:rounded-3xl xl:p-0 xl:h-full xl:flex flex-col xl:items-center xl:gap-2 xl:justify-center`}>
                    {icon}
                <h2 className="font-generalsans xl:text-lg">{capitalizedLien === "Entrees" ? "Entrées" : capitalizedLien}</h2>
            </Link>
        </li>

    );
}
export default ItemNav;