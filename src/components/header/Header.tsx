import React from "react";
import "./Header.scss";
import Link from "../link/Link";

const Header = (): JSX.Element => {
  function switchTheme(e: React.ChangeEvent<HTMLInputElement>) {
    if ((e.target as HTMLInputElement).checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
    <header className="header">
      <div className="theme-switch">
        <label className="theme-switch__toggle" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={switchTheme} />
          <div className="slider round"></div>
        </label>
      </div>
      <div className="header-content">
        <div className="picture">
          <img
            src={process.env.PUBLIC_URL + "image--steph.png"}
            alt="Steph Mansell"
            className="profile"
          />
        </div>
        <div className="summary">
          <h1 className="name">Stephanie Mansell</h1>
          <p className="main-job-title">Developer</p>
          <p className="summary-detail">
            A focused and passionate individual with a keen interest in software
            development. Quick to learn and is dedicated to developing their
            skills in programming. A motivated self-starter while also enjoying
            working as part of an agile project team.
          </p>
        </div>
      </div>
      <div className="links">
        <Link
          icon="email"
          link="mailto:mansell.steph@gmail.com"
          text="mansell.steph@gmail.com"
        />
        <Link icon="phonelink_ring" link="tel:07963598631" text="07963598631" />
        <Link
          icon="link"
          link="https://www.linkedin.com/in/stephanie-mansell/"
          text="www.linkedin.com/in/stephanie-mansell"
        />
      </div>
    </header>
  );
};
export default Header;
