/**
 * Types & Interfaces for Luota AG - Treuhand-Ökosystem Landingpage
 */

export interface PainCard {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  problem: string;
  consequence: string;
  benefit: string;
  stat: string;
  statLabel: string;
}

export interface EcosystemModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  alltag: string;
  benefit: string;
  icon: string;
  color: string;
}

export interface Integration {
  name: string;
  category: 'erp' | 'dms' | 'portal' | 'other';
  logoText: string;
  description: string;
  logoColor: string;
  featured: boolean;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: 'efficiency' | 'collaboration' | 'governance';
}

export interface TrustPillar {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  documentSource?: {
    title: string;
    page: string;
    matchedText: string;
  };
}

export interface ChatDocument {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
  content: string;
  analysis: {
    title: string;
    summary: string;
    clauses: { label: string; text: string; risk: 'neutral' | 'low' | 'high' }[];
  };
}
