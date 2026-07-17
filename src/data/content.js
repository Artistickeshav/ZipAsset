import charger30kwImage from "../assets/charger-30kw.png";
import charger60kwImage from "../assets/charger-60kw.png";
import charger120kwImage from "../assets/charger-120kw.png";
import charger180kwImage from "../assets/charger-180kw.png";
import charger240kwImage from "../assets/charger-240kw.png";
import charger350kwImage from "../assets/charger-350kw.png";

export const pageTabs = ["Marketplace", "Charger Classes", "Returns", "Impact"];

export const marketStats = [
  { label: "Power range", value: "30 kW - 350 kW" },
  { label: "Preferred sites", value: "Retail • Fleet • Highway" },
  { label: "Investor entry", value: "Rs 1.5L - Rs 15L+" },
];

export const marketplaceHighlights = [
  "High-utilization charging sites in urban corridors, logistics parks and travel hubs.",
  "Asset-backed exposure to premium charging hardware, software and energy management.",
  "Flexible participation across compact chargers, premium fast chargers and flagship ultra-fast stations.",
];

export const steps = [
  { title: "Browse", description: "Compare charger classes by power, location and expected utilization." },
  { title: "Model", description: "Adjust your stake to preview projected returns and lock periods." },
  { title: "Deploy", description: "Back site-level infrastructure with transparent underwriting." },
];

export const segments = [
  {
    id: "charger-30kw",
    name: "30 kW Urban Fast Charger",
    power: "30 kW",
    site: "Retail parking, cafes and office parks",
    useCase: "Short dwell-time charging",
    description: "Entry-level DC fast charging for daily commuter destinations where drivers need a quick top-up during errands or work hours.",
    features: ["Compact install footprint", "Ideal for mixed-use sites", "Reliable for 2-3 vehicles per hour"],
    risk: "Low Risk",
    riskLevel: "Low",
    yieldRate: 11.5,
    lockDays: 60,
    minAmount: 2500,
    maxAmount: 15000,
    image: charger30kwImage,
  },
  {
    id: "charger-60kw",
    name: "60 kW Retail Fast Charger",
    power: "60 kW",
    site: "Shopping malls, hotels and commercial centers",
    useCase: "Peak-hour retail charging",
    description: "A dependable fast charger for busy commercial sites with strong daytime traffic and consistent dwell times.",
    features: ["High utilization potential", "Fleet-ready support", "Fast installation turnaround"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 13.5,
    lockDays: 90,
    minAmount: 8000,
    maxAmount: 30000,
    image: charger60kwImage,
  },
  {
    id: "charger-120kw",
    name: "120 kW Highway Fast Charger",
    power: "120 kW",
    site: "Highway service plazas and premium city corridors",
    useCase: "Intercity travel charging",
    description: "High-speed charging infrastructure designed for drivers on longer routes and premium urban corridors with high turnover.",
    features: ["Highway grade hardware", "Premium charging experience", "Ideal for 20-40 minute stops"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 15,
    lockDays: 120,
    minAmount: 15000,
    maxAmount: 50000,
    image: charger120kwImage,
  },
  {
    id: "charger-180kw",
    name: "180 kW Ultra-Fast Charger",
    power: "180 kW",
    site: "Travel hubs, logistics parks and destination stops",
    useCase: "High-demand travel corridors",
    description: "Ultra-fast charging for high-traffic routes where throughput and uptime are critical to customer satisfaction.",
    features: ["Ultra-fast charging", "Supports heavy traffic sites", "Advanced power management"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 16.5,
    lockDays: 150,
    minAmount: 25000,
    maxAmount: 85000,
    image: charger180kwImage,
  },
  {
    id: "charger-240kw",
    name: "240 kW Flagship Charger",
    power: "240 kW",
    site: "Anchor fleet depots and major destination hubs",
    useCase: "Heavy-duty fleet and premium charging",
    description: "Flagship charging infrastructure built for major hubs where rapid turnover and premium service levels drive higher revenue potential.",
    features: ["Flagship charger class", "Fleet and highway ready", "Best-in-class throughput"],
    risk: "High Risk",
    riskLevel: "High",
    yieldRate: 18,
    lockDays: 180,
    minAmount: 40000,
    maxAmount: 150000,
    image: charger240kwImage,
  },
  {
    id: "charger-350kw",
    name: "350 kW Mega-Fast Charger",
    power: "350 kW",
    site: "Regional transit corridors and next-gen charging plazas",
    useCase: "Future-ready highway infrastructure",
    description: "A next-generation mega-fast charger for premium locations that are preparing for the next wave of electric mobility demand.",
    features: ["Mega-fast power delivery", "Future-ready deployment", "Designed for premium operator networks"],
    risk: "High Risk",
    riskLevel: "High",
    yieldRate: 19.5,
    lockDays: 210,
    minAmount: 60000,
    maxAmount: 220000,
    image: charger350kwImage,
  },
];
