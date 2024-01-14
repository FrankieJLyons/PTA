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
        console.log(response);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log({ content });

  // get headings list
  // get content based on selected heading id

  return (
    <div key="App" className="flex flex-row">
      Hello World
      <SideNavigation lists={[]} onClick={() => {}} selectedItemId={null} />
      <TextViewer content={[]} />
    </div>
  );
};

export default App;
