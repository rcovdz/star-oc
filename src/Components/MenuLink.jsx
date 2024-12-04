const MenuLink = ({ link }) => {
  return (
    <a
      className="text-color-3 font-bold text-[1.1rem] p-1 hover:bg-color-3 hover:rounded hover:text-color-1 lg:text-[1.20rem] xl:text-[1.25rem]"
      href={link.to}
      aria-label={`Link to ${link.title}`}
    >
      {link.title}
    </a>
  );
};

export default MenuLink;
