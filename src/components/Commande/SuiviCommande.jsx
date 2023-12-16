import PointSuivi from "./PointSuivi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SuiviCommande = ({ etape, cl }) => {
  const [bgColor1, setBgColor1] = useState(null);
  const [bgColor2, setBgColor2] = useState(null);
  const [bgColor3, setBgColor3] = useState(null);

  const handlePointClick = (clickedEtape) => {
    cl(clickedEtape);
  };


  const colors = [null, null, null];

  useEffect(() => {
    colors[etape - 1] = "beige";
    setBgColor1(colors[0]);
    setBgColor2(colors[1]);
    setBgColor3(colors[2]);
  }, [etape]);

  return (
    <div className='flex justify-around items-center w-3/4'>
      <span>
        <PointSuivi
          nb={1}
          bgColor={bgColor1}
          clicFn={() => handlePointClick(1)}
          delay={0.1}
        />
      </span>
      <hr className='border border-black w-1/6' />
      <PointSuivi
        nb={2}
        bgColor={bgColor2}
        clicFn={() => handlePointClick(2)}
        delay={0.2}
      />
      <hr className='border border-black w-1/6' />
      <PointSuivi
        nb={3}
        bgColor={bgColor3}
        clicFn={() => handlePointClick(3)}
        delay={0.3}
      />
    </div>
  );
};

export default SuiviCommande;
