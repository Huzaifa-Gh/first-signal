import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center mb-12 sm:mb-16">
      {/* Left — Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center lg:text-left"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success-light px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
          <span className="text-sm font-medium text-success">Idea clarity, scored instantly</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-primary">
          Validate ideas
          <br />
          <span className="text-accent">in seconds,</span>
          <br />
          not weeks.
        </h1>

        {/* Subheading */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-secondary max-w-md leading-relaxed mx-auto lg:mx-0">
          Paste your startup idea and get an instant signal on its clarity —
          market, target user, and monetization scored in one click.
        </p>

        {/* Trust badges */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-secondary">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Keyword-weighted
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Instant results
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            100% private
          </div>
        </div>
      </motion.div>

      {/* Right — Preview Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative hidden sm:flex justify-center lg:justify-end"
      >
        {/* Decorative circle */}
        <div className="absolute -top-8 -left-8 h-48 w-48 rounded-full border border-accent/10 hidden lg:block" />

        {/* Mock preview card */}
        <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl bg-surface p-5 sm:p-6 shadow-xl shadow-primary/5 border border-edge transition-colors duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-bg-muted flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Idea Analysis</p>
                <p className="text-xs text-dimmed">3 categories scored</p>
              </div>
            </div>
            <span className="rounded-full bg-success-light px-3 py-1 text-xs font-medium text-success">Live</span>
          </div>

          {/* Sample scores */}
          <div className="space-y-3">
            {[
              { label: "Market Clarity", score: 82, color: "bg-success" },
              { label: "Target User", score: 74, color: "bg-accent" },
              { label: "Monetization", score: 45, color: "bg-warning" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-primary-soft font-medium">{item.label}</span>
                  <span className="font-semibold text-primary">{item.score}</span>
                </div>
                <div className="h-2 rounded-full bg-bg-muted overflow-hidden transition-colors duration-300">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-edge-soft">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
              <span className="text-xs font-medium text-success">Ready to analyze</span>
            </div>
            <span className="text-xs text-dimmed">3 categories</span>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="absolute -top-3 -right-2 sm:right-0 lg:-right-4 rounded-xl bg-accent text-white px-4 py-2 shadow-lg shadow-accent/20 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span className="text-sm font-semibold">82% Clarity</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
