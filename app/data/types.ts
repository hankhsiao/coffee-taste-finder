export interface FlavorLevel3 {
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
}

export interface CoffeeShop {
  id: string;
  name: string;
  address: string;
  beanIds: string[];
}
