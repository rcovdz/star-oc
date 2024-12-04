import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Logo from "../assets/svg/Logo";
import HamburgerLink from "./HamburgerLink";
import HamburgerButton from "./HamburgerButton";
import MenuLink from "./MenuLink";

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

  const listVariants = {
    closed: {
      x: "100dvw",
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeIn",
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
              <MenuLink link={link} />
            </div>
          ))}
        </nav>
        <div className="md:hidden">
          <HamburgerButton toggleNavigation={toggleNavigation} open={open} />
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
                    <HamburgerLink
                      link={link}
                      toggleNavigation={toggleNavigation}
                    />
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
