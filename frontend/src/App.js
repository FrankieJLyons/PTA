import { useState, useEffect } from "react";
import axios from "axios";
import SideNavigation from "./components/SideNavigation";
import TextViewer from "./components/TextViewer";

const App = () => {
  const [content, setContent] = useState([]);
  const [selectedHeading, setSelectedHeading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/data");
        const data = response.data.content;
        setContent(data);
        setSelectedHeading(data.document[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onHeadingClick = (selectedHeading) => {
    setSelectedHeading(selectedHeading);
  };

  return (
    <div key="App">
      <div key="content-container" className="flex flex-row">
        <SideNavigation content={content} onHeadingClick={onHeadingClick} />
        <TextViewer content={content} selectedHeading={selectedHeading} />
      </div>
    </div>
  );
};

export default App;
