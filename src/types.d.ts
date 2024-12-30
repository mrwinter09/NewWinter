declare module "react-sparklines" {
  export const Sparklines: React.FC<{ data: number[] }>;
  export const SparklinesLine: React.FC<{ color: string }>;
}

declare module "dompurify" {
  export function sanitize(dirty: string): string;
}

interface Ticker {
  image?: {
    large: string;
  };
  name?: string;
  symbol?: string;
  market_data?: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    sparkline_7d: {
      price: number[];
    };
    price_change_percentage_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_7d_in_currency: {
      usd: number;
    };
    price_change_percentage_14d_in_currency: {
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      usd: number;
    };
    price_change_percentage_60d_in_currency: {
      usd: number;
    };
    price_change_percentage_1y_in_currency: {
      usd: number;
    };
  };
  market_cap_rank?: number;
  hashing_algorithm?: string;
  liquidity_score?: number;
  links?: {
    homepage: string[];
    twitter_screen_name?: string;
    subreddit_url?: string;
    blockchain_site: string[];
    repos_url: {
      github: string[];
    };
  };
  description?: {
    en: string;
  };
}
