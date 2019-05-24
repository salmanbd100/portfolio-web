import React from "react";
import { Timeline, List, Icon } from "antd";
import { TitleBlock } from "../components";
const kutumbitaData = [
  "Pixel perfect psd to React component conversion.",
  "Using data from Rest api & manage local state with Redux.",
  "Fixing any UI related bug in admin dashboard."
];
const easyclapData = [
  "Pixel perfect sketch to React component conversion.",
  "Using data from Rest api.",
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
      <div className="top-bar">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
          className="company-name"
        >
          <h3>{props.companyName}</h3>
        </a>
        <h4 className="year">{props.year}</h4>
      </div>
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
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience icon" />}>
          <SingleExprience
            link="https://kutumbita.com/"
            companyName="Kutumbita"
            year="Feb 2019 - Present"
            data={kutumbitaData}
          />
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience icon" />}>
          <SingleExprience
            link="https://www.easyclap.com/"
            companyName="Easyclap"
            year="Dec 2017 - Jan 2019"
            data={easyclapData}
          />
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience icon" />}>
          <SingleExprience
            link="http://spondonit.com/"
            companyName="Spondon It"
            year="Sep 2016 - Nov 2017"
            data={spondonData}
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default WorkExprience;
