const TextViewer = ({ content }) => {
  return (
    <div className="flex flex-col w-3/4">
      {content?.map((section, index) => (
        <div key={index} className="section">
          <h2 className="font-bold text-lg mb-2">{section.heading}</h2>
          <p className="mb-4">{section.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default TextViewer;
