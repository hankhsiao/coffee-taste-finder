"use client";

import { useState } from "react";
import CoffeeBeanList from "./components/CoffeeBeanList";
import { coffeeBeansData } from "./data/coffee-beans";
import Description from "./components/Description";
import FlatFlavorWheel from "./components/FlatFlavorWheel";

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

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
      <FlatFlavorWheel
        selectedFlavors={selectedFlavors}
        onFlavorChange={setSelectedFlavors}
      />

      {/* Coffee bean list */}
      <div className="w-full max-w-7xl p-4 mt-2">
        <CoffeeBeanList
          beans={filteredBeans}
          selectedFlavors={selectedFlavors}
        />
      </div>
    </main>
  );
}
