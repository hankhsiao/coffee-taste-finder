import { CoffeeBean } from '../data/types';
import { flavorWheelData } from '../data/flavors';
import Link from 'next/link';

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

interface CoffeeBeanListProps {
  beans: CoffeeBean[];
}

const CoffeeBeanList = ({ beans }: CoffeeBeanListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Coffee Beans</h2>
      <ul className="bg-white rounded-lg shadow p-4">
        {beans.map((bean) => (
          <li key={bean.id} className="mb-2 border-b last:border-b-0 pb-2 last:pb-0">
            <Link href={`/coffee-bean/${bean.id}`} className="text-blue-600 hover:underline">
              {bean.name}
            </Link>
            <p className="text-sm text-gray-600">{bean.tasteNotes.map(id => flavorIdToNameMap[id] || id).join(', ')}</p>
          </li>
        ))}
        {beans.length === 0 && <p>No coffee beans match the selected flavors.</p>}
      </ul>
    </div>
  );
};

export default CoffeeBeanList;
