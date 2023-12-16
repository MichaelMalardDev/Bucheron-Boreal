import ButtonItem from "./ButtonItem";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";





const ItemPc = ({ name, price, nb, image, imageBg, itemId, categorie }) => {

    const styleSection = {
        background: `url(/src/assets/img/JPG/${imageBg} ) no-repeat center center`,
        backgroundSize: "cover",
    }


    return (

        <Link to={`/menu/${categorie}/${itemId}`} className='animate__animated animate__fadeInLeft  relative flex'>
            <section
                className={"z-20 item-menu h-64 w-56 flex flex-col items-center justify-center"}
                style={styleSection}
            >
                <img
                    className='absolute -top-14 w-24'
                    src={`/src/assets/img/PNG/${image}`}
                    alt={name}
                />
                <h3
                    className='text-white font-generalsans text-xl text-center w-10/12'>
                    {name}
                </h3>

                <div className="absolute right-5 bottom-2 flex gap-3">
                    {nb != null && <p className=' text-white font-generalsans font-normal'>{nb}x</p>}
                    <p className=' text-white font-generalsans font-normal'>
                        {price + "$"}
                    </p>
                </div>
            </section>

        </Link>

    );
};
export default ItemPc;
