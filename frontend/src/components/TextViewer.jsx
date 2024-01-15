import isEmpty from "../utils/isEmpty";

const TextViewer = ({ content, selectedHeading }) => {
  if (!selectedHeading || !Array.isArray(content)) {
    <div className="flex flex-col w-3/4 p-2 bg-white">
      <div className="border border-solid p-2" style={{ minHeight: "98vh" }}>
        No content selected.
      </div>
    </div>;
  }

  const contentArray = content.document || [];

  const filteredContent = contentArray.filter(
    (item) =>
      item.parent_id === selectedHeading.id || item.id === selectedHeading.id
  );

  return (
    <div id="text-viewer" className="flex flex-col w-3/4 p-2 bg-white">
      <div className="border border-solid p-2" style={{ minHeight: "98vh" }}>
        {filteredContent.map((item) => {
          let name = item.name;
          let value = item.content;

          return (
            <div key={`${item.name}-value`}>
              {isEmpty(name) ? (
                <h3 className="text-xl font-bold mb-2 text-red-500">
                  Section name is missing.
                </h3>
              ) : (
                <h3 className="text-xl font-bold mb-2">{name}</h3>
              )}

              {isEmpty(value) ? (
                <p className="mb-2 text-red-500">Section value is missing.</p>
              ) : (
                <p className="mb-2">{value}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextViewer;
