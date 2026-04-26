import React from 'react';
import { 
  UserCheck, 
  Smartphone, 
  Wand2, 
  Zap, 
  Megaphone, 
  Youtube 
} from 'lucide-react';
import { ServiceDetail, TeamMember, Project } from './types';

export const services: ServiceDetail[] = [
  {
    id: 'social-mgmt',
    icon: React.createElement(UserCheck),
    title: "Social Media Management",
    shortDesc: "Full-service management for Instagram, TikTok, LinkedIn, Facebook & X.",
    fullDesc: "Our full-service management includes content strategy, editorial calendars, daily posting, community management, and paid advertising. We focus on results-driven growth and high engagement.",
    price: "AED 1,500/mo",
    benefits: ['Content Strategy', 'Daily Posting', 'Paid Social Ads', 'Monthly Analytics', 'Influencer Outreach', 'Hashtag Research']
  },
  {
    id: 'app-dev',
    icon: React.createElement(Smartphone),
    title: "App & Web Development",
    shortDesc: "Custom mobile and web application development tailored to your business needs.",
    fullDesc: "We build high-performance custom web portals, dashboards, and iOS/Android apps. Our team handles everything from API integrations and eCommerce platforms to UI/UX design and prototyping.",
    price: "AED 5,000+",
    benefits: ['Custom Web Portals', 'IOS & Android Apps', 'Ecommerce Platforms', 'API Integrations', 'UI/UX Design']
  },
  {
    id: 'branding',
    icon: React.createElement(Wand2),
    title: "Brand Identity",
    shortDesc: "From logo design to complete brand guidelines — we build brands that stand out.",
    fullDesc: "Stand out in the competitive Dubai market with professional logo design, complete style guides, presentation assets, and digital marketing materials tailored to your identity.",
    price: "AED 800+",
    benefits: ['Logo Design', 'Brand Style Guides', 'Templates & Assets', 'Presentation Design', 'Marketing Materials']
  },
  {
    id: 'printing',
    icon: React.createElement(Zap),
    title: "Printing Services",
    shortDesc: "Premium quality printing for all your business and marketing materials.",
    fullDesc: "From luxury business cards and tri-fold brochures to large format posters and exhibition displays. We provide end-to-end premium printing solutions for UAE businesses.",
    price: "AED 50/pk",
    benefits: ['Business Cards', 'Flyers & Brochures', 'Roll-up Banners', 'Stickers & Labels', 'Packaging & Boxes']
  },
  {
    id: 'seo',
    icon: React.createElement(Megaphone),
    title: "Digital Marketing & SEO",
    shortDesc: "Data-driven digital marketing campaigns that deliver measurable ROI.",
    fullDesc: "Dominate search results with our SEO and Google Ads expertise. We manage high-converting email marketing, content strategy, and competitor research to scale your business.",
    price: "AED 2,000/mo",
    benefits: ['Search Engine Optimization', 'Google Ads (Search/Display)', 'Email Marketing', 'Content Marketing', 'ROI Reporting']
  },
  {
    id: 'video',
    icon: React.createElement(Youtube),
    title: "Video & Photography",
    shortDesc: "Professional visual content to elevate your brand across all platforms.",
    fullDesc: "High-quality product photography, corporate headshots, and viral short-form video content (Reels/TikToks). We capture the essence of your brand through cinematic visual story-telling.",
    price: "AED 1,200+",
    benefits: ['Product Photography', 'Short-form Reels/TikToks', 'Promotional Videos', 'Drone Footage', 'Video Editing']
  }
];

export const team: TeamMember[] = [
  {
    name: "Wazir Ali Muhammad Hussain",
    role: "Founder & CEO",
    nationality: "Pakistani",
    bio: "Wazir Ali is the visionary founder of WHS Social Media, bringing years of expertise in digital marketing and business development. Based in Dubai, he leads strategic direction and client relationships.",
    linkedin: "https://linkedin.com/in/wazirali"
  }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Social Media Growth",
    category: "Social Media Management",
    client: "Fashion Retailer",
    duration: "6 Months",
    description: "Aggressive growth campaign for a UAE fashion brand using viral TikTok strategies.",
    fullDescription: "Managed the full Instagram and TikTok presence for a prominent UAE fashion brand. We developed a comprehensive content strategy involving 30+ high-quality posts per month and ran targeted Meta Ads campaigns to maximize reach and conversion.",
    results: ["28,000+ Followers", "4.2x ROAS Meta Ads", "180% Sales Growth"],
    tools: ["Instagram", "TikTok", "Meta Ads", "Canva", "CapCut"],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    title: "Custom Social Media Scheduler",
    category: "App Development",
    client: "Digital Agency (UAE)",
    duration: "3 Months",
    description: "Built a custom automation tool for scheduling posts across 5 platforms.",
    fullDescription: "Built a custom web application for scheduling and auto-publishing social media posts across 5 platforms. Included an analytics dashboard, team collaboration features, and a client reporting module to streamline digital agency workflows.",
    results: ["70% Time Saved", "50+ Active Accounts", "Multi-Platform Sync"],
    tools: ["React.js", "Node.js", "PostgreSQL", "REST APIs"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Restaurant Brand Identity",
    category: "Branding & Printing",
    client: "Restaurant Group",
    duration: "4 Weeks",
    description: "Complete brand overhaul including menu design and full printing package.",
    fullDescription: "Provided a complete brand overhaul including a new logo, brand guidelines, menu design, and a full printing package. Delivered 5,000 menus, 2,000 business cards, banners, and staff uniforms for locations across Dubai & Sharjah.",
    results: ["4 New Locations", "100% Brand Refresh", "5,000+ Prints Delivered"],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7ed9d87d7a"
  },
  {
    title: "Real Estate Lead Gen Campaign",
    category: "Digital Marketing",
    client: "Premium Real Estate",
    duration: "Ongoing",
    description: "End-to-end digital marketing for a Dubai real estate firm generating high-intent leads.",
    fullDescription: "Executing a 360-degree digital marketing campaign including Google Ads, SEO, and social media for a Dubai real estate firm. We built high-converting landing pages and managed an ad spend of AED 30,000/month.",
    results: ["400+ Qualified Leads", "45% Lower CPL", "320% Traffic Increase"],
    tools: ["Google Ads", "SEMrush", "WordPress", "HubSpot"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  },
  {
    title: "Influencer Content Strategy",
    category: "Influencer Management",
    client: "Beauty Brand (KSA/UAE)",
    duration: "4 Months",
    description: "Coordinatied micro-influencer campaigns across TikTok and Instagram for brand expansion.",
    fullDescription: "Managed an extensive influencer outreach program for a UAE beauty brand expanding into Saudi Arabia. Coordinated 15+ micro and macro influencers on TikTok and Instagram to create viral buzz.",
    results: ["2.5M+ Reach", "180k+ Video Views", "40% Search Increase"],
    tools: ["TikTok Creator Marketplace", "IG Creator Studio", "Aspire IQ"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48"
  }
];
