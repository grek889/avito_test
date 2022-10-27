import React, { useState } from "react";
import img from "./img/haha.jpg"

export const About = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Тут что-то будет</h2>
      <p className="pipi" onClick={() => setOpen(true)}>не тыкай</p> 
      {open && (<div><img src={img} alt="hah"></img></div>)}
    </div>
  );
};
