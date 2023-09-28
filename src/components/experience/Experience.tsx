import React from "react";
import "./Experience.scss";

type ExperienceProps = {
  jobInfo: JobInfo;
};

export type JobInfo = {
  title: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
};

const Experience = ({ jobInfo }: ExperienceProps) => {
  const responsibilities = jobInfo.responsibilities.map((x) => <li>{x}</li>);

  return (
    <div className="work-exp">
      <h2 className="job-title">{jobInfo.title}</h2>
      <p className="company">{jobInfo.company}</p>
      <div className="date-location">
        <span className="date">{jobInfo.date}</span>
        <span className="location">{jobInfo.location}</span>
      </div>
      <ul className="responsibilities">{responsibilities}</ul>
      <br></br>
    </div>
  );
};

export default Experience;
