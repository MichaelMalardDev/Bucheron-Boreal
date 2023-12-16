import { Link } from "react-router-dom";

const OverBouton = ({bg, texte, clicFn, destination}) => {
    return(
        <>
            <Link to={destination} onClick={clicFn} className={`bg-perso-${bg} flex items-center justify-center text-white font-generalsans w-full py-3 rounded-lg`} >{texte}</Link>
        </>
    );
}
export default OverBouton;