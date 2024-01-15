import { useState } from "react";

const SideNavigation = ({ content, onHeadingClick }) => {
  const [openHeadings, setOpenHeadings] = useState([]);

  const toggleHeading = (headingId) => {
    setOpenHeadings((prevOpenHeadings) => {
      if (prevOpenHeadings.includes(headingId)) {
        return prevOpenHeadings.filter((id) => id !== headingId);
      } else {
        return [...prevOpenHeadings, headingId];
      }
    });
  };

  const hasChildren = (headings, parentId) => {
    return headings.some((heading) => heading.parent_id === parentId);
  };

  const renderHeadings = (content, parentId = "") => {
    if (!content) return "No content found.";

    const filteredHeadings = content.filter(
      (heading) => heading.parent_id === parentId
    );

    return filteredHeadings.map((heading) => {
      return (
        <div key={heading.name} className={"flex flex-col ml-4"}>
          <div className="flex items-center">
            {hasChildren(content, heading.id) ? (
              <button
                onClick={() => toggleHeading(heading.id)}
                className="mx-2 text-gray-500 focus:outline-none"
              >
                {openHeadings.includes(heading.id) ? "▼" : "►"}
              </button>
            ) : (
              <div className="mx-4" />
            )}

            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => onHeadingClick(heading)}
            >
              {heading.name}
            </p>
          </div>
          {openHeadings.includes(heading.id) &&
            renderHeadings(content, heading.id)}
        </div>
      );
    });
  };

  return (
    <div id="side-navigation" className="flex flex-col w-1/4 p-2 bg-white">
      <div className="border border-solid p-2" style={{ minHeight: "98vh" }}>
        {renderHeadings(content.document)}
      </div>
    </div>
  );
};

export default SideNavigation;
