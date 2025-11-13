'use client';

import { useState } from 'react';
import ClientFlavorWheel from './components/ClientFlavorWheel';
import CoffeeBeanList from './components/CoffeeBeanList';
import { coffeeBeansData } from './data/coffee-beans';
import { Flavor, FlavorChild, FlavorLevel3 } from './data/types';

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  const handleFlavorSelect = (flavor: Flavor | FlavorChild | FlavorLevel3, level: 1 | 2 | 3) => {
    let flavorNames: string[] = [];
    if (level === 1) {
      flavorNames = (flavor as Flavor).children.flatMap(c => c.children.map(c3 => c3.name));
    } else if (level === 2) {
      flavorNames = (flavor as FlavorChild).children.map(c => c.name);
    } else {
      flavorNames = [(flavor as FlavorLevel3).name];
    }

    const lowerCaseFlavorIds = flavorNames.map(id => id.toLowerCase());
    const isSelected = lowerCaseFlavorIds.every(id => selectedFlavors.includes(id));

    setSelectedFlavors((prev) => {
      if (isSelected) {
        return prev.filter((f) => !lowerCaseFlavorIds.includes(f));
      } else {
        return [...new Set([...prev, ...lowerCaseFlavorIds])];
      }
    });
  };

  const filteredBeans =
    selectedFlavors.length > 0
      ? coffeeBeansData.filter((bean) =>
          selectedFlavors.some((flavor) => bean.tasteNotes.map(note => note.toLowerCase()).includes(flavor))
        )
      : coffeeBeansData;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Coffee Taste Finder</h1>
      </div>
      <div className="w-full max-w-5xl lg:flex">
        <div className="lg:w-2/3 p-4">
          <ClientFlavorWheel onFlavorSelect={handleFlavorSelect} selectedFlavors={selectedFlavors} />
        </div>
        <div className="lg:w-1/3 p-4">
          <CoffeeBeanList beans={filteredBeans} />
        </div>
      </div>
    </main>
  );
}
