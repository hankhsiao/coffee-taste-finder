import { descriptionData, DescriptionSection } from "../data/description";

const Description = () => {
  return (
    <div className="p-4 md:p-8 w-full max-w-5xl">
      {descriptionData.map((section: DescriptionSection) => (
        <div key={section.id}>
          <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
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
