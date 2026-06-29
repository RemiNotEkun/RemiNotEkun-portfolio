import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar showLogo />

      <main className="hero">
        <div className="dot" />

        <h1>
          FRONTEND
          <br />
          PRODUCT
          <br />
          DESIGNER
        </h1>

        <p>
          MY NAME IS JOSEPH, I&apos;M A VISUALLY-DRIVEN FRONTEND
          DEVELOPER CRAFTING EXPERIENCES THAT DELIGHT USERS
          AND SHAPE THE FUTURE OF DIGITAL PRODUCTS.
        </p>
      </main>
    </>
  );
}