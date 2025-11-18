export interface DescriptionSection {
  id: string;
  title: string;
  content: string[];
}

export const descriptionData: DescriptionSection[] = [
  {
    id: 'purpose',
    title: 'How it works',
    content: [
      'Pick any coffee flavor—broad or specific—and we filter the coffee beans to show you matches.',
    ],
  },
];
