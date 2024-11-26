import { heroImg } from "../Constants";

const HeroImg = () => {
  return (
    <div className="hidden sm:flex items-center gap-[1.5rem]">
      <span className="font-semibold text-color-1 leading-[1rem] text-right hidden md:flex lg:text-[1.3rem] lg:leading-[1.2rem]">
        Trabajamos <br /> con:
      </span>
      {heroImg.map((i) => (
        <img
          key={i.id}
          src={i.src}
          width={i.width}
          height={i.height}
          alt={i.alt}
          className={i.class}
        />
      ))}
    </div>
  );
};

export default HeroImg;
