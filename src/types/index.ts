export type CategoryType =
  | 'all'
  | 'agbada'
  | 'nuptials'
  | 'isiagu'
  | 'capes'
  | 'ready-to-wear'
  | 'artifacts'
  | 'bespoke';

export interface Garment {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  numericPrice: number;
  category: CategoryType;
  lookCode: string;
  badge?: string;
  image: string;
  alt: string;
  description: string;
  details: string[];
  provenance: string;
  artisanHours: number;
  materials: string[];
  silhouettes: string[];
  inStock: boolean;
  limitedEdition: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  garment: Garment;
  quantity: number;
  customNotes?: string;
  selectedSize?: string;
  selectedSilhouette?: string;
}

export interface BespokeConfig {
  silhouette: string;
  textile: string;
  embroideryMotif: string;
  chestBreadth: number;
  shoulderSpan: number;
  napeToFloorDrop: number;
  agbadaWingspan: number;
  postureType: 'Athletic Upright' | 'Formal Sovereign' | 'Commanding Stance' | 'Relaxed Aristocrat';
  unit: 'inches' | 'cm';
  artifacts: string[];
  appointmentType: 'Virtual Master Fitting' | 'Private Salon — Victoria Island, Lagos' | 'Private Salon — Mayfair, London' | 'Private Salon — Manhattan, NY' | 'Private Salon — DIFC, Dubai';
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  specialRequests: string;
}

export interface CommissionOrder {
  orderId: string;
  clientName: string;
  clientEmail: string;
  garmentTitle: string;
  date: string;
  status: 'drafting' | 'weaving' | 'embroidery' | 'assembly' | 'dispatched';
  progressPercent: number;
  currentStageHours: number;
  totalHours: number;
  estimatedDelivery: string;
  trackingCode: string;
  destinationCity: string;
  totalAmount: string;
  stages: {
    title: string;
    desc: string;
    completed: boolean;
    current?: boolean;
    hoursLogged?: number;
  }[];
}

export type TabType = 'home' | 'ascent' | 'bespoke' | 'track' | 'atelier-admin';
