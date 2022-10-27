import React, { useEffect, useState } from "react";
import { Story } from "../Story";
import { getStoryIds } from "../../services/hnApi.js";

import "./home.scss";

export const Home = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setLists(data.slice(0, 100)));

    setInterval(() => {
      getStoryIds().then((data) => setLists(data));
    }, 60000);
  }, []);

  const reload = () => {
    getStoryIds().then((data) => setLists(data.slice(0, 100)));
  };

  return (
    <div className="content">
      <ul className="content__list">
        {lists &&
          lists.map((storyId) => (
            <li key={storyId} className="content__list__news">
              <Story storyId={storyId} />
            </li>
          ))}
        <button onClick={reload}>Обновить</button>
      </ul>
    </div>
  );
};

export default Home;
