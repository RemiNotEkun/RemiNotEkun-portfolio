import Navbar from "../components/Navbar";
import { skills, social } from "../../lib/data";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="page">
        <div className="page-header">
          <h1 className="page-title">About<br /><em>Me</em></h1>
        </div>

        <div className="about-grid">
          <div>
            <p className="about-text">
              I&apos;m <strong>Joseph Emmanuel</strong>, a Frontend Developer
              and UI/UX Designer based in Abuja, Nigeria. I build products
              that sit at the intersection of sharp design and clean
              engineering — interfaces that feel inevitable, not assembled.
            </p>
            <p className="about-text">
              Currently co-founding <strong>NeedIt</strong>, Nigeria&apos;s
              reverse marketplace. I take on client work across web
              development and design, and I care deeply about the craft behind
              every pixel and every line of code.
            </p>

            <div className="skills-section">
              <p className="skills-label">Development</p>
              <div className="skills">
                {skills.frontend.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>

            <div className="skills-section" style={{ marginTop: "24px" }}>
              <p className="skills-label">Design</p>
              <div className="skills">
                {skills.design.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>

            <div className="skills-section" style={{ marginTop: "36px" }}>
              <p className="skills-label">Connect</p>
              <div className="skills">
                {social.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                    <span>{s.name} ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <img
              src="/joseph.jpg"
              alt="Joseph Emmanuel"
              className="about-photo"
            />
          </div>
        </div>
      </main>
    </>
  );
}