import { Link } from "react-router-dom";

const ButtonCommander = ({ prix, destination, bg, clicFn }) => {
    return (

        <Link onClick={clicFn} to={destination} className={`animate__animated animate__fadeInUp flex z-20 flex-row justify-between w-10/12 px-6 py-4 rounded-xl bg-perso-${bg} fixed bottom-9 shadow-md`}>
            <span className="text-white font-generalsans text-lg">Commander</span>
            <span className="text-white font-generalsans text-lg">{prix + "$"}</span>
        </Link>

    );
}
export default ButtonCommander;