"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ showLogo = false }: { showLogo?: boolean }) {
  const pathname = usePathname();
  const [light, setLight] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
{showLogo && (
  <Link href="/" aria-label="Home" className="logo-img">
    <img src="/mylogo.png" alt="JRE" style={{ height: "44px", width: "auto" }} />
  </Link>
)}

      <a href="https://wa.me/2348055934852" target="_blank" rel="noopener noreferrer" className="talk-btn">
  Let&apos;s Talk
</a>

      <nav className="bottom-nav" aria-label="Main navigation">
        {[
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
          { href: "/archive", label: "Archive" },
          { href: "/about", label: "About" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
          >
            {label}
          </Link>
        ))}

        <button
          onClick={() => setLight(!light)}
          className="toggle"
          aria-label="Toggle theme"
          title={light ? "Switch to dark" : "Switch to light"}
        >
         {light ? (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="2" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
) : (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)}
        </button>
      </nav>

      <div className="country">Abuja, NG</div>
      <div className="clock">{time} WAT</div>
    </>
  );
}