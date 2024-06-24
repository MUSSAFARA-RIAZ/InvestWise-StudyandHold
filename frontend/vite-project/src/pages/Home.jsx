import "./Home.css";
import heroImage1 from "../assets/heroImg1.svg";
import heroImage2 from "../assets/heroImg1.svg";
import heroImage3 from "../assets/heroImg1.svg";
import MonteCarlo from "./MonteCarlo.jsx";
// import MonteCarlo from "../MonteCarlo/MonteCarlo";
import TableSection from './TableSection.jsx'
import "../../src/script.js"
// import Sidebar from "../Components/Sidebar.jsx";
// import '../../src/index.css';


export default function Home() {
  return (
    <>
  
      <section className="hero-section">
        <div className="hero-content">
          <div className="tagline">
            Invest Today, Prosper Tomorrow: Embrace the Future with Buy and Hold
            <span role="img" aria-label="temple">
              🏛️
            </span>
          </div>
          <h1>
            Invest Wise: <span className="lineBreak">Buy and Hold.</span>
          </h1>
          <p className="reveal">
            Discover the power of patience with our Buy and Hold investment
            strategy. By focusing on long-term growth, you can ride out market
            fluctuations and steadily increase your wealth. Trust in proven
            methods and expert insights to secure a prosperous financial future.
            Start investing today and watch your wealth flourish over time.
          </p>
        </div>
        <div className="hero-image reveal">
          <figure className="snip1401">
            <img src={heroImage1} alt="Hero Image1" />
            <figcaption>
              <h3>Steady Growth</h3>
              <p>
                Invest for the long term to experience consistent and reliable
                growth.
              </p>
            </figcaption>
          </figure>
          <figure className="snip1401">
            <img src={heroImage2} alt="Hero Image2" />
            <figcaption>
              <h3>Market Resilience</h3>
              <p>
                Weather market fluctuations with a strategy designed for
                stability.
              </p>
            </figcaption>
          </figure>
          <figure className="snip1401">
            <img src={heroImage3} alt="Hero Image3" />
            <figcaption>
              <h3>Expert Insights</h3>
              <p>
                Leverage proven methods and expert advice for optimal returns.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
      <MonteCarlo />
      <TableSection />
    </>
  );
}
