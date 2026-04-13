export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "sale" | "rent";
  propertyType: "apartment" | "house" | "commercial" | "land" | "other";
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  images: string[];
  features: string[];
  latitude?: number;
  longitude?: number;
  featured: boolean;
  active: boolean;
  views: number;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  propertyTitle?: string;
  source: "contact_form" | "property_page" | "whatsapp" | "chat";
  status: "new" | "contacted" | "negotiating" | "closed" | "lost";
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface PropertyFilters {
  type?: "sale" | "rent" | "";
  propertyType?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  search?: string;
}

export interface DashboardMetrics {
  totalProperties: number;
  totalViews: number;
  totalClicks: number;
  totalLeads: number;
  recentLeads: Lead[];
  topProperties: Property[];
}
