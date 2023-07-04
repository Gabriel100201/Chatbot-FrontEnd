export const Navbar = () => {
  return (
    <nav className="bg-primary hover:bg-slate-800 transition-all h-16 shadow">

      <ul className="flex h-full text-white w-full justify-center gap-5 items-center">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/servicios">Servicios</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};


