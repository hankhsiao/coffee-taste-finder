'use client';

import Link from 'next/link';
import { CoffeeBean } from '@/app/data/types';
import { getTasteName, getTasteColor, getShopName } from '@/app/data/maps';
import { CoffeeBeanIcon } from './CoffeeBeanIcon';

interface CoffeeBeansGridProps {
  beans: CoffeeBean[];
}

export function CoffeeBeansGrid({ beans }: CoffeeBeansGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-foreground">
      {beans.map((bean) => {
        // Use the first taste note ID color for the gradient background
        const firstTasteColor = getTasteColor(bean.tasteNotes[0]);
        const shopName = getShopName(bean.shopId);
        
        return (
          <Link key={bean.id} href={`/coffee-bean/${bean.id}`}>
              <div className="group cursor-pointer h-full">
                <div className="bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-sage">
                <div className="relative aspect-square overflow-hidden flex items-center justify-center bg-surface-alt">
                  <div 
                    className="absolute inset-0 z-10"
                    style={{
                      background: `linear-gradient(135deg, ${firstTasteColor}30 0%, ${firstTasteColor}10 100%)`,
                    }}
                  />
                  {bean.image ? (
                    <img
                      src={bean.image}
                      alt={bean.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <CoffeeBeanIcon color={firstTasteColor} size={48} className="relative z-20" />
                  )}
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold line-clamp-2 mb-1 text-sm md:text-base">
                    {bean.name}
                  </h3>
                  <p className="text-xs md:text-sm mb-3 line-clamp-1 text-stone">
                    {shopName}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold">
                        ${bean.price}
                      </span>
                      <span className="text-xs text-stone">
                        {bean.weight}
                      </span>
                    </div>
                    
                    <div className="flex gap-1.5 flex-wrap">
                      {bean.tasteNotes.map((tasteId, index) => {
                        const tasteColor = getTasteColor(tasteId);
                        const tasteName = getTasteName(tasteId);
                        return (
                          <span
                            key={`${tasteId}-${index}`}
                            className="inline-block px-2.5 py-1.5 text-xs font-semibold rounded-full border transition-colors duration-300"
                            style={{
                              backgroundColor: `${tasteColor}30`,
                              borderColor: tasteColor,
                              color: tasteColor,
                            }}
                          >
                            {tasteName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
