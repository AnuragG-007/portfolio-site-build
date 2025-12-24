export default function SteamGameFinderBlog() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24 space-y-14 font-mono">
      {/* ================= Header ================= */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Engineering Semantic Game Discovery for Steam
        </h1>
        <p className="text-gray-400 text-lg">
          Understanding user intent, semantic similarity, and ranking trade-offs
          in large-scale game recommendation systems.
        </p>
        <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-400 to-purple-400" />
      </header>

      {/* ================= Overview ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This project explores semantic search and recommendation for Steam
          games using large language models, dense vector embeddings, and hybrid
          ranking strategies.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Traditional discovery systems rely heavily on keyword matching,
          rigid filters, and popularity-driven rankings. These approaches fail
          to capture user intent for descriptive queries such as
          <span className="text-cyan-400"> “cozy pixel-art farming game” </span>
          or
          <span className="text-cyan-400"> “dark story-driven RPG.”</span>
        </p>
        <p className="text-gray-300 leading-relaxed">
          The goal of this system is to understand what users mean, not just
          what they type, and return contextually relevant, high-quality game
          recommendations.
        </p>
      </section>

      {/* ================= Why Hard ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Why Game Discovery Is Hard
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Queries are subjective, vague, and intent-driven</li>
          <li>Tags and genres are noisy or inconsistently applied</li>
          <li>Keyword overlap does not imply semantic similarity</li>
          <li>Popularity-heavy rankings suppress niche but relevant games</li>
          <li>DLCs, demos, and non-game assets pollute search results</li>
          <li>User intent varies between specific and exploratory searches</li>
        </ul>
      </section>

      {/* ================= Philosophy ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          System Design Philosophy
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Semantic understanding over keyword matching</li>
          <li>Explicit separation of retrieval and ranking</li>
          <li>Explainable backend decision-making</li>
          <li>Frontend-agnostic API design</li>
        </ul>
      </section>

      {/* ================= Model Choice ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Model Selection: Embeddings + LLMs
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Dense vector embeddings are used to capture semantic similarity,
          enabling robust handling of synonyms, paraphrasing, and intent-level
          matching beyond surface keywords.
        </p>
        <p className="text-gray-300 leading-relaxed">
          An LLM-based intent extraction layer parses user queries to identify
          high-level themes such as genre, mood, mechanics, and narrative focus,
          ensuring downstream retrieval is aligned with user intent.
        </p>
      </section>

      {/* ================= Retrieval ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Vector Retrieval Pipeline
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Each game is embedded using a combination of title, genres, tags, and
          short descriptions. Only the top
          <span className="text-cyan-400"> 5,000 </span>
          games by popularity are indexed to balance relevance, latency, and
          cost.
        </p>
        <p className="text-gray-300 leading-relaxed">
          At query time, semantic similarity search retrieves a candidate set
          which serves as input to the ranking stage.
        </p>
      </section>

      {/* ================= Ranking ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Hybrid Ranking Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Semantic similarity alone is insufficient for high-quality
          recommendations. Retrieved candidates are re-ranked using a hybrid
          scoring function that combines:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Semantic similarity</li>
          <li>Popularity and review signals</li>
          <li>Quality metrics (positive ratio, Metacritic)</li>
          <li>Exact and fuzzy title matching</li>
          <li>Negative penalties for non-game assets</li>
        </ul>
      </section>

      {/* ================= Explainability ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Explainability & Backend Reasoning
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Although explanations are not surfaced directly in the UI, the backend
          maintains structured reasoning traces for each recommendation. This
          enables debugging, validation, and consistent ranking behavior.
        </p>
      </section>

      {/* ================= Deployment ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Deployment & Architecture
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The system is deployed as a FastAPI-based backend hosted on Hugging
          Face Spaces. The frontend is built with Next.js and deployed on
          Vercel.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Clean JSON APIs allow the backend to remain frontend-agnostic,
          enabling rapid UI experimentation without backend rewrites.
        </p>
      </section>

      {/* ================= Limitations ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Limitations & Trade-offs
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Metadata quality directly affects recommendation accuracy</li>
          <li>No personalization or user-history modeling</li>
          <li>Popularity bias cannot be fully eliminated</li>
          <li>Cold-start issues for new or obscure titles</li>
        </ul>
      </section>

      {/* ================= Takeaway ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Key Takeaway</h2>
        <p className="text-gray-300 leading-relaxed">
          Effective recommendation systems are built through careful
          orchestration of retrieval, ranking, and reasoning under real-world
          constraints—not a single model or metric.
        </p>
      </section>
    </article>
  );
}
