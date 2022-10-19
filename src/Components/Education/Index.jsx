import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdBusinessCenter } from "react-icons/md";
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <div className="Main_edu">
      <div className="Welcomee">
        <p>Education</p>
        </div>
        <div>
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019"
              icon={<MdSchool />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">School</h3>
              <h3 className="vertical-timeline-element-title">KB,Radhanpur</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022"
              icon={<MdSchool />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">College</h3>
              <h3 className="vertical-timeline-element-title">Diploma CE</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022"
              icon={<MdBusinessCenter />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">Job</h3>
              <h3 className="vertical-timeline-element-title">FrontEnd Army</h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div id="Skills">
        </div>
    </div>
  );
};
export default Education;