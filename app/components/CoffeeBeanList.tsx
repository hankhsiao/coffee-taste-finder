import { CoffeeBean } from '../data/types';
import Link from 'next/link';

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
            <p className="text-sm text-gray-600">{bean.tasteNotes.join(', ')}</p>
          </li>
        ))}
        {beans.length === 0 && <p>No coffee beans match the selected flavors.</p>}
      </ul>
    </div>
  );
};

export default CoffeeBeanList;
