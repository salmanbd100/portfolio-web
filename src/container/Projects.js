import React from "react";
import { Row, Col } from "antd";
import { TitleBlock } from "../components";

function SingleProject(props) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link} className="single-project">
      <div className="project-name">
        <img src={props.logo} alt="" className="logo" />
        <h4 className="name">{props.name}</h4>
      </div>
      <div className="desc">{props.description}</div>
      <div className="contribution">
        <b>Contribution :</b> {props.contribution}
      </div>
    </a>
  );
}
function Projects() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Projects" />
      <Row gutter={16}>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="EasyClap"
            logo="assets/images/easyclap.jpg"
            link="https://www.easyclap.com/"
            description="Sass platform designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Kutumbita"
            logo="assets/images/kutumbita.png"
            link="https://kutumbita.com/"
            description="Sass platform for garments worker and manager"
            contribution="Work with react view layer and and get data from rest api"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            // name="Pixel Store"
            logo="assets/images/pixelstore.png"
            link="http://salmanrahman.com/projects/pixel-store/"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Educare"
            logo="assets/images/educare.png"
            link="http://salmanrahman.com/projects/educare/#"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            // name="Best Book"
            logo="assets/images/bestbook.png"
            link="http://salmanrahman.com/projects/bestbook/"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Pixels"
            logo="assets/images/pixels.png"
            link="http://salmanrahman.com/projects/pixels/"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            // name="Pixels"
            logo="assets/images/execution.png"
            link="http://salmanrahman.com/projects/execution/"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            // name="Pixels"
            logo="assets/images/bicycle.png"
            link="http://salmanrahman.com/projects/bicycle/"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Zeplin"
            logo="assets/images/zeplin.png"
            link="http://salmanrahman.com/projects/apexis/apexis-template/04-home-zeplin.html"
            description="EasyClap is a new place designed for art lovers and professionals"
            contribution="100% sketch to react component conversion"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
