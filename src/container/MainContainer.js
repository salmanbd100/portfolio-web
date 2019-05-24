import React, { Component } from "react";
import { Summary, WorkExprience, Projects, Education, Skills } from "./";

export class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content-body">
          <Summary />
          <Skills />
          <WorkExprience />
          <Projects />
          <Education />
          
        </div>
      </div>
    );
  }
}

export default MainContainer;
