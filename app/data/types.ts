export interface FlavorLevel3 {
  id: string;
  name: string;
  color_hex: string;
}

export interface FlavorChild {
  id: string;
  name: string;
  color_hex: string;
  children: FlavorLevel3[];
}

export interface Flavor {
  id: string;
  name: string;
  color_hex: string;
  children: FlavorChild[];
}

export interface CoffeeBean {
  id: string;
  name: string;
  shopId: string;
  tasteNotes: string[];
  price: number;
  weight: string;
  country: string;
  region?: string;
  processingMethod?: string;
  productPageLink?: string;
}

export interface CoffeeShop {
  id: string;
  name: string;
  website: string;
  address: string;
  description: string;
  googleMapsLink: string;
  appleMapsLink: string;
  beanIds: string[];
}
