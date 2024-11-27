import Check from "../assets/svg/Check";
import OfficeClean from "../assets/svg/OfficeClean";
import { topQuality, bottomQuality } from "../Constants";

const Quality = () => {
  return (
    <div className="container bg-color-3 md:bg-transparent">
      <div className="wrapper py-[2.5rem] md:p-0">
        <div className="bg-color-3 rounded-[1.5rem] md:p-[2rem]">
          <div className="flex flex-col gap-[2rem]">
            <OfficeClean />
            <h3 className="text-[2rem] leading-[2.3rem] font-light text-color-1 tracking-[-0.01rem] mb-[2.5rem]">
              Soluciones{" "}
              <span className="text-color-2 italic font-a">eficientes</span> e{" "}
              <span className="text-color-2 italic font-a">innovadoras</span>{" "}
              para tu negocio
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 lg:flex-row">
              {topQuality.map((i) => (
                <div
                  key={i.title}
                  className="flex flex-col flex-1 gap-[0.40rem]"
                >
                  <div className="flex items-center gap-2">
                    <Check />
                    <h6 className="font-bold text-color-1 xs:text-[1.1rem] sm:text-[1.2rem]">
                      {i.title}
                    </h6>
                  </div>
                  <p className="text-color-1 font-medium sm:text-[1.010rem]">
                    {i.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              {bottomQuality.map((i) => (
                <div
                  key={i.title}
                  className="flex flex-col flex-1 gap-[0.40rem]"
                >
                  <div className="flex items-center gap-2">
                    <Check />
                    <h6 className="font-bold text-color-1 xs:text-[1.1rem] sm:text-[1.2rem]">
                      {i.title}
                    </h6>
                  </div>
                  <p className="text-color-1 font-medium sm:text-[1.010rem]">
                    {i.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
