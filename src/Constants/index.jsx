import wiese from "../assets/img/wiese.png";
import elite from "../assets/img/elite.png";
import purell from "../assets/img/purell.png";
import kimberly from "../assets/img/kimberly.png";
import oval from "../assets/img/oval.png";
import eckos from "../assets/img/eckos.png";
import InfoIcon from "../assets/svg/InfoIcon";
import ProductsIcon from "../assets/svg/ProductsIcon";
import TestIcon from "../assets/svg/TestIcon";
import WhatsappIcon from "../assets/svg/WhatsappIcon";

export const navigation = [
  { to: "#home", title: "INICIO" },
  { to: "#about", title: "NOSOTOS" },
  { to: "#products", title: "KIT'S" },
  { to: "#contact", title: "CONTACTO" },
];

export const heroImg = [
  {
    id: "1",
    src: wiese,
    width: 70,
    height: 41,
    alt: "wiese logo",
    class: "md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem]",
  },
  {
    id: "2",
    src: elite,
    width: 70,
    height: 41,
    alt: "elite logo",
    class: "md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem]",
  },
  {
    id: "3",
    src: purell,
    width: 70,
    height: 32,
    alt: "purell logo",
    class: "md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem]",
  },
  {
    id: "4",
    src: kimberly,
    width: 70,
    height: 29,
    alt: "wiese logo",
    class: "md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem]",
  },
  {
    id: "5",
    src: eckos,
    width: 70,
    height: 21,
    alt: "wiese logo",
    class: "hidden lg:flex lg:w-[5.5rem] xl:w-[6rem]",
  },
  {
    id: "6",
    src: oval,
    width: 70,
    height: 41,
    alt: "oval logo",
    class: "hidden xl:flex xl:w-[6rem]",
  },
];

export const leftHome = [
  {
    svg: <InfoIcon />,
    content: "Líderes en la industria con más de 15 años de experiencia",
    to: "#about",
    button: "Conócenos",
  },
  {
    svg: <ProductsIcon />,
    content: "Descubre nuestros productos y kit's ideales para tu negocio",
    to: "#products",
    button: "Productos",
  },
];

export const rightHome = [
  {
    svg: <TestIcon />,
    content:
      "Averigua porque somos tu mejor opción y prueba nuestros servicios",
    to: "#test",
    button: "Pruebanos",
  },
  {
    svg: <WhatsappIcon />,
    content: "¿Dudas? Enivanos un mensaje y conoce más acerca de nosotros",
    to: "https://wa.me/7299738089?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20acerca%20de%20sus%20productos%20y%20servicios.%20%3A%29",
    target: "_blank",
    button: "Whatsapp",
  },
];

export const bottomHome = [
  {
    id: "Products",
    svg: <ProductsIcon />,
    content: "Explora nuestros productos",
    to: "#products",
  },
  {
    id: "Test",
    svg: <TestIcon />,
    content: "Prueba nuestros servicios",
    to: "#test",
  },
];

export const topQuality = [
  {
    title: "Eficaz",
    content:
      "Nuestros productos y servicios están diseñados a medida para resolver problemas de manera instantanea.",
  },
  {
    title: "Impecable",
    content:
      "Superamos los estándares más altos de calidad e higiene para garantizar ambientes limpios y seguros.",
  },
];

export const bottomQuality = [
  {
    title: "Premium",
    content:
      "Con tecnologías de vanguardia y materiales premium, garantizamos resultados superiores que impulsarán tu negocio.",
  },
  {
    title: "Garantizado",
    content:
      "Nuestra promesa es brindarte la mejor experiencia en cada interacción con calidad superior y satisfacción plena.",
  },
];
