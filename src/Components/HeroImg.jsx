import { picture } from "framer-motion/client";
import { heroImg } from "../constants";

const HeroImg = () => {
  return (
    <div className="hidden sm:flex items-center gap-[1.5rem]">
      <span className="font-semibold text-color-1 leading-[1rem] text-right hidden md:flex lg:text-[1.1rem] lg:leading-[1rem] xl:text-[1.3rem] xl:leading-[1.1rem]">
        Trabajamos <br /> con:
      </span>
      {heroImg.map((i) => (
        <picture key={i.id}>
          <img
            src={i.src}
            alt={i.alt}
            width={i.width}
            height={i.height}
            className={i.class}
          />
        </picture>
      ))}
    </div>
  );
};

export default HeroImg;
