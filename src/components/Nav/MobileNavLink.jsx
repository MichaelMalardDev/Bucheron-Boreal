import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moblieNavVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, path, clicFn }) => {
  return (
    <motion.div
      variants={moblieNavVars}
      className='text-5xl uppercase text-black relative'>
      <Link
        onClick={clicFn}
        to={path}>
        {title}
      </Link>
    </motion.div>
  );
};

export default MobileNavLink;
