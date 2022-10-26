import React, { useEffect, useState } from 'react'
import { getStory } from "../../services/hnApi";
import {Link } from "react-router-dom";

export const Story = ({storyId}) => {
const [story, setStory] = useState({})

useEffect(() => {
    getStory(storyId).then(data => data &&  setStory(data) );
}, [storyId])

const date = new Date(story.time*1000)

return (
    <>
        <Link  to={`/news/${story.id}`}>{story.title}</Link>
        <p>Рейтинг: {story.score}</p> 
        <p>Автор: {story.by}</p> 
        <p>{date.toLocaleDateString("ru-RU")}</p> 
    </>
);
}
