import { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/information", label: "Information" },
  { to: "/annual-tournament", label: "Annual Tournament" },
  { to: "/women", label: "Women" },
];

const desktopLinkClass = ({ isActive }) =>
  [
    "text-sm font-medium transition-colors",
    isActive ? "text-ink font-semibold" : "text-body hover:text-ink",
  ].join(" ");

const mobileLinkClass = ({ isActive }) =>
  [
    "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
    isActive
      ? "bg-surface-tint text-ink font-semibold"
      : "text-body hover:bg-surface-tint hover:text-ink",
  ].join(" ");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur">
      <nav
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8"
        aria-label="Primary navigation"
      >
        <NavLink to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Fleet of Foot"
            className="h-8 w-auto md:h-10"
          />
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={desktopLinkClass}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>

        <ul
          id={menuId}
          className={`absolute right-5 top-[calc(100%+8px)] z-50 w-[min(320px,calc(100vw-40px))] gap-1 rounded-xl border border-border bg-surface p-2 shadow-card md:hidden ${
            isOpen ? "flex flex-col" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={mobileLinkClass}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
