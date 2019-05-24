import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    current: "1"
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="main-sidebar">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-img"
              src="assets/images/logo.jpg"
              alt="Salman"
            />
          </Link>
        </div>
        <h3 className="text">Salman Rahman</h3>
        <h5 className="text">Frontend Web Developer</h5>
        <p>
          Sector #10, Road #5, House #7, Uttara, Dhaka. 01911921394
          salman.bd100@gmail.com
        </p>
        <Menu
          onClick={this.handleClick}
          mode="inline"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="1">
            <a href="#link3">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#link2">About</a>
          </Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Skills</Menu.Item>
        </Menu>
        <p>© Copyright ©2019 All rights reserved |</p>
      </div>
    );
  }
}

export default Sidebar;
