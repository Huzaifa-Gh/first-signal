const keywords = {
  market: [
    "market", "industry", "b2b", "b2c", "saas", "ecommerce", "e-commerce",
    "healthcare", "fintech", "edtech", "marketplace", "platform", "sector",
    "niche", "vertical", "enterprise", "consumer", "retail", "logistics",
    "real estate", "crypto", "ai", "machine learning", "automation",
  ],
  targetUser: [
    "for", "helps", "users", "founders", "developers", "teams", "students",
    "freelancers", "designers", "marketers", "managers", "customers",
    "small business", "startups", "remote", "people", "professionals",
    "creators", "writers", "engineers", "parents", "teachers",
  ],
  monetization: [
    "subscription", "freemium", "ads", "pay", "pricing", "revenue", "charge",
    "monthly", "annual", "premium", "free trial", "tier", "plan", "fee",
    "commission", "per-seat", "one-time", "recurring", "monetize", "profit",
  ],
};

const explanations = {
  market: {
    high: [
      "Your market positioning is sharp — investors can picture the space instantly.",
      "Crystal clear market signal. You know exactly where this lives.",
    ],
    mid: [
      "There's a market here, but it could be defined more tightly.",
      "Decent market signal. Try naming the exact industry or category.",
    ],
    low: [
      "What market is this for? Add context like B2B, SaaS, healthcare, etc.",
      "The market is fuzzy. Ground your idea in a specific industry.",
    ],
  },
  targetUser: {
    high: [
      "Bullseye — you clearly know who this is built for.",
      "Strong user signal. The target audience jumps off the page.",
    ],
    mid: [
      "There's a user in mind, but sharpen who exactly benefits most.",
      "Good start. Try being more specific — 'remote engineering teams' beats 'teams'.",
    ],
    low: [
      "Who is this for? Name a specific person or role.",
      "No clear target user detected. Every great product starts with a 'who'.",
    ],
  },
  monetization: {
    high: [
      "Money talk detected — you're already thinking about how this pays for itself.",
      "Strong monetization signal. The revenue path is clear.",
    ],
    mid: [
      "There's a hint of a business model. Make it explicit — subscription? Freemium?",
      "Some revenue signal. Try adding how customers would pay.",
    ],
    low: [
      "No revenue signal found. How does this make money?",
      "Missing monetization angle. Even a rough idea of pricing helps.",
    ],
  },
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function scoreCategory(text, categoryKeywords) {
  const lower = text.toLowerCase();
  let matches = 0;

  for (const keyword of categoryKeywords) {
    if (lower.includes(keyword)) {
      matches++;
    }
  }

  const ratio = matches / Math.min(categoryKeywords.length, 8);
  const base = Math.min(ratio * 100, 95);
  const variance = (Math.random() - 0.5) * 10;
  return Math.max(5, Math.min(100, Math.round(base + variance)));
}

function getExplanation(category, score) {
  const bucket = score >= 65 ? "high" : score >= 35 ? "mid" : "low";
  return pickRandom(explanations[category][bucket]);
}

export default function analyzeIdea(text) {
  const market = scoreCategory(text, keywords.market);
  const targetUser = scoreCategory(text, keywords.targetUser);
  const monetization = scoreCategory(text, keywords.monetization);

  return [
    {
      label: "How clear is your market?",
      score: market,
      explanation: getExplanation("market", market),
      color: "bg-success",
      bgColor: "bg-success-light",
    },
    {
      label: "Who exactly is this for?",
      score: targetUser,
      explanation: getExplanation("targetUser", targetUser),
      color: "bg-accent",
      bgColor: "bg-accent-light",
    },
    {
      label: "Who's paying?",
      score: monetization,
      explanation: getExplanation("monetization", monetization),
      color: "bg-warning",
      bgColor: "bg-warning-light",
    },
  ];
}
