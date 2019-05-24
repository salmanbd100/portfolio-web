import React from "react";
import { Timeline, List, Icon } from "antd";
import { TitleBlock } from "../components";
const kutumbitaData = [
  "Pixel perfect psd to React component conversion.",
  "Fixing any UI related bug in admin dashboard."
];
const easyclapData = [
  "Pixel perfect sketch to React component conversion.",
  "Using data from rest api.",
  "Fixing any design related bug in existing project."
];
const spondonData = [
  "Create premium quality Html5 Template.",
  "Pixel perfect psd to html conversion.",
  "wordpress theme customization."
];

function SingleExprience(props) {
  return (
    <div className="single-exprience">
      <a target="_blank" href={props.link} className="company-name">
        <h3>{props.companyName}</h3>
      </a>
      <h4>FrontEnd Developer</h4>
      <div className="responsiblities">
        <List
          size="small"
          header={<p>Responsibilities : </p>}
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <Icon className="mx-10" type="check" /> {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
function WorkExprience() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Work Exprience" />
      <Timeline>
        <Timeline.Item>
          <SingleExprience
            link="https://kutumbita.com/"
            companyName="Kutumbita"
            data={kutumbitaData}
          />
        </Timeline.Item>
        <Timeline.Item>
          <SingleExprience
            link="https://www.easyclap.com/"
            companyName="Easyclap"
            data={easyclapData}
          />
        </Timeline.Item>
        <Timeline.Item>
          <SingleExprience
            link="http://spondonit.com/"
            companyName="Spondon It"
            data={spondonData}
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default WorkExprience;
