export default function TimeSeriesBlog() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24 space-y-14 font-mono">

      {/* ================= Header ================= */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Sequence Modeling for Financial Time Series using Bi-LSTM
        </h1>
        <p className="text-gray-400 text-lg">
          Studying temporal behavior, uncertainty, and real-world deployment
          constraints in financial sequence models.
        </p>
        <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-400 to-purple-400" />
      </header>

      {/* ================= Overview ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This project explores financial time-series modeling using a
          <span className="text-cyan-400"> Bidirectional LSTM (Bi-LSTM){" "}</span>
          architecture to analyze temporal patterns in historical market data.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Rather than framing the system as a trading or profit-generating model,
          the focus is on understanding how deep sequence models behave under
          noisy, non-stationary financial signals.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Given a rolling window of the
          <span className="text-cyan-400"> last 60 days</span> of market data,
          the model attempts to estimate the
          <span className="text-cyan-400"> potential behavior of the next 7 days</span>,
          while accounting for uncertainty inherent in real financial systems.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The system is deployed as a real-time inference service using FastAPI,
          exposing forecasting and evaluation endpoints for downstream analysis
          and visualization.
        </p>
      </section>

      {/* ================= Why Hard ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Why Financial Time Series Are Hard
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Strong non-stationarity and frequent regime shifts</li>
          <li>Extremely high noise-to-signal ratio</li>
          <li>Market reactions driven by external, non-quantifiable events</li>
          <li>Correlation structures that break down during volatility spikes</li>
          <li>Patterns that appear predictive in hindsight but fail prospectively</li>
        </ul>
      </section>

      {/* ================= Model Choice ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Model Selection: Why Bi-LSTM
        </h2>

        <div className="space-y-2 text-gray-300 leading-relaxed">
          <p>
            Traditional statistical models such as
            <span className="text-cyan-400"> ARIMA</span> rely on assumptions of
            linearity and stationarity, which rarely hold in real financial markets.
          </p>
          <p>
            <span className="text-cyan-400">LSTM networks</span> are designed to
            model long-term temporal dependencies and handle non-linear dynamics,
            making them suitable for noisy sequential data.
          </p>
          <p>
            A <span className="text-cyan-400">Bidirectional LSTM</span> was used
            during training to capture both forward and backward temporal
            dependencies within fixed historical windows, improving the model’s
            ability to extract temporal structure from past price movements.
          </p>
        </div>
      </section>

      {/* ================= Data ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Data Collection & Feature Engineering
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Instead of relying on a pre-compiled dataset, market data was collected
          programmatically using financial data scraping pipelines.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Historical OHLC price data fetched via <span className="text-cyan-400">yfinance</span></li>
          <li>Custom sliding-window sequence generation</li>
          <li>Normalization to stabilize training dynamics</li>
          <li>Temporal train/validation/test splits to prevent leakage</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          The dataset was intentionally constructed to include a wide range of
          behaviors: strong upward trends (e.g. NVIDIA), stable growth (Coca-Cola),
          moderate fluctuations (Google), and high-volatility assets such as
          cryptocurrencies (BTC, ETH, SOL). This hybrid dataset exposes the model
          to diverse uncertainty regimes.
        </p>
      </section>

      {/* ================= Evaluation ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Evaluation & Baselines
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Model evaluation focused on both numerical accuracy and behavioral
          consistency across time.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Mean Squared Error (MSE)</li>
          <li>Mean Absolute Error (MAE)</li>
          <li>Directional accuracy</li>
          <li>Comparison against naive moving-average baselines</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          As detailed in the evaluation dashboard, the Bi-LSTM outperformed simple
          baselines during stable market conditions, but performance degraded
          noticeably during high-volatility regimes—highlighting the limits of
          purely data-driven sequence models.
        </p>
      </section>

      {/* ================= Limitations ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Limitations & Reality Check
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>No guarantee of future market behavior</li>
          <li>Strong sensitivity to regime changes</li>
          <li>Model captures patterns, not causal market mechanisms</li>
          <li>Forecasts are descriptive, not prescriptive</li>
          <li>Not suitable as a standalone trading system</li>
        </ul>
      </section>

      {/* ================= Deployment ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Deployment & Engineering Challenges
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The forecasting model is served via a FastAPI backend and deployed on
          Hugging Face Spaces, with the frontend dashboard hosted on Vercel.
        </p>
        <p className="text-gray-300 leading-relaxed">
          During deployment, a key challenge emerged: <span className="text-cyan-400">yfinance
          does not reliably accept requests from cloud environments</span>,
          making real-time data fetching infeasible in production.
        </p>
        <p className="text-gray-300 leading-relaxed">
          To overcome this, an external data provider,
          <span className="text-cyan-400"> Alpha Vantage</span>, was integrated.
          While it provides reliable access to U.S.-based equities and
          cryptocurrencies, it does not support Indian market tickers such as
          TCS or SBIN. This trade-off was accepted to ensure system reliability
          and cloud compatibility.
        </p>
      </section>

      {/* ================= Takeaway ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Key Takeaway</h2>
        <p className="text-gray-300 leading-relaxed">
          Financial time-series modeling is less about predicting prices and more
          about understanding uncertainty, failure modes, and system constraints.
          This project reinforced the importance of honest evaluation, careful
          data engineering, and pragmatic deployment decisions when working with
          real-world sequential data.
        </p>
      </section>

    </article>
  );
}
