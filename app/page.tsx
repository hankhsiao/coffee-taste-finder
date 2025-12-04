'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CoffeeBeansGrid } from './components/CoffeeBeansGrid';
import FlavorWheel from './components/FlavorWheel';
import { coffeeBeansData } from './data/coffee-beans';
import { Flavor, FlavorLevel2, FlavorLevel3 } from './data/types';

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<Set<string>>(new Set());

  const handleFlavorSelect = (
    flavor: Flavor | FlavorLevel2 | FlavorLevel3,
    level: 1 | 2 | 3
  ) => {
    // Handle flavor selection here
    const flavorId = flavor.id;
    
    if (level === 3) {
      // For level 3 (leaf nodes), toggle the flavor
      setSelectedFlavors((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(flavorId)) {
          newSet.delete(flavorId);
        } else {
          newSet.add(flavorId);
        }
        return newSet;
      });
    } else if (level === 2) {
      // For level 2, toggle all children
      const level2 = flavor as FlavorLevel2;
      const childIds = level2.children.map((child) => child.id);
      const allSelected = childIds.every((id) => selectedFlavors.has(id));
      
      setSelectedFlavors((prev) => {
        const newSet = new Set(prev);
        if (allSelected) {
          childIds.forEach((id) => newSet.delete(id));
        } else {
          childIds.forEach((id) => newSet.add(id));
        }
        return newSet;
      });
    } else if (level === 1) {
      // For level 1, toggle all children of all level 2s
      const level1 = flavor as Flavor;
      const allChildIds = level1.children.flatMap((level2) =>
        level2.children.map((child) => child.id)
      );
      const allSelected = allChildIds.every((id) => selectedFlavors.has(id));
      
      setSelectedFlavors((prev) => {
        const newSet = new Set(prev);
        if (allSelected) {
          allChildIds.forEach((id) => newSet.delete(id));
        } else {
          allChildIds.forEach((id) => newSet.add(id));
        }
        return newSet;
      });
    }
  };

  // Filter coffee beans by selected flavors
  const filteredBeans = selectedFlavors.size === 0
    ? coffeeBeansData
    : coffeeBeansData.filter((bean) =>
        bean.tasteNotes.some((tasteNote) => selectedFlavors.has(tasteNote))
      );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Mobile Layout */}
        <section className="md:hidden px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Find Coffee by Taste
            </h2>
            <p className="text-stone">
              Browse our curated selection and filter by flavor profile
            </p>
          </div>

          {/* Flavor Wheel - Mobile */}
          <div className="sticky top-16 z-20 mb-12 -mx-4">
            <div
              className="w-screen overflow-hidden"
              style={{
                aspectRatio: '5 / 4',
              }}
            >
              <FlavorWheel
                onFlavorSelect={handleFlavorSelect}
                selectedFlavors={selectedFlavors}
                scale={2}
                translateX={-0.35}
                translateY={-0.55}
                isOverflowHidden={true}
              />
            </div>
          </div>

          {/* Grid with larger cards */}
          <CoffeeBeansGrid beans={filteredBeans} selectedFlavors={selectedFlavors} />
        </section>

        {/* Desktop Layout */}
        <section className="hidden md:block px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-2">
                Find Coffee by Taste
              </h2>
              <p className="text-stone">
                Browse our curated selection and filter by flavor profile
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-8">
              {/* Left Column - Flavor Wheel */}
              <div className="w-1/3 shrink-0">
                <div className="sticky top-20">
                  <FlavorWheel
                    onFlavorSelect={handleFlavorSelect}
                    selectedFlavors={selectedFlavors}
                    scale={1.8}
                    translateX={-0.4}
                    translateY={-0.1}
                  />
                </div>
              </div>

              {/* Right Column - Grid */}
              <div className="flex-1">
                <CoffeeBeansGrid beans={filteredBeans} selectedFlavors={selectedFlavors} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
