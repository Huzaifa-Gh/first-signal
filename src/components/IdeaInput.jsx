import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import demoIdeas from "../data/demoIdeas";

export default function IdeaInput({ idea, setIdea, onAnalyze, isLoading }) {
  const [error, setError] = useState("");

  useEffect(() => {
    const randomIdea = demoIdeas[Math.floor(Math.random() * demoIdeas.length)];
    setIdea(randomIdea);
  }, []);

  function handleSubmit() {
    if (!idea.trim()) {
      setError("Drop your idea in first — even a rough one works.");
      return;
    }
    setError("");
    onAnalyze(idea.trim());
  }

  const wordCount = idea.trim() ? idea.trim().split(/\s+/).length : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-2xl bg-surface shadow-lg shadow-primary/5 border border-edge overflow-hidden transition-colors duration-300">
        {/* Textarea */}
        <textarea
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
            if (error) setError("");
          }}
          placeholder="Describe your startup idea..."
          rows={3}
          className="w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-2 text-primary text-sm sm:text-base leading-relaxed focus:outline-none resize-none border-0 bg-transparent placeholder:text-dimmed"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 pb-4 pt-1 gap-3">
          <div className="flex items-center gap-3">
            <span className={`text-xs transition-colors ${wordCount > 0 ? "text-secondary" : "text-dimmed"}`}>
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </span>
            <span className="text-edge">|</span>
            <button
              onClick={() => {
                const randomIdea = demoIdeas[Math.floor(Math.random() * demoIdeas.length)];
                setIdea(randomIdea);
              }}
              className="cursor-pointer text-xs font-medium text-accent hover:text-accent-hover transition flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
              Try an example
            </button>
          </div>

          <motion.button
            onClick={handleSubmit}
            disabled={isLoading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analyzing...
              </>
            ) : (
              <>
                Get My Signal
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-danger text-center"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
