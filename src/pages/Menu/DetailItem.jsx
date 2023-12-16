import { useParams, Link } from "react-router-dom";
import items from "../../data/items.json";
import { IoMdAdd } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";


const DetailItem = ({ }) => {
    const { itemId, categorie } = useParams();
    const [isClicked, setIsClicked] = useState(false);
    const styleImgBg = {
        filter: "brightness(0.7)",
    }

    const styleDiv = {
        // borderRadius: "30px 30px 0 0",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        minHeight: "515px",

    }



    return (
        <div className="relative xl:flex xl:justify-end xl:w-sceen xl:h-screen">
            <div className="fixed top-0 left-0 w-full h-full bg-perso-vert"></div>
            <Link to={-1} className="z-10 fixed top-4 left-4 text-3xl text-white">
                <IoArrowBackSharp />
            </Link>
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay:0.5, duration:1.5  }} exit={{ opacity: 0 }} style={styleImgBg} className="imgBgDetail fixed top-0 left-0 object-cover w-full xl:h-screen h-2/4" src={`/src/assets/img/JPG/${items[categorie].plats[itemId].imageBg}`} alt="" />

            <div className="animate__animated animate__fadeInUp flex xl:w-1/2 xl:rounded-none xl:rounded-l-3xl mt-80 rounded-t-3xl xl:m-0 xl:my-20 relative items-center flex-col gap-9 bg-white px-10 py-16" style={styleDiv}>
                <img className="absolute xl:w-96 xl:-left-72 left-1/2 xl:top-10 -top-52 transform -translate-x-1/2 w-64" src={`/src/assets/img/PNG/${items[categorie].plats[itemId].image}`} alt="" />
                <div className="self-start">
                    <h1 className="font-generalsans text-2xl w-72">{items[categorie].plats[itemId].nom}</h1>
                    <p>{items[categorie].categorie == "Repas" ? items[categorie].categorie : items[categorie].categorie.slice(0, - 1)}</p>
                </div>
                <div className="self-start flex flex-col gap-3">
                    <h2 className="text-xl font-generalsans">Description</h2>
                    <p>{items[categorie].plats[itemId].description}</p>
                </div>
                <motion.div onClick={() => setIsClicked(!isClicked)} initial={{ width: 40 }} animate={{ width: isClicked ? 110 : 40 }} className="bg-perso-beige flex justify-center items-center gap-2 rounded-xl p-1 px-3 text-white fixed bottom-4 right-4">
                    <span className="text-3xl">
                        <IoMdAdd />
                    </span>

                    {isClicked && <motion.p initial={{ translateX: 100 }} animate={{ translateX: 0 }} exit={{ opacity: 0 }} transition={{ times: .5 }} className="text-xl font-generalsans">{items[categorie].plats[itemId].prix + "$"}</motion.p>}

                </motion.div>
            </div>


        </div>
    );
}
export default DetailItem;