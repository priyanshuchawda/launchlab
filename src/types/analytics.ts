export interface MetricCard {
  label: string;
  value: string;
  detail: string;
  trend: "up" | "flat" | "down";
}

export interface ConversionTrendPoint {
  week: string;
  conversionRate: number;
  activationRate: number;
}

export interface ExperimentImpactPoint {
  name: string;
  impact: number;
}

export interface SignupTrendPoint {
  week: string;
  visitors: number;
  signups: number;
}

export interface TrafficSourcePoint {
  name: string;
  value: number;
}

export interface AnalyticsSnapshot {
  metricCards: MetricCard[];
  conversionTrend: ConversionTrendPoint[];
  experimentImpact: ExperimentImpactPoint[];
  signupTrend: SignupTrendPoint[];
  trafficSources: TrafficSourcePoint[];
}
