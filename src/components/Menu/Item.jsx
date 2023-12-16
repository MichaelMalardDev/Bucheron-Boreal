import ButtonItem from "./ButtonItem";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const vars = {
  initial: {
    width: "100%",
  },
  hover: {
    width: "90%",
  },
  clicked: {
    width: "80%",
  },
};



const Item = ({ buttonTypes, name, price, nb, image, imageBg, itemId, categorie }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);

  const styleSection = {
    background: `url(/src/assets/img/JPG/${imageBg} ) no-repeat center center`,
    backgroundSize: "cover",
  }


  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {

    if (firstVisit) {
      controls.start({
        width: ["100%", "85%", "100%", "85%", "100%"],
        transition: {
          duration: .8,
          delay: 2,
        }
      });
      controls3.start({
        translateX: [-50, 0],
      });
    }

    setFirstVisit(false);
  }), [controls, firstVisit, controls3];


  const handleClick = () => {
    setIsClicked(!isClicked)

    if (!isClicked) {
      controls.start({
        width: "80%",
      });
      controls2.start({
        width: "90%",

      });
      controls3.start({
        translateX: 0,
        transition: {
          ease: "anticipate",
        }
      })
    }
    else {
      controls.start({
        width: "100%",
      });
      controls2.start({
        width: "95%",
      });
      controls3.start({
        translateX: -50,
      })
    }

  };


  return (

    <section className='animate__animated animate__fadeInLeft w-full relative flex'>

      <motion.section
        onClick={handleClick}
        variants={vars}
        initial={{ width: "100%" }}
        animate={controls}
        className={"z-20 item-menu"}
        style={styleSection}

      >
        <img
          className='img-item'
          src={`/src/assets/img/PNG/${image}`}
          alt={name}
        />
        <motion.h3
          initial={{ width: "85%" }}
          animate={controls2}
          transition={{ ease: "anticipate" }}
          className='pl-20  text-white font-generalsans text-xl '>
          {name}
        </motion.h3>

        <div className="absolute right-5 bottom-2 flex gap-3">
          {nb != null && <p className=' text-white font-generalsans font-normal'>{nb}x</p>}
          <p className=' text-white font-generalsans font-normal'>
            {price + "$"}
          </p>
        </div>
      </motion.section>
      <div className='absolute z-10 flex items-center justify-end rounded-r-3xl right-0 w-1/2 h-full bg-perso-vertFonce'>
        <div className=' flex mr-5 justify-center flex-col gap-3 h-4/5 w-8'>
          {buttonTypes.map((buttontype, key) => (
            <motion.span key={key} animate={controls3} initial={{ translateX: -50 }}>

              <ButtonItem
                buttontype={buttontype}
                itemId={itemId}
                categorie={categorie}
                key={key}
              />
            </motion.span>
          ))}
        </div>
      </div>

    </section>

  );
};
export default Item;
