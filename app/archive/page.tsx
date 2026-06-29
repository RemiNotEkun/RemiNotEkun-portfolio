import Navbar from "../components/Navbar";
import { archive } from "../../lib/data";

export default function ArchivePage() {
  return (
    <>
      <Navbar />

      <main className="page">
        <div className="page-header">
          <div>
            <h1 className="page-title">Design<br /><em>Archive</em></h1>
          </div>
          <span className="archive-intro">UI explorations &amp; experiments</span>
        </div>

        <div className="archive-grid">
          {archive.map((item) => (
            <div key={item.title} className="archive-card">
              <img src={item.image} alt={item.title} />
              <div className="archive-card-overlay">
                <h3 className="archive-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}