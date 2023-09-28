import React from "react";
import Experience, { JobInfo } from "./components/experience/Experience";
import { jobs, language, education, hobbies } from "./Data";
import "./Theme.scss";

import "./App.scss";
import Header from "./components/header/Header";
import Technologies from "./components/technologies/Technologies";
import Hobbies from "./components/hobbies/Hobbies";

function App() {
  return (
    <div className="CV">
      <Header />
      <div className="content">
        <div className="content__left">
          <h1 className="workexp">WORK EXPERIENCE</h1>
          {jobs.map((x) => (
            <Experience jobInfo={x} />
          ))}
        </div>
        <div className="content__right">
          <h1 className="workexp">TECHNICAL SKILLS</h1>
          {language.map((x) => (
            <Technologies languages={x} />
          ))}
          <br></br>
          <h1 className="workexp">EDUCATION</h1>

          {education.map((x) => (
            <Experience jobInfo={x} />
          ))}

          <h1 className="workexp">HOBBIES</h1>
          {hobbies.map((x) => (
            <Hobbies title={x} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
