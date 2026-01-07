import { useMemo, useState } from "react";

export default function Navbar({ onNav, active }) {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { id: "how", label: "How It Works?" },
      { id: "features", label: "Features" },
      { id: "contact", label: "Buy Now", primary: true },
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
          <img src="/drive-logo.png" alt="D.R.I.V.E." className="navLogo" onError={(e)=>{e.currentTarget.style.display='none'}} />
        </div>

        <nav className="navLinks">
          {items.map((it) => (
            <button
              key={it.id}
              className={`navBtn ${it.primary ? "navPrimary" : ""} ${active === it.id ? "navActive" : ""}`}
              onClick={() => clickItem(it.id)}
            >
              {it.primary && <span className="navIcon">✪</span>}
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
