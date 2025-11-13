import { descriptionData, DescriptionSection } from '../data/description';

const Description = () => {
  return (
    <div className="p-8">
      {descriptionData.map((section: DescriptionSection) => (
        <div key={section.id} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          {section.content.map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Description;
