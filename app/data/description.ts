export interface DescriptionSection {
  id: string;
  title: string;
  content: string[];
}

export const descriptionData: DescriptionSection[] = [
  {
    id: 'purpose',
    title: 'What is this for?',
    content: [
      "This tool helps you find coffee beans and shops with tastes you'll love, based on the flavors you select.",
    ],
  },
  {
    id: 'wheel',
    title: 'The Flavor Wheel',
    content: [
      'The wheel organizes coffee flavors visually. Broader tastes are in the center, and they get more specific as you move outwards.',
      'This makes it easy for beginners to start with general flavors, and for experts to pinpoint the exact notes they are looking for.',
    ],
  },
  {
    id: 'how-to',
    title: 'How to Use It',
    content: [
      'Click on any flavor in the wheel to see a list of coffee beans and shops that match.',
      "If you're on a mobile device, you can spin the wheel to explore the different flavors.",
    ],
  },
];
