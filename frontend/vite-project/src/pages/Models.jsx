import "./Models.css";
// import '../../../script.js';

export default function Models() {
  const models = [
    {
      name: "Monte Carlo SDE GBM",
      description:
        "This method simulates price paths using drift (return) and shock (volatility) from Geometric Brownian Motion's SDE over discrete time steps.",
    },
    {
      name: "Alternative Monte Carlo GBM",
      description:
        "This approach uses pre-generated random deviates to model Brownian motion, combining them with drift and volatility to calculate the GBM price path at each time step.",
    },
    {
      name: "Analytic Solution GBM",
      description:
        "This method uses the closed-form GBM solution, generating a single random value for Brownian motion and applying it to the analytic solution to obtain the terminal price",
    },
  ];
  return (
    <div className="models_section">
      <div className="ModelCard-container">
      <p className="models_explanation reveal">In our project, we explore the dynamic world of asset price simulation through the implementation of three advanced Monte Carlo models based on Geometric Brownian Motion (GBM). Each model offers a unique approach to simulating asset price paths, providing a comprehensive understanding of market behavior. By utilizing stochastic differential equations, pre-generated random values, and closed-form solutions, these models allow us to capture the intricate interplay of drift, volatility, and randomness inherent in financial markets. Through these simulations, we aim to enhance our predictive capabilities and gain deeper insights into asset price dynamics.</p>
        {models.map((model, index) => (
          <div key={index} className="ModelCard reveal">
            <div className="ModelCard-inner">
              <div className="ModelCard-front">
                <h3 className="model_heading">{model.name}</h3>
              </div>
              <div className="ModelCard-back">
                <p className="model_description">{model.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
