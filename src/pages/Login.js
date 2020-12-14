import React from "react";
import "../css/Login.css";
import developer__activity from "../image/developer__activity.svg";
import react__icon from "../image/react__icon.png";

function Login() {
  return (
    <div className="login">
      <a className="login__header">
        <img src={react__icon} alt="react" />
        <h1>React Github</h1>
      </a>
      <div className="login__section">
        <div className="login__sectionLeft">
          <h2>Built For Developers</h2>
          <p>
            A GitHub User Search App that tells about the user's info such as
            followers, number of projects most language used and much more !
          </p>
          <p>
            Used{" "}
            <a
              className="links"
              href="https://docs.github.com/en/free-pro-team@latest/rest"
            >
              GitHub API
            </a>{" "}
            for fetching User's Info{" "}
            <a className="links" href="https://www.chartjs.org/">
              Chart.js
            </a>{" "}
            for representation of user Info .
          </p>
        </div>
        <div className="login__sectionRight">
          <img src={developer__activity} alt="developerActivity" />
          <button>Login With Github</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
