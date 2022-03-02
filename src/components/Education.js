import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://stephane-monnot.github.io/react-vertical-timeline/#/


const Education = () => {


  window.addEventListener("load", function() {
    this.document.getElementById("default-active").focus();
  });

  return (
    <div className="education">
      <VerticalTimeline lineColor="#FFBD6F">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          date="2019 - 2022"
          iconStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          icon={<FontAwesomeIcon icon="fa-thin fa-file-certificate" />}
        >
          <h3 id="default-active" className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
