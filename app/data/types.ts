export interface FlavorLevel3 {
  id: string;
  name: string;
  colorHex: string;
}

export interface FlavorLevel2 {
  id: string;
  name: string;
  colorHex: string;
  children: FlavorLevel3[];
}

export interface Flavor {
  id: string;
  name: string;
  colorHex: string;
  children: FlavorLevel2[];
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
  image?: string;
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
