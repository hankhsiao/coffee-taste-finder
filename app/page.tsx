'use client';

import { useState, useRef, useEffect } from 'react';
import ClientFlavorWheel from './components/ClientFlavorWheel';
import CoffeeBeanList from './components/CoffeeBeanList';
import StickyComponent from './components/StickyComponent';
import { coffeeBeansData } from './data/coffee-beans';
import { flavorWheelData } from './data/flavors';
import { Flavor, FlavorChild, FlavorLevel3 } from './data/types';
import Description from './components/Description';

// Helper function to build a map of flavor IDs to names
const buildFlavorIdToNameMap = () => {
  const map: { [key: string]: string } = {};
  flavorWheelData.categories.forEach((level1) => {
    level1.children.forEach((level2) => {
      level2.children.forEach((level3) => {
        map[level3.id] = level3.name;
      });
    });
  });
  return map;
};

const flavorIdToNameMap = buildFlavorIdToNameMap();

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [wheelHeight, setWheelHeight] = useState(0);
  const [isWheelSticky, setIsWheelSticky] = useState(false);
  const wheelContainerRef = useRef<HTMLDivElement>(null);

  // Track wheel container height to calculate yOffset
  useEffect(() => {
    const container = wheelContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      setWheelHeight(container.offsetHeight);
    });

    resizeObserver.observe(container);
    setWheelHeight(container.offsetHeight);

    return () => resizeObserver.disconnect();
  }, []);

  const handleFlavorSelect = (flavor: Flavor | FlavorChild | FlavorLevel3, level: 1 | 2 | 3) => {
    let flavorIds: string[] = [];
    if (level === 1) {
      flavorIds = (flavor as Flavor).children.flatMap(c => c.children.map(c3 => c3.id));
    } else if (level === 2) {
      flavorIds = (flavor as FlavorChild).children.map(c => c.id);
    } else {
      flavorIds = [(flavor as FlavorLevel3).id];
    }

    const isSelected = flavorIds.every(id => selectedFlavors.includes(id));

    setSelectedFlavors((prev) => {
      if (isSelected) {
        return prev.filter((f) => !flavorIds.includes(f));
      } else {
        return [...new Set([...prev, ...flavorIds])];
      }
    });
  };

  const filteredBeans =
    selectedFlavors.length > 0
      ? coffeeBeansData.filter((bean) =>
          selectedFlavors.some((flavorId) => bean.tasteNotes.includes(flavorId))
        )
      : coffeeBeansData;

  return (
    <main className="flex min-h-screen flex-col items-center md:p-12 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">Coffee Taste Finder</h1>
      </div>
      <Description />
      <div className="w-full max-w-7xl lg:flex lg:items-start gap-4">
        {/* Wheel container - sticky on mobile */}
        <div ref={wheelContainerRef} className="w-full lg:w-2/3">
          <StickyComponent className="w-full lg:w-2/3" yOffset={-Math.floor(wheelHeight / 3)} onStickyChange={setIsWheelSticky}>
            <ClientFlavorWheel onFlavorSelect={handleFlavorSelect} selectedFlavors={selectedFlavors} enableSpinning={isWheelSticky} />
          </StickyComponent>
        </div>
        
        {/* Coffee bean list */}
        <div className="w-full lg:w-1/3 p-4 mt-4 lg:mt-0">
          <CoffeeBeanList beans={filteredBeans} selectedFlavors={selectedFlavors} />
        </div>
      </div>
    </main>
  );
}
