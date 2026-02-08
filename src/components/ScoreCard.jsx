import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  return value;
}

function getScoreGradientColor(score) {
  if (score >= 65) return "var(--val-success)";
  if (score >= 35) return "var(--val-warning)";
  return "var(--val-danger)";
}

function getScoreLabel(score) {
  if (score >= 65) return "Strong";
  if (score >= 35) return "Moderate";
  return "Weak";
}

function getScoreColor(score) {
  if (score >= 65) return "text-success";
  if (score >= 35) return "text-warning";
  return "text-danger";
}

function getScoreBg(score) {
  if (score >= 65) return "bg-success-light";
  if (score >= 35) return "bg-warning-light";
  return "bg-danger-light";
}

function getIconStyle(score) {
  if (score >= 65) return "bg-success-light text-success";
  if (score >= 35) return "bg-warning-light text-warning";
  return "bg-danger-light text-danger";
}

const icons = {
  "How clear is your market?": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  "Who exactly is this for?": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  "Who's paying?": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function ScoreCard({ label, score, explanation, color, index }) {
  const displayScore = useCountUp(score);
  const gradientColor = getScoreGradientColor(score);
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl bg-surface p-5 sm:p-6 shadow-lg shadow-primary/5 border border-edge hover:shadow-xl transition-all duration-300"
    >
      {/* Accent line */}
      <div className={`absolute inset-x-0 top-0 h-1 ${color}`} />

      {/* Center-aligned content */}
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${getIconStyle(score)}`}>
          {icons[label]}
        </div>

        {/* Label */}
        <p className="text-sm font-semibold text-primary mb-4">{label}</p>

        {/* Score ring */}
        <div className="relative mb-4">
          <svg width="100" height="100" className="-rotate-90">
            <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="var(--val-edge)" strokeWidth="6" />
            <motion.circle
              cx="50" cy="50" r={RADIUS} fill="none"
              stroke={`url(#grad-${index})`}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, delay: index * 0.15 + 0.2, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradientColor} />
                <stop offset="100%" stopColor={gradientColor} stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor(score)}`}>{displayScore}</span>
          </div>
        </div>

        {/* Score label pill */}
        <div className={`inline-flex items-center rounded-full px-3 py-1 mb-4 ${getScoreBg(score)}`}>
          <span className={`text-xs font-semibold ${getScoreColor(score)}`}>
            {getScoreLabel(score)} — {score}/100
          </span>
        </div>

        {/* Explanation */}
        <p className="text-xs text-secondary leading-relaxed">{explanation}</p>
      </div>
    </motion.div>
  );
}
