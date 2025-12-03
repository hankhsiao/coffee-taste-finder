'use client';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CoffeeBeansGrid } from './components/CoffeeBeansGrid';
import { coffeeBeansData } from './data/coffee-beans';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 md:px-6 lg:px-8 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Find Coffee by Taste
            </h2>
            <p className="max-w-xl text-stone">
              Browse our curated selection and filter by flavor profile
            </p>
          </div>

          {/* Grid with larger cards */}
          <CoffeeBeansGrid beans={coffeeBeansData} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
