const TextViewer = ({ content }) => {
  return (
    <div className="text-viewer">
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
