'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CoffeeBeansGrid } from './components/CoffeeBeansGrid';
import FlavorWheel from './components/FlavorWheel';
import { coffeeBeansData } from './data/coffee-beans';
import { Flavor, FlavorLevel2, FlavorLevel3 } from './data/types';

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  const handleFlavorSelect = (
    flavor: Flavor | FlavorLevel2 | FlavorLevel3,
    level: 1 | 2 | 3
  ) => {
    // Handle flavor selection here
    console.log('Selected flavor:', flavor, 'Level:', level);
  };

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
          <CoffeeBeansGrid beans={coffeeBeansData} />
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
                <CoffeeBeansGrid beans={coffeeBeansData} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
