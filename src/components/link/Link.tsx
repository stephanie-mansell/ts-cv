import React from "react";
import "./Link.scss";

export type LinkProps = {
  link: string;
  text: string;
  icon: string;
};

const Link = ({ link, text, icon }: LinkProps) => {
  return (
    <div>
      <a href={link} className="link">
        <span className="material-icons icon">{icon}</span>
        {text}
      </a>
    </div>
  );
};

export default Link;
