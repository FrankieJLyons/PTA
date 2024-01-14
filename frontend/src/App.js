import { useState, useEffect } from "react";
import axios from "axios";
import SideNavigation from "./components/SideNavigation";
import TextViewer from "./components/TextViewer";

const App = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/data");
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div key="App">
      <div key="content-container" className="flex flex-row">
        <SideNavigation content={content} onHeadingClick={() => {}} />
        <TextViewer content={[]} />
      </div>
    </div>
  );
};

export default App;
