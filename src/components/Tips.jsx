import { useMemo } from "react";
import { motion } from "framer-motion";

const tips = [
  {
    step: 1,
    title: "Market",
    desc: "SaaS, healthcare, fintech, ecommerce...",
    keywords: ["market", "industry", "b2b", "b2c", "saas", "ecommerce", "e-commerce", "healthcare", "fintech", "edtech", "marketplace", "platform", "sector", "niche", "enterprise", "consumer", "retail", "logistics", "real estate", "crypto", "ai", "machine learning", "automation"],
    color: "success",
  },
  {
    step: 2,
    title: "Target User",
    desc: "Founders, developers, remote teams...",
    keywords: ["helps", "users", "founders", "developers", "teams", "students", "freelancers", "designers", "marketers", "managers", "customers", "small business", "startups", "remote workers", "professionals", "creators", "writers", "engineers", "parents", "teachers"],
    color: "accent",
  },
  {
    step: 3,
    title: "Revenue",
    desc: "Subscription, freemium, ads, pricing...",
    keywords: ["subscription", "freemium", "ads", "pay", "pricing", "revenue", "charge", "monthly", "annual", "premium", "free trial", "tier", "plan", "fee", "commission", "per-seat", "one-time", "recurring", "monetize", "profit"],
    color: "warning",
  },
];

function hasMatch(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
}

const colorMap = {
  success: {
    activeBg: "bg-success-light",
    activeBorder: "border-success/30",
    activeText: "text-success",
    stepBg: "bg-success",
  },
  accent: {
    activeBg: "bg-accent-light",
    activeBorder: "border-accent/30",
    activeText: "text-accent",
    stepBg: "bg-accent",
  },
  warning: {
    activeBg: "bg-warning-light",
    activeBorder: "border-warning/30",
    activeText: "text-warning",
    stepBg: "bg-warning",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function Tips({ idea }) {
  const matches = useMemo(() => {
    if (!idea) return [false, false, false];
    return tips.map((tip) => hasMatch(idea, tip.keywords));
  }, [idea]);

  const matchCount = matches.filter(Boolean).length;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-2xl mx-auto mb-6"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-xs font-medium text-secondary uppercase tracking-wider">
          Idea strength checklist
        </span>
        <span className="text-xs font-semibold text-primary bg-bg-muted rounded-full px-2 py-0.5 transition-colors duration-300">
          {matchCount}/3
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tips.map((tip, i) => {
          const active = matches[i];
          const colors = colorMap[tip.color];

          return (
            <motion.div
              key={tip.title}
              variants={item}
              className={`relative rounded-xl p-4 border transition-all duration-300 ${
                active
                  ? `${colors.activeBg} ${colors.activeBorder} shadow-sm`
                  : "bg-surface border-edge"
              }`}
            >
              {/* Step number / check */}
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    active
                      ? `${colors.stepBg} text-white`
                      : "bg-bg-muted text-secondary"
                  }`}
                >
                  {active ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    tip.step
                  )}
                </div>
                <p className={`text-sm font-semibold transition-colors duration-300 ${active ? colors.activeText : "text-primary"}`}>
                  {tip.title}
                </p>
              </div>

              <p className={`text-xs leading-relaxed pl-[34px] transition-colors duration-300 ${active ? colors.activeText + " opacity-80" : "text-secondary"}`}>
                {tip.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
