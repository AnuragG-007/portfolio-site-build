export default function LegalLEDBlog() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24 space-y-14 font-mono">
      {/* ================= Header ================= */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Engineering Long-Document Legal Summarization with LED
        </h1>
        <p className="text-gray-400 text-lg">
          From long-context model training to real-world deployment constraints.
        </p>
        <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-400 to-purple-400" />
      </header>

      {/* ================= Overview ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This project focuses on abstractive summarization of long legal
          documents such as legislative bills, court judgments, and hearing
          transcripts using the Longformer Encoder-Decoder (LED) architecture.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The model was trained and evaluated on the{" "}
          <span className="text-cyan-400">BillSum</span> dataset, which consists
          of U.S. Congressional bills published between approximately{" "}
          <span className="text-cyan-400">2010 and 2017</span>. These documents
          are structurally complex, legally dense, and often span tens of
          thousands of tokens.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The primary objective was not just to train a summarization model, but
          to engineer a{" "}
          <span className="text-cyan-400">
            robust, deployable long-context NLP system{" "}
          </span>
          capable of handling real-world legal inputs under practical memory,
          latency, and cost constraints.
        </p>
      </section>

      {/* ================= Why Hard ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Why Legal Document Summarization Is Hard
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Legal documents frequently exceed standard transformer token limits
          </li>
          <li>Strong long-range and cross-section dependencies</li>
          <li>Numerical, citation-heavy clauses where precision is critical</li>
          <li>
            Non-digitally native PDFs introducing OCR and formatting noise
          </li>
        </ul>
      </section>

      {/* ================= Model Choice ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Model Selection: Why LED
        </h2>

        <div className="space-y-2 text-gray-300 leading-relaxed">
          <p>
            <span className="text-cyan-400">BERT</span> is an encoder-only model
            primarily suited for extractive tasks and is not designed for
            long-form text generation.
          </p>
          <p>
            <span className="text-cyan-400">T5</span> supports abstractive
            summarization but relies on full self-attention, which becomes
            computationally infeasible for very long legal documents.
          </p>
          <p>
            <span className="text-cyan-400">LED</span> replaces full attention
            with sliding-window attention and introduces global attention
            tokens, making it well-suited for long-context abstractive
            summarization tasks such as legislative bill analysis.
          </p>
        </div>
      </section>

      {/* ================= Limiting Constraints ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Training Constraints & Engineering Workarounds
        </h2>

        <p className="text-gray-300 leading-relaxed">
          One of the major challenges in this project was fine-tuning
          <span className="text-cyan-400"> LED-Large (~460M parameters){" "}</span>
          under realistic compute constraints.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Full fine-tuning of LED-Large with long input sequences (8k–16k
          tokens) is impractical on laptops and free-tier cloud environments
          such as Google Colab due to severe GPU memory limitations. Even GPUs
          like T4 and P100 struggle once optimizer states, gradients, and
          long-sequence activations are taken into account.
        </p>

        <p className="text-gray-300 leading-relaxed">
          To address this, the model was fine-tuned using
          <span className="text-cyan-400">
            {" "}
            QLoRA (Quantized Low-Rank Adaptation)
          </span>
          , which enables efficient adaptation of large models by training a
          small number of low-rank parameters on top of a quantized base model.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Training was conducted on Kaggle GPUs (T4/P100), which offer extended
          compute availability compared to typical free-tier environments. QLoRA
          made it possible to fine-tune the model within memory limits while
          retaining performance close to full fine-tuning.
        </p>

        <p className="text-gray-300 leading-relaxed">
          While parameter-efficient fine-tuning may result in a slight
          performance gap compared to full fine-tuning, the trade-off was
          justified given the significant reductions in memory usage and
          training cost.
        </p>
      </section>

      {/* ================= Attention ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Attention Design & Global Context Handling
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Sliding-window attention efficiently captures local context but lacks
          document-level awareness. LED addresses this through global attention
          tokens that can attend to the entire sequence.
        </p>
        <p className="text-gray-300 leading-relaxed">
          In this implementation, global attention was applied dynamically by
          updating global attention anchors approximately every
          <span className="text-cyan-400"> 1000 tokens</span>. This ensures that
          different sections of long legal documents receive global context
          coverage, reducing topic drift and improving coherence across
          sections.
        </p>
      </section>

      {/* ================= Chunking ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Token Limits & Chunking Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          While{" "}
          <span className="text-cyan-400">
            LED-Large supports up to 16k tokens
          </span>
          , many real-world legal documents exceed this limit. To handle such
          cases, documents were split into overlapping chunks.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Each chunk is summarized independently, with overlap preserving
          semantic continuity across boundaries. This approach prioritizes
          scalability and system stability over perfect global coherence.
        </p>
      </section>

      {/* ================= OCR ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          OCR & PDF Data Quality Challenges
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Page numbers and headers injected into content</li>
          <li>Logos, symbols, and formatting artifacts</li>
          <li>Broken words and inconsistent spacing</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          While the BillSum dataset itself is clean, real-world PDFs introduce
          significant noise. Cleaning such artifacts using regular expressions
          is unreliable and often incomplete, sometimes degrading summary
          quality. As a result, the system emphasizes model robustness over
          aggressive preprocessing.
        </p>
      </section>

      {/* ================= Evaluation ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Evaluation Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Evaluation was performed using multiple complementary metrics:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <span className="text-cyan-400">ROUGE-1</span>: unigram overlap
          </li>
          <li>
            <span className="text-cyan-400">ROUGE-2</span>: bigram overlap
          </li>
          <li>
            <span className="text-cyan-400">ROUGE-L</span>: longest common
            subsequence
          </li>
          <li>
            <span className="text-cyan-400">BERTScore</span>: semantic
            similarity
          </li>
          <li>
            <span className="text-cyan-400">METEOR</span>: alignment-based
            evaluation
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Using multiple metrics provides a more realistic assessment of both
          lexical fidelity and semantic faithfulness.
        </p>
      </section>

      {/* ================= Limitations ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Limitations & Improvement Zones
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Hallucinations under heavy OCR noise</li>
          <li>Weak handling of dense numerical clauses</li>
          <li>Sensitivity to chunk boundary placement</li>
          <li>Limited cross-chunk reasoning</li>
        </ul>
      </section>

      {/* ================= Deployment ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">
          Deployment & System Design
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The system is deployed using a FastAPI backend for inference, with the
          model hosted on Hugging Face Spaces and the frontend built using
          Next.js and deployed on Vercel.
        </p>
        <p className="text-gray-300 leading-relaxed">
          AWS deployment was explored; however, the free tier is insufficient
          for hosting large models such as LED due to memory and compute
          limitations. Hugging Face Spaces provided a more practical and
          cost-effective solution for hosting long-context models.
        </p>
      </section>

      {/* ================= Takeaway ================= */}
      <section className="space-y-3">
        <h2 className="text-2xl text-purple-400 font-semibold">Key Takeaway</h2>
        <p className="text-gray-300 leading-relaxed">
          Building long-context NLP systems in production is fundamentally an
          engineering challenge. This project highlights the trade-offs between
          model capacity, context length, data quality, deployment cost, and
          real-world robustness, far beyond simply training a high-performing
          model.
        </p>
      </section>
    </article>
  );
}
