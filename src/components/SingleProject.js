import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

class SingleProject extends Component {
  render() {
    let { name, languages, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="single-project col-lg">
        <div className="single-project-content">
          <img src={picture} alt=""/>
          <div className="card-bottom">
            <h5>{name}</h5>
            <div className="icons">
              {languagesIcons.map((icon) => (
                <FontAwesomeIcon icon={icon} key={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;
