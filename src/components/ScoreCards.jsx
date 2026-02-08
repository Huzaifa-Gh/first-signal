import { motion } from "framer-motion";
import ScoreCard from "./ScoreCard";

function getVerdict(avg) {
  if (avg >= 70) return {
    text: "Strong Signal",
    color: "text-success",
    bg: "bg-success-light border-success/20",
  };
  if (avg >= 45) return {
    text: "Getting There",
    color: "text-warning",
    bg: "bg-warning-light border-warning/20",
  };
  return {
    text: "Needs Clarity",
    color: "text-danger",
    bg: "bg-danger-light border-danger/20",
  };
}

export default function ScoreCards({ results }) {
  const avg = Math.round(
    results.reduce((sum, r) => sum + r.score, 0) / results.length
  );
  const verdict = getVerdict(avg);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto mt-10 sm:mt-14"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-edge" />
        <span className="text-xs font-medium uppercase tracking-widest text-dimmed">
          Your Signal
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-edge" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {results.map((result, i) => (
          <ScoreCard key={result.label} {...result} index={i} />
        ))}
      </div>

      {/* Verdict */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <div className={`inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 rounded-full border px-4 sm:px-5 py-2 ${verdict.bg}`}>
          <span className={`text-sm font-semibold ${verdict.color}`}>
            {verdict.text}
          </span>
          <span className="text-secondary text-sm">
            — {avg}/100 overall
          </span>
        </div>

        <p className="text-xs text-dimmed max-w-md text-center">
          Scores are keyword-weighted estimates. Refine your description for sharper results.
        </p>
      </motion.div>
    </motion.div>
  );
}
