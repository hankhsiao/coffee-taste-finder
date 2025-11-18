import { CoffeeBean, CoffeeShop } from "../data/types";
import { flavorWheelData } from "../data/flavors";
import { coffeeShopsData } from "../data/coffee-shops";
import Link from "next/link";
import Pill from "./Pill";

// Helper function to build a map of flavor IDs to names and colors
const buildFlavorMap = () => {
  const map: { [key: string]: { name: string; color: string } } = {};
  flavorWheelData.categories.forEach((level1) => {
    level1.children.forEach((level2) => {
      level2.children.forEach((level3) => {
        map[level3.id] = { name: level3.name, color: level3.colorHex };
      });
    });
  });
  return map;
};

const flavorMap = buildFlavorMap();

// Helper function to build a map of shop IDs to shop names
const buildShopIdToNameMap = () => {
  const map: { [key: string]: string } = {};
  coffeeShopsData.forEach((shop) => {
    map[shop.id] = shop.name;
  });
  return map;
};

const shopIdToNameMap = buildShopIdToNameMap();

// Function to get popular beans (first 5 beans from the data)
const getPopularBeans = (beans: CoffeeBean[]): CoffeeBean[] => {
  return beans.slice(0, 5);
};

interface CoffeeBeanListProps {
  beans: CoffeeBean[];
  selectedFlavors?: string[];
}

const CoffeeBeanList = ({
  beans,
  selectedFlavors = [],
}: CoffeeBeanListProps) => {
  // Show popular beans if no filter is applied
  const beansToDisplay =
    selectedFlavors.length === 0 ? getPopularBeans(beans) : beans;

  // Group beans by coffee shop
  const beansByShop = beansToDisplay.reduce((acc, bean) => {
    const shopId = bean.shopId;
    if (!acc[shopId]) {
      acc[shopId] = [];
    }
    acc[shopId].push(bean);
    return acc;
  }, {} as { [key: string]: CoffeeBean[] });

  // Get shop objects in order
  const shopsWithBeans = coffeeShopsData.filter((shop) => beansByShop[shop.id]);

  return (
    <div>
      {/* Level 1: Main Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Coffee Beans</h2>
      {beansToDisplay.length === 0 ? (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-600">
            No coffee beans match the selected flavors.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {shopsWithBeans.map((shop) => (
            <div
              key={shop.id}
              className="rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Level 2: Coffee Shop Name */}
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                  {shop.name}
                </h3>
              </div>

              {/* Level 3 & 4: Beans and Pills */}
              <ul className="divide-y divide-gray-100">
                {beansByShop[shop.id].map((bean) => (
                  <li
                    key={bean.id}
                    className="px-5 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <Link
                      href={`/coffee-bean/${bean.id}`}
                      className="text-base font-semibold text-gray-900 hover:text-blue-700 hover:underline transition-colors"
                    >
                      {bean.name}
                    </Link>
                    {/* Level 4: Taste Notes Pills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {bean.tasteNotes.map((noteId) => {
                        const flavor = flavorMap[noteId];
                        return (
                          <Pill
                            key={noteId}
                            label={flavor ? flavor.name : noteId}
                            color={flavor ? flavor.color : "#999999"}
                            isSelected={selectedFlavors.includes(noteId)}
                          />
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoffeeBeanList;
