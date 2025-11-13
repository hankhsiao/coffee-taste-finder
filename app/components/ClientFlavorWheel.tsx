'use client';

import dynamic from 'next/dynamic';
import { Flavor, FlavorChild, FlavorLevel3 } from '../data/types';

interface FlavorWheelProps {
  onFlavorSelect: (flavor: Flavor | FlavorChild | FlavorLevel3, level: 1 | 2 | 3) => void;
  selectedFlavors: string[];
}

const FlavorWheel = dynamic(() => import('./FlavorWheel'), {
  ssr: false,
});

const ClientFlavorWheel = (props: FlavorWheelProps) => {
  return <FlavorWheel {...props} />;
};

export default ClientFlavorWheel;
