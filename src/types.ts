import { ReactNode } from 'react';

export interface ServiceDetail {
  id: string;
  icon: ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  benefits: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  nationality: string;
  bio: string;
  linkedin: string;
}

export interface Project {
  title: string;
  category: string;
  client: string;
  duration: string;
  description: string;
  fullDescription: string;
  results: string[];
  image: string;
  tools: string[];
}
