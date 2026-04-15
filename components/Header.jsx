const Header = () => {
  return (
    <header className="fixed left-0 w-full bg-black flex flex-col items-center justify-center h-24 border-b border-neutral-800 z-100">
      <div className="font--heading text-[1.6rem] font-semibold uppercase">
        Muhammed Aslam
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
