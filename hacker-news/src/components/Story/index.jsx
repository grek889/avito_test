import React, { useEffect, useState } from "react";
import { getStory } from "../../services/hnApi";
import { Link } from "react-router-dom";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, [storyId]);

  const date = new Date(story.time * 1000);

  return (
    <>
      <Link className="content__list__news__link" to={`/news/${story.id}`}>{story.title}</Link>
      <div className="content__list__news__story">
        <h4>Рейтинг: {story.score}</h4>
        <h4>Автор: {story.by}</h4>
        <h4>{date.toLocaleDateString("ru-RU")}</h4>
      </div>
    </>
  );
};
