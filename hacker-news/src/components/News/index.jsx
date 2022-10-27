import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../../services/hnApi";
import { Comment } from "../Comment";
import "./News.scss"

export const News = () => {
  const [story, setStory] = useState({});

  const { id } = useParams();
  const date = new Date(story.time * 1000);

  useEffect(() => {
    getStory(id).then((data) => data && setStory(data));
  }, [id]);

  const kids = story.kids;

  return (
    <div className="some-news">
      <h3 className="some-news__title">{story.title}</h3>
      <a href={story.url}>{story.url}</a>
      <div className="Grey">
      <h4 className="Grey__date">{date.toLocaleDateString("ru-RU")}</h4>
      <h4 className="Grey__author">by {story.by}</h4>
      <h4 className="Grey__amount-comments">comments {kids ? kids.length : "0"}</h4>
      </div>
      <div className="some-news__comment">{kids && (kids.map((kid, index) => <li key={index} className="comment"><Comment comment={kid}/></li> ))}</div>
    </div>
  );
};
