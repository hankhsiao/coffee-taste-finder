import { flavorWheelData } from './flavors';
import { coffeeShopsData } from './coffee-shops';

// Build a map of flavor IDs to flavor names
export function buildFlavorIdToNameMap(): Record<string, string> {
  const map: Record<string, string> = {};
  
  flavorWheelData.categories.forEach((level1) => {
    map[level1.id] = level1.name;
    
    level1.children.forEach((level2) => {
      map[level2.id] = level2.name;
      
      level2.children.forEach((level3) => {
        map[level3.id] = level3.name;
      });
    });
  });
  
  return map;
}

// Build a map of flavor IDs to colors
export function buildFlavorIdToColorMap(): Record<string, string> {
  const map: Record<string, string> = {};
  
  flavorWheelData.categories.forEach((level1) => {
    map[level1.id] = level1.colorHex;
    
    level1.children.forEach((level2) => {
      map[level2.id] = level2.colorHex;
      
      level2.children.forEach((level3) => {
        map[level3.id] = level3.colorHex;
      });
    });
  });
  
  return map;
}

// Build a map of shop IDs to shop names
export function buildShopIdToNameMap(): Record<string, string> {
  const map: Record<string, string> = {};
  
  coffeeShopsData.forEach((shop) => {
    map[shop.id] = shop.name;
  });
  
  return map;
}

// Create the maps (can be cached)
export const flavorIdToNameMap = buildFlavorIdToNameMap();
export const flavorIdToColorMap = buildFlavorIdToColorMap();
export const shopIdToNameMap = buildShopIdToNameMap();

// Helper functions
export function getTasteName(tasteId: string): string {
  return flavorIdToNameMap[tasteId] || tasteId;
}

export function getTasteColor(tasteId: string): string {
  return flavorIdToColorMap[tasteId] || '#A8936D';
}

export function getShopName(shopId: string): string {
  return shopIdToNameMap[shopId] || shopId;
}
