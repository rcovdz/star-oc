import { motion } from "framer-motion";

const HamburgerButton = ({ toggleNavigation, open }) => {
  const topVariants = {
    closed: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
      },
    },
    opened: {
      x: 0,
      y: -1,
      opacity: 1,
      rotate: 45,
      transition: {
        delay: 0,
        duration: 0.2,
      },
    },
  };

  const centerVariants = {
    closed: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
      },
    },
    opened: {
      opacity: 0,
      x: 0,
      transition: {
        delay: 0,
        duration: 0,
      },
    },
  };

  const bottomVariants = {
    closed: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
      },
    },
    opened: {
      x: 0,
      y: 1,
      opacity: 1,
      rotate: -45,
      transition: {
        delay: 0,
        duration: 0.2,
      },
    },
  };

  return (
    <button
      className="w-10 flex flex-col justify-center items-end gap-[0.4rem] z-50 relative"
      onClick={toggleNavigation}
      aria-expanded={open ? "true" : "false"}
      aria-label="Toggle navigation menu"
    >
      <motion.div
        variants={topVariants}
        animate={open ? "opened" : "closed"}
        className="w-8 h-1 bg-color-3 rounded origin-left"
      ></motion.div>
      <motion.div
        variants={centerVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-color-3 rounded"
      ></motion.div>
      <motion.div
        variants={bottomVariants}
        animate={open ? "opened" : "closed"}
        className="w-8 h-1 bg-color-3 rounded origin-left"
      ></motion.div>
    </button>
  );
};

export default HamburgerButton;
