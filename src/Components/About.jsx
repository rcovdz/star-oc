const About = () => {
  return (
    <section id="about" className="container scroll-pt-[40rem]">
      <div className="wrapper flex flex-col gap-3">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] p-4 flex flex-col gap-2 lg:flex-1">
            <h4 className="text-[1.2rem] text-center font-bold">
              ¡Bienvenido a Star Office / Clean!
            </h4>
            <p className="text-center text-balance">
              Somos una empresa 100% mexicana con más de 15 años de experiencia
              ofreciendo soluciones integrales en limpieza, sistemas de control
              de olores, equipos de oficina y suministros sanitarios. Nos
              enorgullece servir a diversos sectores, desde industrias y
              comercios hasta hoteles e instituciones.
            </p>
          </div>
          <div className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] p-4 flex flex-col gap-2 lg:flex-1">
            <h3 className="text-[1.2rem] text-center font-bold">
              ¿Quiénes Somos?
            </h3>
            <p className="text-center text-balance">
              En Star Office/Clean, nos apasiona brindar entornos impecables y
              eficientes. Nuestro equipo de expertos se dedica a ofrecer
              soluciones que superen las expectativas de nuestros clientes. Con
              productos de limpieza de primera calidad, sistemas avanzados de
              control de olores y suministros para optimizar su negocio, estamos
              aquí para impulsar su crecimiento.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] p-4 flex flex-col gap-2 lg:flex-1">
            <h3 className="text-[1.2rem] text-center font-bold">Misión</h3>
            <p className="text-center text-balance">
              Nos aliamos con nuestros clientes, comprendiendo sus metas y
              necesidades específicas, para brindarles ambientes limpios,
              seguros y eficientes, mediante soluciones de limpieza, control de
              olores y suministros de alta calidad.
            </p>
          </div>
          <div className="shadow-[0px_0px_21px_8px_rgba(0,_0,_0,_0.2)] rounded-[1.5rem] p-4 flex flex-col gap-2 lg:flex-1">
            <h3 className="text-[1.2rem] text-center font-bold">Visión</h3>
            <p className="text-center text-balance">
              Aspiramos a consolidarnos como la opción preferida en nuestra
              región, destacándonos por la calidad de nuestros productos y
              servicios, y por fomentar un ambiente de trabajo que inspire el
              crecimiento personal y profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
