import { useState } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Logo from "../assets/svg/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavigation = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  };

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

  const listVariants = {
    closed: {
      x: "100dvw",
      transition: {
        ease: easeOut,
        duration: 0.3,
      },
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: easeIn,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: 100,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full fixed top-0 bg-color-1">
      <div className="max-w-[91.75rem] mx-auto px-5 my-[1rem] h-full flex items-center justify-between md:px-10 xl:px-12">
        <div>
          <a href="#home" aria-label="Link to homepage">
            <Logo />
          </a>
        </div>
        <nav className="hidden md:flex md:justify-end md:gap-5 lg:gap-7 xl:gap-8">
          {navigation.map((link) => (
            <div key={link.title}>
              <a
                className="text-color-3 font-bold text-[1.1rem] p-1 hover:bg-color-3 hover:rounded hover:text-color-1 lg:text-[1.20rem] xl:text-[1.25rem]"
                href={link.to}
                aria-label={`Link to ${link.title}`}
              >
                {link.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="md:hidden">
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
          <AnimatePresence>
            {open && (
              <motion.nav
                variants={listVariants}
                initial="closed"
                animate="opened"
                exit="closed"
                className="absolute top-0 left-0 w-dvw h-dvh flex flex-col items-center justify-center gap-[3rem] text-4xl bg-color-1 font-bold text-color-3 xs:gap-[4rem] sm:gap-[2rem]"
              >
                {navigation.map((link) => (
                  <motion.div variants={listItemVariants} key={link.title}>
                    <a
                      className="hover:bg-color-3 hover:rounded hover:text-color-1 p-1"
                      href={link.to}
                      onClick={toggleNavigation}
                      aria-label={`Link to ${link.title}`}
                    >
                      {link.title}
                    </a>
                  </motion.div>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
