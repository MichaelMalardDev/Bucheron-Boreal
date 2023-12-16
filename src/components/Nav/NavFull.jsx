import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import MobileNavLink from "./MobileNavLink";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const moblieNavVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open2: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const NavFull = ({ open, clickFn, navLinks }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className='fixed origin-top left-0 top-0 w-full h-screen bg-yellow-400 text-black p-10 z-40'>
            <div className='flex h-full ml-4 flex-col-reverse'>
              <div className='overflow-hidden flex justify-between items-start flex-wrap flex-row-reverse'>
                <motion.h1
                  variants={moblieNavVars}
                  initial='initial'
                  animate='open2'
                  exit='initial'
                  className='text-lg text-black '>
                  Boréal
                </motion.h1>
                <motion.div
                  variants={moblieNavVars}
                  initial='initial'
                  animate='open2'
                  exit='initial'
                  className='text-black'>
                  <Link to='authentification' onClick={clickFn}>
                    <span className="text-4xl">
                      <BsFillPersonFill />
                    </span>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                variants={containerVars}
                initial='initial'
                animate='open'
                exit='initial'
                className='flex flex-col gap-8 mt-10 h-full justify-start items-start font-sans'>
                {navLinks.map((link, index) => {
                  return (
                    <div className='overflow-hidden'>
                      <MobileNavLink
                        title={link.title}
                        path={link.path}
                        clicFn={clickFn}
                        key={index}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default NavFull;
