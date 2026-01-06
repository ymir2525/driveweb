import { useMemo, useState } from "react";

export default function Navbar({ onNav, active }) {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const clickItem = (id) => {
    onNav(id);
    setOpen(false);
  };

  return (
    <header className="navWrap">
      <div className="navInner container">
        <div className="brand" onClick={() => clickItem("home")} role="button" tabIndex={0}>
          D.R.I.V.E.
        </div>

        <nav className="navLinks">
          {items.map((it) => (
            <button
              key={it.id}
              className={`navBtn ${active === it.id ? "navActive" : ""}`}
              onClick={() => clickItem(it.id)}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <button
          className="burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobileMenu">
          {items.map((it) => (
            <button
              key={it.id}
              className={`mobileItem ${active === it.id ? "mobileActive" : ""}`}
              onClick={() => clickItem(it.id)}
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
