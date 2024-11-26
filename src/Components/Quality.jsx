import Check from "../assets/svg/Check";
import OfficeClean from "../assets/svg/OfficeClean";
import { leftQuality, rightQuality } from "../Constants";

const Quality = () => {
  return (
    <div className="max-w-[91.75rem] mx-auto px-[1.25rem] py-[3rem] md:py-[1rem] bg-color-3 md:bg-transparent md:px-10 xl:px-12">
      <div className="bg-color-3 rounded-[1.5rem] md:p-[2rem]">
        <div className="flex flex-col gap-[2rem]">
          <OfficeClean />
          <h3 className="text-[2rem] leading-[2.3rem] font-light text-color-1 tracking-[-0.01rem] mb-[2.5rem]">
            Soluciones{" "}
            <span className="text-color-2 italic font-a">eficientes</span> e{" "}
            <span className="text-color-2 italic font-a">innovadoras</span> para
            tu negocio
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex flex-col md:flex-[1] gap-7">
            {leftQuality.map((i) => (
              <div key={i.title} className="flex flex-col md:flex-[1] gap-2">
                <h6 className="flex items-center gap-2 font-bold text-color-1 text-[1.13rem]">
                  <Check />
                  {i.title}
                </h6>
                <p className="text-color-1 font-medium leading-[1.3rem]">
                  {i.content}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-[1] gap-7">
            {rightQuality.map((i) => (
              <div key={i.title} className="flex flex-col md:flex-[1] gap-2">
                <h6 className="flex items-center gap-2 font-bold text-color-1 text-[1.13rem]">
                  <Check />
                  {i.title}
                </h6>
                <p className="text-color-1 font-medium leading-[1.3rem]">
                  {i.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
