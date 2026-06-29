import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar showLogo />

      <main className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Frontend Developer &amp; UI/UX Designer</p>

          <h1 className="hero-headline">
            Joseph<br />
            <em>Emmanuel</em>
          </h1>

          <p className="hero-bio">
            Visually-driven builder crafting experiences that delight users
            and shape the future of digital products — from Abuja, for the world.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img
              src="/joseph.jpg"
              alt="Joseph Emmanuel"
              className="hero-photo"
            />
            <span className="hero-photo-tag">Available for work</span>
          </div>
        </div>
      </main>
    </>
  );
}