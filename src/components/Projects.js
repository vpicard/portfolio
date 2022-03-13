import React, { Component } from "react";
import { projectsData } from "../data/projectsData";
import SingleProject from "./SingleProject";

class Projects extends Component {
  state = {
    projects: projectsData,
  };

  render() {
    let { projects } = this.state;

    return (
      <div className="projects-content col-lg">
        {projects.map((item) => {
          return <SingleProject key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default Projects;
