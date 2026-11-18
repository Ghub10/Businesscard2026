import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import cardData from "./cardData.js";
import "./BusinessCard.css";

export default function BusinessCard({ data = cardData }) {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  // Hide the side you can't see from keyboard and screen readers.
  useEffect(() => {
    frontRef.current?.toggleAttribute("inert", flipped);
    backRef.current?.toggleAttribute("inert", !flipped);
  }, [flipped]);

  return (
    <main className="bc-page">
      <div className={`bc-flipper ${flipped ? "is-flipped" : ""}`}>
        {/* ---------- FRONT ---------- */}
        <section
          className="bc-face bc-front"
          aria-label="Business card, front"
          ref={frontRef}
        >
          <header className="bc-band bc-band--tall">
            <span className="bc-brand">{data.brand}</span>
          </header>

          <div className="bc-photo-wrap">
            <img className="bc-photo" src={data.photo} alt={data.name} />
          </div>

          <div className="bc-identity">
            <h1 className="bc-name">{data.name}</h1>
            <p className="bc-title">{data.title}</p>
            <p className="bc-location">
              <Icon name="pin" size={14} />
              {data.location}
            </p>

            <div className="bc-divider" aria-hidden="true" />

            <ul className="bc-skills" aria-label="Skills">
              {data.skills.map((skill) => (
                <li key={skill} className="bc-chip">
                  {skill}
                </li>
              ))}
            </ul>

            <p className="bc-cert">
              <Icon name="cap" size={16} />
              {data.certificate}
            </p>
          </div>

          <footer className="bc-actions">
            <a className="bc-primary" href={data.vcard} download>
              <Icon name="userPlus" size={20} strokeWidth={2} />
              Save contact
            </a>
            <button
              type="button"
              className="bc-flip"
              onClick={() => setFlipped(true)}
            >
              Tap to flip
              <Icon name="chevronRight" size={16} />
            </button>
          </footer>
        </section>

        {/* ---------- BACK ---------- */}
        <section
          className="bc-face bc-back"
          aria-label="Business card, back"
          ref={backRef}
        >
          <header className="bc-band bc-band--short">
            <span className="bc-brand">{data.brand}</span>
          </header>

          <div className="bc-back-body">
            <h2 className="bc-connect">Connect with me</h2>

            <nav className="bc-links" aria-label="Contact links">
              {data.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    className="bc-link"
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon name={link.icon} size={20} />
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="bc-qr">
              <img
                src={data.qrCode}
                alt="QR code that opens this business card"
                width="104"
                height="104"
              />
              <div>
                <p className="bc-qr-title">Scan to save my card</p>
                <p className="bc-qr-text">
                  Point your phone camera here to open this card.
                </p>
              </div>
            </div>

            <footer className="bc-actions bc-actions--back">
              <a className="bc-primary" href={data.vcard} download>
                <Icon name="userPlus" size={20} strokeWidth={2} />
                Save contact
              </a>
              <button
                type="button"
                className="bc-flip"
                onClick={() => setFlipped(false)}
              >
                <Icon name="chevronLeft" size={16} />
                Tap to flip back
              </button>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
