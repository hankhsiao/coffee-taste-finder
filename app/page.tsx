"use client";

import { useState } from "react";
import PageLayout from "./components/layout/PageLayout";
import CoffeeBeanList from "./components/CoffeeBeanList";
import { coffeeBeansData } from "./data/coffee-beans";
import FlatFlavorWheel from "./components/FlatFlavorWheel";

const socialLinks = [
  { icon: "𝕏", url: "https://twitter.com", label: "Twitter" },
  { icon: "📘", url: "https://facebook.com", label: "Facebook" },
  { icon: "📷", url: "https://instagram.com", label: "Instagram" },
];

export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  const filteredBeans =
    selectedFlavors.length > 0
      ? coffeeBeansData.filter((bean) =>
          selectedFlavors.some((flavorId) => bean.tasteNotes.includes(flavorId))
        )
      : coffeeBeansData;

  return (
    <PageLayout
      title="Coffee Taste Finder"
      logo="☕"
      socialLinks={socialLinks}
      copyrightText="© 2025 Coffee Taste Finder. All rights reserved."
    >
      {/* Flavor wheel section */}
      <div className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="mb-6 sm:mb-8 text-primary-text">
          Filter by Taste Notes
        </h2>
        <FlatFlavorWheel
          selectedFlavors={selectedFlavors}
          onFlavorChange={setSelectedFlavors}
        />
      </div>

      {/* Coffee bean list section */}
      <div className="mb-8 sm:mb-10">
        <h2 className="mb-6 sm:mb-8 text-primary-text">
          Available Coffees ({filteredBeans.length})
        </h2>
        <CoffeeBeanList
          beans={filteredBeans}
          selectedFlavors={selectedFlavors}
        />
      </div>
    </PageLayout>
  );
}
