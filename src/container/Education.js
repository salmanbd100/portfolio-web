import React from "react";
import { Timeline } from "antd";
import { TitleBlock } from "../components";

function Education() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Education" />
      <Timeline>
        <Timeline.Item dot={<img src="assets/images/education.svg" style={{ height: "20px"}} alt="education icon" />}>
          <h4>Masters Of Science (2013-2014)</h4>
          <p>University of Dhaka</p>
          <p>Subject : Statistics</p>
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/education.svg" style={{ height: "20px"}} alt="education icon" />}>
          <h4>Bachelor Of Science (2010-2014)</h4>
          <p>National University</p>
          <p>Subject : Statistics</p>
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/education.svg" style={{ height: "20px"}} alt="education icon" />}>
          <h4>Higher School Certificate (2009)</h4>
          <p>K M H Degree College</p>
          <p>Group : Science</p>
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/education.svg" style={{ height: "20px"}} alt="education icon" />}>
          <h4>Secondary School Certificate (2007)</h4>
          <p>K M H Degree College</p>
          <p>Group : Science</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default Education;
