import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#FFBD6F">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
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
              width="25px"
              height="25px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/work.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Test Engineer at Nexter Systems (Apprenticeship)
          </h3>
          <h4 className="mt-2 small vertical-timeline-element-subtitle">
            Versailles (78), France
          </h4>
          <p>
            <b>Jaguar project :</b>
            <li className="mt-2">
              Programmed a C++ application based on Qt framework to translate
              messages emitted by an specific equipment
            </li>
            <li>
              I assisted the Engineers during their tests on test bench and
              circuit
            </li>
            <br />
            <b>RAPIDFire project</b>
            <li className="mt-2">
              I manage the arrangement of the test bench project
            </li>
            <li>
              I designed multiple buttons boxes to simulate equipment on test
              bench
            </li>
            <li>I participated on the redaction of the test procedure</li>
            <li>
              I animated and assisted the Engineers during their tests on test
              bench and circuit
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
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
              width="25px"
              height="25px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/work.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Technician at Larco (Apprenticeship)
          </h3>
          <h4 className="mt-2 small vertical-timeline-element-subtitle">
            Argenteuil (95), France
          </h4>
          <p>
            Inspection and maintenance of explosive atmosphere products.
            Redaction of technical procedures, intervention on oil depots and
            intervention on test bench
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          date="April to July - 2018"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="25px"
              height="25px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/work.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Technical assistant at Bengs (Final year internship)
          </h3>
          <h4 className="mt-2 small vertical-timeline-element-subtitle">
            Paris (75), France
          </h4>
          <p>User assistant, sharepoint administrator and IT network manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          date="July - 2018"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="25px"
              height="25px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/work.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            IFP (Seasonal work)
          </h3>
          <h4 className="mt-2 small vertical-timeline-element-subtitle">
            Rueil-Malmaison (92), France
          </h4>
          <p>Help in the enterprise digitalization</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFBD6F", color: "#0D3850" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFBD6F" }}
          date="August - 2016"
          iconStyle={{
            background: "#FFBD6F",
            color: "#0D3850",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              width="25px"
              height="25px"
              className="education-logo"
              alt="education logo"
              src={require("../assets/images/work.png")}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Orange (Seasonal work)
          </h3>
          <h4 className="mt-2 small vertical-timeline-element-subtitle">
            Le Havre (76), France
          </h4>
          <p>Update of the phone network clients database</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
