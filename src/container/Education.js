import React from "react";
import { Timeline, List, Icon } from "antd";
import { TitleBlock } from "../components";

function SingleEducation(props) {
  return <div className="single-education" />;
}
function Education() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Education" />
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
}

export default Education;
