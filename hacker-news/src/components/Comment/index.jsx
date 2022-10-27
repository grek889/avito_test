import React, { useEffect, useState } from "react";
import { getStory } from "../../services/hnApi";

import  './Comment.scss'

export const Comment = ({comment}) => {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        getStory(comment).then((data) => data && setKids(data));
      }, [comment]);

  return (
    <>
        <h4 className="comment__author">{kids.by}</h4>
        <h4 className="comment__text">{kids.text}</h4>
    </>
  )
}
