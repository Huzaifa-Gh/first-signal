import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import IdeaInput from "./components/IdeaInput";
import Tips from "./components/Tips";
import ScoreCards from "./components/ScoreCards";
import ThemeSwitcher from "./components/ThemeSwitcher";
import analyzeIdea from "./utils/analyzeIdea";

function App() {
  const [idea, setIdea] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleAnalyze(text) {
    setIsLoading(true);
    setResults(null);

    setTimeout(() => {
      setResults(analyzeIdea(text));
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="relative min-h-screen bg-bg overflow-x-clip transition-colors duration-300">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-accent/8" />
        <div className="absolute top-1/2 -left-16 h-64 w-64 rounded-full border border-success/8" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-bg-muted/50" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-10 sm:py-4 bg-bg/80 backdrop-blur-md border-b border-edge/40 shadow-sm shadow-primary/5 transition-colors duration-300">
        <div className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="FirstSignal" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg shadow-md shadow-primary/10" />
          <span className="text-base sm:text-lg font-bold text-primary">FirstSignal</span>
        </div>
        <ThemeSwitcher />
      </nav>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-10 sm:pb-20 sm:pt-16">
        <Hero />

        <Tips idea={idea} />
        <IdeaInput idea={idea} setIdea={setIdea} onAnalyze={handleAnalyze} isLoading={isLoading} />

        <AnimatePresence>{results && <ScoreCards results={results} />}</AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center text-sm text-dimmed">
        Built for dreamers who ship.{" "}
        <span className="font-semibold text-primary">FirstSignal.</span>
      </footer>
    </div>
  );
}

export default App;
