import { bottomHome, leftHome, rightHome } from "../constants";
import HeroImg from "../components/HeroImg";
import WhiteStar from "../assets/svg/WhiteStar";

const Home = () => {
  return (
    <section id="home" className="main_container">
      <div className="main_wrapper">
        <div className="bg-gradient-to-t from-sky-600 to-color-3 px-[1rem] py-[2rem] rounded-[1.5rem] flex flex-col items-center justify-center gap-[1.5rem] sm:gap-[2rem] lg:gap-[2.5rem]">
          <h1 className="text-[1.92rem] text-color-1 text-center leading-[2.3rem] font-bold font-a sm:max-w-[34rem] sm:tracking-[0.1rem] md:text-[3rem] md:max-w-[40rem] md:leading-[3rem] md:tracking-[0.2rem] lg:text-[3.5rem] lg:leading-[3.3rem] lg:max-w-[50rem] xl:text-[4rem] xl:leading-[4rem] xl:max-w-[67.6rem]">
            Calidad única en todos nuestros{" "}
            <span className="bg-gradient-to-br from-color-2 to-color-1 bg-clip-text text-transparent">
              suministros
            </span>{" "}
            y{" "}
            <span className="bg-gradient-to-br from-color-2 to-color-1 bg-clip-text text-transparent">
              servicios
            </span>
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
                  <h2 className="text-center leading-[1.3rem] text-[1.2rem] text-color-3 font-semibold lg:max-w-[16.5rem] xl:text-[1.24rem] xl:leading-[1.3rem] xl:text-balance xl:max-w-[20rem]">
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
                  <h2 className="text-center text-balance leading-[1.3rem] text-[1.2rem] text-color-3 font-semibold lg:max-w-[16.5rem] xl:text-[1.24rem] xl:leading-[1.3rem] xl:max-w-[22.5rem]">
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
              className="bg-gradient-to-br from-sky-600 to-color-3 text-color-1 font-semibold p-2 text-[1.2rem] rounded-[0.5rem] md:text-[1.3rem] md:p-3"
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
                <h2 className="text-color-3 text-center font-semibold leading-[1rem] max-w-[10rem] md:text-[1.4rem] md:max-w-[13rem] md:leading-[1.4rem]">
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
