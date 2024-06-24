import "./MonteCarlo.css";
import Models from "./Models";

export default function MonteCarlo() {
  const steps = [
    {
      stepNo: 1,
      title: "Define the Objective",
      description:
        "Predict future ETF prices using Monte Carlo simulations by generating numerous possible price paths based on historical data and statistical techniques.",
    },
    {
      stepNo: 2,
      title: "Gather Historical Data",
      description:
        "Collect historical price data for the ETF to calculate necessary parameters like average return and volatility.",
    },
    {
      stepNo: 3,
      title: "Set Simulation Parameters",
      description:
        "Determine initial stock price, average return rate (mean), volatility (standard deviation), prediction time frame, number of time steps, and simulations.",
    },
    {
      stepNo: 4,
      title: "Generate Random Paths",
      description:
        "Use the Geometric Brownian Motion model to create random future price paths by applying calculated mean and volatility changes.",
    },
    {
      stepNo: 5,
      title: "Execute Simulations",
      description:
        "Perform simulations by iterating through each time step, applying random price changes, and repeating the process for the desired number of simulations.",
    },
  ];

  return (
    <section className="monteCarloSection">
      <h1>
        What is <span className="highlight">Monte Carlo Simulation</span>?
      </h1>
      <p className="para_MonteCarlo">
        Monte Carlo Simulation is a computational technique used to estimate the
        behavior of complex systems and understand the impact of risk and
        uncertainty in prediction models. It involves generating a large number
        of random samples from probability distributions of uncertain variables.
        These random samples are used to run multiple simulations, often
        thousands or more, to observe a range of possible outcomes. By analyzing
        these outcomes, it provides a probabilistic understanding of the models
        behavior, offering insights into the likelihood of different results and
        helping to make informed decisions. This method is widely used in fields
        such as finance, engineering, supply chain management, and project
        management to model the effects of uncertainty and variability.
      </p>
      <h1 className="monteCarlo_h1 reveal">
        How <span className="highlight">Monte Carlo Simulation</span> is
        Utilized in Our Project?
      </h1>
      <h3 className="container_name reveal"> STEPS </h3>
      <div className="monte-carlo-simulation reveal">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <h4 className="stepNo">{step.stepNo}</h4>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <h3 className="container_name reveal"> MODELS </h3>
      <Models />
    </section>
  );
}
