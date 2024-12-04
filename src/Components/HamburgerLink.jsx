const HamburgerLink = ({ link, toggleNavigation }) => {
  return (
    <a
      className="hover:bg-color-3 hover:rounded hover:text-color-1 p-1"
      href={link.to}
      onClick={toggleNavigation}
      aria-label={`Link to ${link.title}`}
    >
      {link.title}
    </a>
  );
};

export default HamburgerLink;
