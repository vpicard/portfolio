import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// https://stephane-monnot.github.io/react-vertical-timeline/#/

const Education = () => {
  return (
    <div className="education">
      <VerticalTimeline lineColor="#FFBD6F">

      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          dateClassName={"timeline-date"}
          date="2019 - 2022"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="30px"
              height="30px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/education.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Engineering Schools
          </h3>
          <h4 className="vertical-timeline-element-subtitle">IT Science and Embedded Systems</h4>
          <p>Central School of Electronic, Paris (75015) France</p>
          <li><b>Class delegate</b> during three years</li>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          dateClassName={"timeline-date"}
          date="2018 - 2019"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="30px"
              height="30px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/education.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
          Bachelor of Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Embedded Systems</h4>
          <p>University of Versailles Saint-Quentin-en-Yvelines, Vélizy-Villacoublay (78) France</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          dateClassName={"timeline-date"}
          date="2016 - 2018"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="30px"
              height="30px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/education.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Diploma of Higher Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">IT Science</h4>
          <p>University of Versailles Saint-Quentin-en-Yvelines, Vélizy-Villacoublay (78) France</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          dateClassName={"timeline-date"}
          date="2016"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="30px"
              height="30px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/education.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Scientific High-School Diploma
          </h3>
          <h4 className="vertical-timeline-element-subtitle">With honours</h4>
          <p>High school of Porte-Océane, Le Havre (76) France</p>
        </VerticalTimelineElement>
       

      </VerticalTimeline>
    </div>
  );
};

export default Education;
