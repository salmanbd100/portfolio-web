import React, { Component } from "react";
import { Sidebar } from "./components";
import { BackTop } from "antd";
import { MainContainer } from "./container";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }
  render() {
    return (
      <div className="container main-wrapper">
        <Router>
          <>
            <Sidebar />
            <Route
              name="home-page"
              path="/"
              exact
              component={MainContainer}
            />
            <BackTop />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
