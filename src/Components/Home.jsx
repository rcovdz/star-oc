import { bottomHome, leftHome, rightHome } from "../Constants";
import HeroImg from "./HeroImg";
import WhiteStar from "../assets/svg/WhiteStar";

const Home = () => {
  return (
    <section
      id="home"
      className="max-w-[91.75rem] mx-auto px-[1.25rem] pt-[5.39rem] xs:pt-[5.455rem] sm:pt-[5.453rem] md:pt-[5.781rem] md:px-10 lg:pt-[7.031rem] xl:pt-[7.531rem] xl:px-12"
    >
      <div className="main_wrapper flex flex-col gap-3">
        <div className="bg-gradient-to-tl from-sky-600 to-color-3 px-[1rem] py-[2rem] rounded-[1.5rem] flex flex-col items-center justify-center gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem]">
          <h1 className="text-[1.92rem] text-color-1 text-center leading-[2.3rem] font-bold font-a sm:max-w-[34rem] sm:tracking-[0.1rem] md:text-[3rem] md:max-w-[40rem] md:leading-[3rem] md:tracking-[0.2rem] lg:text-[4rem] lg:leading-[4rem] lg:max-w-[50rem]">
            Calidad única en todos nuestros{" "}
            <span className="italic text-color-2">suministros</span> y{" "}
            <span className="italic text-color-2">servicios</span>
          </h1>
          <a
            href="#about"
            className="xs:hidden bg-color-1 rounded-[0.5rem] font-bold text-color-3 self-center text-[1.25rem] px-[1rem] py-[0.6rem]"
          >
            Conócenos
          </a>
          <HeroImg />
        </div>
        <div className="hidden lg:flex lg:gap-3">
          <div className="w-full flex gap-3">
            <div className="flex-1 flex flex-col gap-3">
              {leftHome.map((i) => (
                <div
                  key={i.button}
                  className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] bg-color-1 flex flex-col items-center justify-center p-3 gap-4 h-[13rem]"
                >
                  {i.svg}
                  <h2 className="text-center text-balance leading-[1.3rem] text-[1.2rem] text-color-3 font-semibold xl:text-[1.24rem] xl:leading-[1.3rem]">
                    {i.content}
                  </h2>
                  <a
                    href={i.to}
                    className="bg-gradient-to-br from-sky-600 to-color-3 text-color-1 font-semibold p-2 text-[1.2rem] rounded-[0.5rem]"
                  >
                    {i.button}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-color-2 rounded-[1.5rem] shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] flex items-center justify-center">
              <WhiteStar />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              {rightHome.map((i) => (
                <div
                  key={i.button}
                  className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] bg-color-1 flex flex-col items-center justify-center p-3 gap-4 h-[13rem]"
                >
                  {i.svg}
                  <h2 className="text-center text-balance leading-[1.3rem] text-[1.2rem] text-color-3 font-semibold xl:text-[1.24rem] xl:leading-[1.3rem]">
                    {i.content}
                  </h2>
                  <a
                    target={i.target}
                    href={i.to}
                    className="bg-gradient-to-br from-sky-600 to-color-3 text-color-1 font-semibold p-2 text-[1.2rem] rounded-[0.5rem]"
                  >
                    {i.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col gap-3 lg:hidden">
          <div className="hidden xs:flex rounded-[1.5rem] shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] bg-color-1 flex-1 flex-col items-center justify-center gap-[1.5rem] py-[1.5rem] px-[1rem] lg:flex-[1]">
            <h2 className="text-center font-bold text-color-3 text-[1.5rem] max-w-[20rem] leading-[1.7rem] tracking-[0.05rem] sm:tracking-[0.08rem] sm:max-w-[32rem] sm:leading-[2rem] sm:text-[1.8rem] md:text-[2rem] md:max-w-[40rem]">
              Líderes en la industria con más de 15 años de experiencia
            </h2>
            <a
              href="#about"
              className="bg-gradient-to-br from-sky-600 to-color-3 text-color-1 font-semibold p-2 text-[1.2rem] rounded-[0.5rem] md:text-[1.5rem] md:p-3"
            >
              Conócenos
            </a>
          </div>
          <div className="flex gap-3">
            {bottomHome.map((i) => (
              <a
                key={i.id}
                href={i.to}
                className="flex-1 flex items-center justify-center flex-col gap-[1rem] py-[1rem] rounded-[1.5rem] shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] bg-color-1"
              >
                {i.svg}
                <h2 className="text-color-3 text-center font-semibold leading-[1rem] max-w-[10rem] md:text-[1.5rem] md:max-w-[13rem] md:leading-[1.5rem]">
                  {i.content}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;