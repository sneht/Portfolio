import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdBusinessCenter } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import JsonFilee from "../../Json/data2.json";

const Education = () => {
  return (
    <>
      <div id="Education"></div>
      <div className="Main_edu">
        <div className="Welcomeee" data-aos="fade-right">
          <p style={{paddingTop:"40px"}}>{JsonFilee.education.head}</p>
        </div>
        <div>
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={JsonFilee.education.date}
              icon={<MdSchool />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.title}
              </h3>
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.name}
              </h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={JsonFilee.education.date2}
              icon={<MdSchool />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.title2}
              </h3>
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.name2}
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={JsonFilee.education.date2}
              icon={<MdSchool />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.title3}
              </h3>
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.Course}
              </h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={JsonFilee.education.date2}
              icon={<MdBusinessCenter />}
              iconStyle={{ backgroundColor: "black", color: "white" }}
            >
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.title4}
              </h3>
              <h3 className="vertical-timeline-element-title">
                {JsonFilee.education.name4}
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
export default Education;
