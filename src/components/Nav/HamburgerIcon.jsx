import { useState } from "react";
import "./HamburgerIcon.css";
import { motion } from "framer-motion";

const HamburgerIcon = ({ isChecked }) => {
  const bar4Variants = {
    checked: {
      rotate: 45,
      transition: {
        duration: 0.5,
      },
    },
    unchecked: {
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const bar6Variants = {
    checked: {
      rotate: -45,
      transition: {
        duration: 0.5,
      },
    },
    unchecked: {
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <input
        onClick={(e) => e.stopPropagation()}
        id="checkbox2"
        type="checkbox"
        checked={isChecked}
      />
      <label className="toggle toggle2 h-10" htmlFor="checkbox2">
        <motion.div
          id="bar4"
          className="bars"
          initial={false}
          variants={bar4Variants}
          animate={isChecked ? "checked" : "unchecked"}
        ></motion.div>
        <motion.div
          id="bar5"
          className="bars"
          initial={false}
          animate={{
            scaleX: isChecked ? 0 : 1,
            transition: { duration: 0.5 },
          }}
        ></motion.div>
        <motion.div
          id="bar6"
          className="bars"
          initial={false}
          variants={bar6Variants}
          animate={isChecked ? "checked" : "unchecked"}
        ></motion.div>
      </label>
    </>
  );
};

export default HamburgerIcon;
