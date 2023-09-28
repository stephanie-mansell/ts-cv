import React from "react";
import "./Technologies.scss";

export type TechProps = {
  languages: Languages;
};

type Languages = {
  name: string;
  level: number;
};

const Technologies = ({ languages }: TechProps) => {
  const innerStyle = { width: `${languages.level}%`, height: "100%" };

  return (
    <div className="outer-style">
      <div className="inner-style" style={innerStyle}>
        <span className="language-text">{languages.name}</span>
      </div>
    </div>
  );
};

export default Technologies;
