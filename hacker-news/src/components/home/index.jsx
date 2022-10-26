import React, { useEffect, useState } from "react";
import { Story } from "../Story";
import { getStoryIds } from "../../services/hnApi.js";


const Home = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setLists(data.slice(0, 100)));

    setInterval(() => {
      getStoryIds().then((data) => setLists(data));
    }, 60000);
  }, []);

  return (
        <ul>
          {lists &&
            lists.map((storyId) => (
              <li key={storyId}>
                <Story storyId={storyId} />
              </li>
            ))}
        </ul>
  );
};

export default Home;
